'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function MarqueeFeaturesSection() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!marqueeRef.current) return;

        const wrapper = marqueeRef.current;
        if (!wrapper) return;

        const items = wrapper.querySelectorAll('.marquee-item');
        if (!items || items.length === 0) return;

        // GSAP animation - moving RIGHT continuously
        const tl = gsap.timeline({ repeat: -1 });

        tl.fromTo(wrapper,
            { xPercent: 0 },
            {
                xPercent: -50,
                duration: 40,
                ease: 'none'
            }
        );

        return () => {
            tl.kill();
        };
    }, []);

    const features = [
        { text: 'AI Animated' },
        { text: 'User Friendly' },
        { text: 'High-Quality Output' },
        { text: 'Innovative Design' }
    ];

    return (
        <section style={{
            backgroundImage: 'url(/marquee-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '30px 0',
            borderTop: '1px solid rgba(0,0,0,0.05)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            overflow: 'hidden',
            marginTop: '40px',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{ overflow: 'hidden' }}>
                <div ref={marqueeRef} style={{
                    display: 'flex',
                    whiteSpace: 'nowrap',
                    gap: '0',
                    width: 'max-content'
                }}>
                    {/* Repeat features multiple times for seamless loop */}
                    {[...Array(8)].map((_, groupIdx) => (
                        features.map((feature, idx) => (
                            <div
                                key={`${groupIdx}-${idx}`}
                                className="marquee-item"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '18px',
                                    marginRight: '140px'
                                }}
                            >
                                {/* Gradient Purple Star Icon */}
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img
                                        src="/about-section/purple-star.png"
                                        alt=""
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>

                                {/* Feature Text */}
                                <span style={{
                                    fontSize: '24px',
                                    fontWeight: '500',
                                    color: '#333',
                                    letterSpacing: '0.5px',
                                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
                                }}>{feature.text}</span>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </section>
    );
}
