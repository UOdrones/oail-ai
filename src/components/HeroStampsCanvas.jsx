import React, { useEffect, useRef, useState } from 'react';
import { engine } from './nodes/nodeEngine';
import { isReducedMotion } from './nodes/reducedMotion';
import { easeOutCubic, randomRange, getPointAtLength } from './nodes/geometry';

export default function HeroStampsCanvas({ logoRef }) {
    const canvasRef = useRef(null);
    const rafRef = useRef(null);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        setReducedMotion(isReducedMotion());
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });

        // Scale for Retina/High-DPI displays (Cap at 2 for performance)
        const setupCanvas = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const rect = canvas.parentElement.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            ctx.scale(dpr, dpr);
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;

            // Check mobile breakpoint for engine
            engine.init(window.innerWidth < 768);
        };

        setupCanvas();
        window.addEventListener('resize', setupCanvas);

        // Main Render Loop
        const render = (timestamp) => {
            // 1. Calculate Center from Logo Ref
            let centerX = window.innerWidth / 2;
            let centerY = window.innerHeight / 2;

            if (logoRef && logoRef.current) {
                const logoRect = logoRef.current.getBoundingClientRect();
                centerX = logoRect.left + logoRect.width / 2;
                // Adjust for floating animation offset roughly
                centerY = logoRect.top + logoRect.height / 2;
            }

            // 2. Clear canvas
            const rect = canvas.parentElement.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);

            if (reducedMotion) {
                // Draw static faint stamps only
                drawStaticStamps(ctx, centerX, centerY);
                return;
            }

            // 3. Engine Tick
            engine.update(timestamp, centerX, centerY);
            const { routes, stamps, hoverState } = engine.getRenderData();

            // 4. Draw Active Routes (Trace + Head Dot)
            ctx.lineWidth = hoverState ? 1.5 : 1;

            routes.forEach(route => {
                const easeProg = easeOutCubic(route.progress);
                const currentLength = route.distance * easeProg;

                // Draw traced path so far
                ctx.beginPath();
                ctx.moveTo(route.path[0].x, route.path[0].y);
                for (let i = 1; i < route.path.length; i++) {
                    const pt = route.path[i];
                    if (currentLength >= pt.totalLengthAtNode) {
                        ctx.lineTo(pt.x, pt.y);
                    } else {
                        const prevPt = route.path[i - 1];
                        const segProgress = (currentLength - prevPt.totalLengthAtNode) / pt.length;
                        const curX = prevPt.x + (pt.x - prevPt.x) * segProgress;
                        const curY = prevPt.y + (pt.y - prevPt.y) * segProgress;
                        ctx.lineTo(curX, curY);
                        break;
                    }
                }

                // Add red glow effect to traces
                ctx.shadowColor = 'rgba(229, 57, 53, 0.8)';
                ctx.shadowBlur = 10;

                ctx.strokeStyle = hoverState ? 'rgba(229, 57, 53, 0.8)' : 'rgba(255, 255, 255, 0.6)';
                ctx.stroke();

                // Draw Bright glowing dot at the trace head
                const headPt = getPointAtLength(route.path, currentLength);
                ctx.beginPath();
                ctx.arc(headPt.x, headPt.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = hoverState ? 'rgba(229, 57, 53, 1)' : 'rgba(255, 255, 255, 1)';

                // Slightly stronger glow for the head
                ctx.shadowBlur = 15;
                ctx.fill();

                // Reset shadow to avoid affecting other draws unintentionally
                ctx.shadowColor = 'transparent';
                ctx.shadowBlur = 0;
            });

            // 5. Draw Persistent Stamps (Traces + Pads)
            stamps.forEach(stamp => {
                const alpha = stamp.opacity * (hoverState ? 0.6 : 0.4);

                // Draw Trace Path
                if (stamp.path && stamp.path.length > 0) {
                    ctx.beginPath();
                    ctx.moveTo(stamp.path[0].x, stamp.path[0].y);
                    for (let i = 1; i < stamp.path.length; i++) {
                        ctx.lineTo(stamp.path[i].x, stamp.path[i].y);
                    }
                    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.4})`; // Trace is fainter than pad
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

                // Draw Pad (Circuit via)
                ctx.beginPath();
                ctx.arc(stamp.x, stamp.y, 4, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(stamp.x, stamp.y, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(10, 10, 10, ${stamp.opacity})`; // Dark hole
                ctx.fill();
                ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            });

            rafRef.current = requestAnimationFrame(render);
        };

        if (!reducedMotion) {
            rafRef.current = requestAnimationFrame(render);
        } else {
            render(0); // Draw once instantly
        }

        return () => {
            window.removeEventListener('resize', setupCanvas);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [logoRef, reducedMotion]);

    // Hook up hover event to logo
    useEffect(() => {
        if (!logoRef || !logoRef.current || reducedMotion) return;

        const el = logoRef.current;
        const enter = () => engine.setHover(true);
        const leave = () => engine.setHover(false);

        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);

        return () => {
            el.removeEventListener('mouseenter', enter);
            el.removeEventListener('mouseleave', leave);
        };
    }, [logoRef, reducedMotion]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
}

// Draw a deterministic set of static stamps for reduced motion
function drawStaticStamps(ctx, cx, cy) {
    const drawStamp = (rx, ry, a) => {
        // Synthesize an angled trace
        ctx.beginPath();
        ctx.moveTo(cx + rx * 0.4, cy + ry * 0.4);
        ctx.lineTo(cx + rx, cy + ry);
        ctx.strokeStyle = `rgba(255, 255, 255, ${a * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx + rx, cy + ry, 4, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${a})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx + rx, cy + ry, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10, 10, 10, 1)`;
        ctx.fill();
        ctx.strokeStyle = `rgba(255, 255, 255, ${a})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
    };

    drawStamp(200, -100, 0.15);
    drawStamp(-180, -150, 0.2);
    drawStamp(150, 200, 0.12);
    drawStamp(-250, 100, 0.15);
    drawStamp(300, 50, 0.18);
    drawStamp(-100, 280, 0.1);
}
