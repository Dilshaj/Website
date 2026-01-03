'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroImageStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const img1Ref = useRef<HTMLDivElement>(null);
    const img2Ref = useRef<HTMLDivElement>(null);
    const img3Ref = useRef<HTMLDivElement>(null);
    const img4Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!img1Ref.current || !img2Ref.current || !img3Ref.current || !img4Ref.current) return;

        const images = [img1Ref.current, img2Ref.current, img3Ref.current, img4Ref.current];

        // Define positions for 4 images
        const positions = [
            { x: 0, y: 0, scale: 1, zIndex: 10, opacity: 1, rotateY: -2, rotateX: 2 },
            { x: 40, y: 25, scale: 0.94, zIndex: 7, opacity: 0.9, rotateY: -1, rotateX: 1 },
            { x: 80, y: 50, scale: 0.88, zIndex: 5, opacity: 0.7, rotateY: 0, rotateX: 0 },
            { x: 120, y: 75, scale: 0.82, zIndex: 2, opacity: 0.5, rotateY: 1, rotateX: -1 }
        ];

        // Initial setup
        images.forEach((img, i) => {
            gsap.set(img, {
                x: positions[i].x,
                y: positions[i].y,
                scale: positions[i].scale,
                zIndex: positions[i].zIndex,
                opacity: positions[i].opacity,
                rotateY: positions[i].rotateY,
                rotateX: positions[i].rotateX,
                transformPerspective: 1000
            });
        });

        const duration = 1.4;
        const interval = 3.5;

        const animateStack = () => {
            const tl = gsap.timeline({
                onComplete: () => {
                    const front = images.shift();
                    if (front) images.push(front);
                    gsap.delayedCall(interval, animateStack);
                }
            });

            // 1. FRONT (images[0]) -> slides to BACK
            tl.to(images[0], {
                x: 250,
                y: -100,
                rotateY: 25,
                rotateZ: 10,
                scale: 1.1,
                opacity: 0,
                duration: duration * 0.45,
                ease: "power2.in"
            })
                .set(images[0], { zIndex: positions[3].zIndex })
                .to(images[0], {
                    x: positions[3].x,
                    y: positions[3].y,
                    scale: positions[3].scale,
                    opacity: positions[3].opacity,
                    rotateY: positions[3].rotateY,
                    rotateZ: 0,
                    duration: duration * 0.55,
                    ease: "back.out(1.2)"
                });

            // 2. Others move forward
            [1, 2, 3].forEach((idx) => {
                const targetPos = positions[idx - 1];
                tl.to(images[idx], {
                    x: targetPos.x,
                    y: targetPos.y,
                    scale: targetPos.scale,
                    opacity: targetPos.opacity,
                    zIndex: targetPos.zIndex,
                    rotateY: targetPos.rotateY,
                    rotateX: targetPos.rotateX,
                    duration: duration,
                    ease: "power4.inOut"
                }, 0);
            });
        };

        const initialDelay = gsap.delayedCall(1, animateStack);

        return () => {
            gsap.killTweensOf(images);
            initialDelay.kill();
        };
    }, []);

    return (
        <div ref={containerRef} style={{
            position: 'relative',
            width: '100%',
            maxWidth: '440px',
            aspectRatio: '0.8',
            perspective: '1500px',
            margin: '0 auto'
        }}>
            {/* Image 4 */}
            <div ref={img4Ref} style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '40px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                background: '#f8f8f8',
                border: '1px solid rgba(0,0,0,0.03)'
            }}>
                <img src="/hero-stack/img4.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Image 3 */}
            <div ref={img3Ref} style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '40px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                background: '#f0f0f0',
                border: '1px solid rgba(0,0,0,0.04)'
            }}>
                <img src="/hero-stack/img3.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Image 2 */}
            <div ref={img2Ref} style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '40px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0,0,0,0.12)',
                background: '#e0e0e0',
                border: '1px solid rgba(0,0,0,0.05)'
            }}>
                <img src="/hero-stack/img2.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Image 1 (New Thumbs Up Girl) */}
            <div ref={img1Ref} style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '40px',
                overflow: 'hidden',
                boxShadow: '0 35px 70px rgba(0,0,0,0.18)',
                background: '#d8d8d8',
                border: '1px solid rgba(0,0,0,0.06)'
            }}>
                <img src="/hero-stack/img1.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        </div>
    );
}
