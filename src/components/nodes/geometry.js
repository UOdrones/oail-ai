// Easing Functions
export const easeOutCubic = (t) => {
    return 1 - Math.pow(1 - t, 3);
};

export const easeInOutSine = (t) => {
    return -(Math.cos(Math.PI * t) - 1) / 2;
};

// Math Helpers
export const randomRange = (min, max) => Math.random() * (max - min) + min;

export const getPointOnCircle = (cx, cy, radius, angle) => ({
    x: cx + Math.cos(angle) * radius,
    y: cy + Math.sin(angle) * radius,
});

export const generateRoute = (centerX, centerY, minRadius, maxRadius) => {
    // 8 orthogonal/diagonal compass directions
    const angleIndex = Math.floor(randomRange(0, 8));
    const baseAngle = (Math.PI / 4) * angleIndex;

    // Start slightly outside the logo bounds
    const start = getPointOnCircle(centerX, centerY, minRadius, baseAngle);

    // Path points array with distance tracking
    const path = [{ x: start.x, y: start.y, length: 0, totalLengthAtNode: 0 }];
    let currentPt = { ...start };
    let currentAngle = baseAngle;
    let totalLength = 0;

    // Add 3 to 6 segments for a more complex, far-reaching circuit trace
    const numSegments = Math.floor(randomRange(3, 6));

    for (let i = 0; i < numSegments; i++) {
        // Bend direction: bias towards 90 degrees with occasional 45 degree bends
        if (i > 0) {
            const turnAngles = [-Math.PI / 2, Math.PI / 2, -Math.PI / 2, Math.PI / 2, -Math.PI / 4, Math.PI / 4];
            currentAngle += turnAngles[Math.floor(randomRange(0, turnAngles.length))];
        }

        // Longer intermediate segments
        let dist = randomRange(60, 300);
        // Ensure final segment extends sufficiently outward toward the edge
        if (i === numSegments - 1) {
            dist = randomRange(200, Math.max(300, maxRadius - minRadius));
        }

        const nextPt = {
            x: currentPt.x + Math.cos(currentAngle) * dist,
            y: currentPt.y + Math.sin(currentAngle) * dist
        };

        const segLen = Math.hypot(nextPt.x - currentPt.x, nextPt.y - currentPt.y);

        totalLength += segLen;
        path.push({
            x: nextPt.x,
            y: nextPt.y,
            length: segLen,
            totalLengthAtNode: totalLength
        });

        currentPt = nextPt;
    }

    return {
        path,
        start,
        end: currentPt,
        distance: totalLength
    };
};

export const getPointAtLength = (path, currentLength) => {
    for (let i = 1; i < path.length; i++) {
        const pt = path[i];
        if (currentLength <= pt.totalLengthAtNode || i === path.length - 1) {
            const prevPt = path[i - 1];
            const lengthInSeg = Math.max(0, currentLength - prevPt.totalLengthAtNode);
            const segProgress = pt.length > 0 ? Math.min(1, lengthInSeg / pt.length) : 0;
            return {
                x: prevPt.x + (pt.x - prevPt.x) * segProgress,
                y: prevPt.y + (pt.y - prevPt.y) * segProgress
            };
        }
    }
    return path[path.length - 1];
};
