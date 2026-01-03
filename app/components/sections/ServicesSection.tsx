'use client';

import { useEffect, useState } from 'react';

export default function ServicesSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);

        const initGSAP = () => {
            if (typeof (window as any).gsap !== 'undefined') {
                const gsap = (window as any).gsap;
                const ScrollTrigger = (window as any).ScrollTrigger;

                gsap.fromTo('.service-card-v2',
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        stagger: 0.1,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: '.services-grid-v2',
                            start: 'top 85%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            }
        };

        const timeout = setTimeout(initGSAP, 600);
        return () => clearTimeout(timeout);
    }, []);

    const services = [
        {
            title: '3D Design & Visualization',
            img: '/services/3d-service.png',
            size: 'small'
        },
        {
            title: 'UI/UX Designing',
            img: '/services/uiux-service.png',
            size: 'medium'
        },
        {
            title: 'Artificial Intelligence (AI) & Machine Learning',
            img: '/services/ai-service.jpg',
            size: 'large'
        },
        {
            title: 'Web & Mobile App Development',
            img: '/services/web-service.png',
            size: 'medium'
        },
        {
            title: 'Cloud & Digital Solutions',
            img: '/services/cloud-service.png',
            size: 'small'
        }
    ];

    return (
        <section style={{
            padding: '120px 0',
            background: '#fff',
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 20px' }}>
                {/* Header Match Image 2 */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '800', color: '#000', marginBottom: '20px' }}>
                        Services We Offer
                    </h2>
                    <p style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                        We will bring the breathe of our experience and industry knowledge to help you succeed
                    </p>
                </div>

                {/* Grid Match Image 2 - Pyramid Layout */}
                <div className="services-grid-v2" style={{
                    display: 'flex',
                    alignItems: 'center', // Center align for pyramid look
                    justifyContent: 'center',
                    gap: '15px',
                    flexWrap: 'nowrap', // Force one row on desktop
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease'
                }}>
                    {services.map((service, idx) => {
                        const isLarge = service.size === 'large';
                        const isMedium = service.size === 'medium';

                        return (
                            <div key={idx} className="service-card-v2" style={{
                                // Tiered width and height for pyramid effect
                                width: isLarge ? '380px' : isMedium ? '290px' : '230px',
                                height: isLarge ? '560px' : isMedium ? '440px' : '340px',
                                background: '#000',
                                borderRadius: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                boxShadow: '0 15px 45px rgba(0,0,0,0.1)',
                                flexShrink: 0
                            }}>
                                {/* Background Image */}
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        zIndex: 1
                                    }}
                                />

                                {/* Bottom Gradient for visibility */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '60%',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                                    zIndex: 2
                                }} />

                                <div style={{
                                    position: 'relative',
                                    zIndex: 10,
                                    padding: '25px',
                                    textAlign: 'center'
                                }}>
                                    <h3 style={{
                                        fontSize: isLarge ? '24px' : isMedium ? '18px' : '15px',
                                        fontWeight: '800',
                                        color: '#fff',
                                        margin: 0,
                                        lineHeight: '1.3'
                                    }}>
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                .service-card-v2 {
                    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
                }
                .service-card-v2:hover {
                    transform: translateY(-20px) scale(1.05);
                    box-shadow: 0 40px 80px rgba(0,0,0,0.3);
                    z-index: 20;
                }
                @media (max-width: 1400px) {
                    .services-grid-v2 {
                        gap: 10px;
                    }
                    .service-card-v2 {
                        width: ${'300px'} !important;
                        height: ${'450px'} !important;
                        ${/* On smaller screens we might need to revert to uniform to fit */ ''}
                    }
                    .service-card-v2 {
                        width: calc(20% - 10px) !important;
                        min-width: 200px;
                    }
                }
                @media (max-width: 1200px) {
                    .services-grid-v2 {
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                    .service-card-v2 {
                        width: calc(33.33% - 20px) !important;
                        height: 400px !important;
                    }
                }
                @media (max-width: 768px) {
                    .service-card-v2 {
                        width: calc(50% - 15px) !important;
                        height: 350px !important;
                    }
                }
                @media (max-width: 480px) {
                    .service-card-v2 {
                        width: 100% !important;
                        height: 300px !important;
                    }
                }
            `}</style>
        </section>
    );
}
