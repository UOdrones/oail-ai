import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function HeroNodes() {
    const particlesInit = useCallback(async (engine) => {
        // Loads the tsparticles package bundle
        await loadFull(engine);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                className="w-full h-full mix-blend-screen"
                options={{
                    fullScreen: {
                        enable: false,
                        zIndex: 2
                    },
                    background: {
                        color: "transparent",
                    },
                    fpsLimit: 60,
                    particles: {
                        number: {
                            value: 100, // Restored higher count
                            density: {
                                enable: true,
                                value_area: 1200
                            }
                        },
                        color: {
                            value: ["#E53935", "#ff5252", "#ffffff"] // Heavy reds
                        },
                        links: {
                            enable: true,
                            color: "#E53935",
                            opacity: 0.4, // Brighter prominent red connections
                            distance: 180,
                            width: 1.2
                        },
                        move: {
                            enable: true,
                            speed: 0.3, // Slow drift
                            direction: "none",
                            random: true,
                            straight: false,
                            outModes: {
                                default: "bounce"
                            }
                        },
                        size: {
                            value: { min: 1, max: 2 }
                        },
                        opacity: {
                            value: { min: 0.1, max: 0.4 },
                            animation: {
                                enable: true,
                                speed: 0.2,
                                minimumValue: 0.1
                            }
                        }
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            }
                        },
                        modes: {
                            repulse: {
                                distance: 100, // Reduced repel intensity
                                duration: 0.8
                            }
                        }
                    },
                    detectRetina: true
                }}
            />
        </div>
    );
}
