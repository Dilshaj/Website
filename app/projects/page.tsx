'use client';

import PageWrapper from '../components/PageWrapper';
import ContactSection from '../components/sections/ContactSection';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function ProjectsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
            title: 'EduProva AI<br />Tech Skill App',
            subtitle: 'EduProva',
            name: 'EduProva',
            description: 'Eduprova is an AI-Tech skill and career ecosystem that combines skill-based courses, expert guidance, community learning, and job opportunities on a single platform.',
            image: '/home/techskill1.png',
            color: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
            accent: "#a78bfa",
            textAccent: "#7c3aed",
            glow: "rgba(124, 58, 237, 0.15)"
        },
        {
            title: 'HealthPlus<br />Telemedicine',
            subtitle: 'HealthPlus',
            name: 'HealthPlus',
            description: 'A comprehensive telemedicine solution connecting patients with top-tier healthcare professionals for seamless virtual consultations and health monitoring.',
            image: '/home/doctor.6.png',
            color: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
            accent: "#60a5fa",
            textAccent: "#2563eb",
            glow: "rgba(29, 78, 216, 0.15)"
        },
        {
            title: 'FinTrack<br />Finance Manager',
            subtitle: 'FinTrack',
            name: 'FinTrack',
            description: 'Smart personal finance management tool powered by AI to help users track expenses, plan budgets, and achieve their financial goals effectively.',
            image: '/home/ecommerce5.png',
            color: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)",
            accent: "#f97316",
            textAccent: "#c2410c",
            glow: "rgba(194, 65, 12, 0.15)"
        }
    ];

    const animateToSlide = (nextIndex: number) => {
        if (isAnimating) return;
        setIsAnimating(true);

        // Move the whole track by exactly one card width (1/N of the total track width)
        gsap.to(sliderRef.current, {
            xPercent: -(nextIndex * (100 / projects.length)),
            duration: 0.9,
            ease: "power4.inOut",
            onComplete: () => {
                setCurrentIndex(nextIndex);
                setIsAnimating(false);
            }
        });
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % projects.length;
        animateToSlide(nextIndex);
    };

    const handlePrev = () => {
        const nextIndex = (currentIndex - 1 + projects.length) % projects.length;
        animateToSlide(nextIndex);
    };

    return (
        <PageWrapper>
            {/* Hero Section - Matching Image 2 Precise Scale */}
            <section style={{
                padding: '120px 20px 100px',
                background: '#fafafa',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center'
            }}>
                {/* Purple Star - Image 2 Position & Scale */}
                <div style={{
                    position: 'absolute',
                    top: '22%',
                    left: '46%',
                    width: '130px',
                    height: '130px',
                    zIndex: 6,
                    opacity: 0.9,
                    transform: 'rotate(15deg)'
                }}>
                    <img
                        src="/projects/purple-star.png"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>

                {/* Small Cube - Image 2 corner position */}
                <div style={{
                    position: 'absolute',
                    bottom: '5px',
                    left: '-50px',
                    width: '160px',
                    height: '160px',
                    zIndex: 1,
                    opacity: 0.95
                }}>
                    <img
                        src="/projects/small-cube.png"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'rotate(-10deg)' }}
                    />
                </div>

                <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%' }}>
                    <div className="projects-hero-grid">
                        {/* Left: Headline & Paragraph (Image 2 Match) */}
                        <div style={{ position: 'relative', zIndex: 10, paddingLeft: '40px' }}>
                            <h1 style={{
                                fontSize: 'clamp(55px, 8.5vw, 92px)',
                                fontWeight: '800',
                                color: '#000',
                                marginBottom: '45px',
                                lineHeight: '1.02',
                                letterSpacing: '-3px'
                            }}>
                                Where Ideas Turn Into<br />
                                Impactful Solutions
                            </h1>
                            <p style={{
                                fontSize: 'clamp(17px, 2.2vw, 20px)',
                                color: '#555',
                                lineHeight: '1.8',
                                maxWidth: '720px',
                                fontWeight: '500'
                            }}>
                                At Dilshaj Infotech, our projects showcase innovation, quality, and real-world impact—delivering smart solutions that drive growth and lasting value.
                            </p>
                        </div>

                        {/* Right: Graphic (Image 2 Match) */}
                        <div style={{
                            position: 'relative',
                            height: '750px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            zIndex: 5
                        }}>
                            <div style={{
                                position: 'relative',
                                width: '115%',
                                maxWidth: '1050px',
                                transform: 'translateX(60px)'
                            }}>
                                <img
                                    src="/projects/geometric-shapes.png"
                                    alt="Colorful Geometric Shapes"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'contain'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    left: '0',
                                    right: '0',
                                    height: '250px',
                                    background: 'linear-gradient(to top, #fafafa 15%, transparent 100%)',
                                    pointerEvents: 'none'
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Future Products & Projects - CAROUSEL SLIDER (Replaced as requested) */}
            <section style={{
                padding: '40px 20px 120px', // Reduced top padding to move closer to header
                background: '#fff',
                position: 'relative'
            }}>
                <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
                    {/* Header - Matches Image 2 Style (Left Aligned, Simple) */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        marginBottom: '50px',
                        paddingLeft: '20px' // Align with content
                    }}>
                        <img src="/about-section/black-star.png" alt="" style={{ width: '30px', height: '30px' }} />
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: '700',
                            color: '#1e293b',
                            margin: 0,
                            letterSpacing: '-0.5px'
                        }}>Future Products & Projects</h2>
                    </div>

                    {/* Portfolio Slider Engine */}
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '750px', // Adjusted height slightly
                        overflow: 'hidden',
                        borderRadius: '50px',
                        background: '#f8fafc',
                        boxShadow: '0 50px 120px rgba(0,0,0,0.07)'
                    }}>
                        <div ref={sliderRef} style={{
                            display: 'flex',
                            width: `${projects.length * 100}%`,
                            height: '100%',
                            position: 'absolute',
                            left: 0,
                            top: 0
                        }}>
                            {projects.map((item, idx) => (
                                <div key={`${item.subtitle}-${idx}`} style={{
                                    width: `${100 / projects.length}%`,
                                    height: '100%',
                                    position: 'relative',
                                    background: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    overflow: 'hidden'
                                }}>
                                    {/* Card Background Component - Fixed Color Transitions */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        width: '80%',
                                        height: '100%',
                                        background: item.color,
                                        clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
                                        zIndex: 1
                                    }}></div>

                                    {/* Card Content Layout */}
                                    <div style={{
                                        position: 'relative',
                                        zIndex: 5,
                                        width: '100%',
                                        height: '100%',
                                        display: 'grid',
                                        gridTemplateColumns: 'minmax(450px, 1fr) 1.2fr',
                                        padding: '80px 120px',
                                        alignItems: 'center',
                                        gap: '80px'
                                    }}>
                                        {/* Left Content */}
                                        <div style={{
                                            opacity: currentIndex === idx ? 1 : 0.3,
                                            transform: currentIndex === idx ? 'translateX(0)' : 'translateX(-30px)',
                                            transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
                                        }}>
                                            <h3 style={{
                                                fontSize: 'clamp(44px, 5vw, 64px)',
                                                fontWeight: '900',
                                                color: item.accent,
                                                marginBottom: '45px',
                                                lineHeight: '1',
                                                fontFamily: 'Inter, sans-serif',
                                                letterSpacing: '-2px'
                                            }} dangerouslySetInnerHTML={{ __html: item.title }}></h3>

                                            <div style={{
                                                background: 'rgba(255, 255, 255, 0.98)',
                                                backdropFilter: 'blur(40px)',
                                                borderRadius: '45px',
                                                padding: '50px',
                                                border: '1px solid rgba(255, 255, 255, 1)',
                                                boxShadow: `0 35px 90px ${item.glow}`,
                                                maxWidth: '560px'
                                            }}>
                                                <h4 style={{
                                                    fontSize: '32px',
                                                    fontWeight: '850',
                                                    color: item.textAccent,
                                                    marginBottom: '20px',
                                                    letterSpacing: '-0.5px'
                                                }}>{item.subtitle}</h4>
                                                <p style={{
                                                    fontSize: '19px',
                                                    color: '#334155',
                                                    lineHeight: '1.8',
                                                    fontWeight: '500',
                                                    margin: 0
                                                }}>{item.description}</p>
                                            </div>
                                        </div>

                                        {/* Right Image - HD Clarity & No Crop */}
                                        <div style={{
                                            height: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            position: 'relative',
                                            padding: '40px 0'
                                        }}>
                                            <img
                                                src={item.image}
                                                alt={item.subtitle}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain', // Entire Image Visible
                                                    filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.3))',
                                                    zIndex: 10,
                                                    transform: currentIndex === idx ? 'scale(1) rotate(0deg)' : 'scale(0.9) rotate(2deg)',
                                                    transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1)'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Instant Navigation Overlay */}
                        <div style={{
                            position: 'absolute',
                            bottom: '50px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: '28px',
                            zIndex: 100
                        }}>
                            <button
                                suppressHydrationWarning
                                onClick={handlePrev}
                                disabled={isAnimating}
                                style={{
                                    width: '75px',
                                    height: '75px',
                                    borderRadius: '50%',
                                    background: '#fff',
                                    border: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: isAnimating ? 'default' : 'pointer',
                                    color: '#1e293b',
                                    boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                                    transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                }}
                                onMouseEnter={(e) => !isAnimating && (e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)')}
                                onMouseLeave={(e) => !isAnimating && (e.currentTarget.style.transform = 'scale(1) translateY(0)')}
                            >
                                <i className="ph-bold ph-arrow-left" style={{ fontSize: '28px' }}></i>
                            </button>
                            <button
                                suppressHydrationWarning
                                onClick={handleNext}
                                disabled={isAnimating}
                                style={{
                                    width: '75px',
                                    height: '75px',
                                    borderRadius: '50%',
                                    background: '#fff',
                                    border: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: isAnimating ? 'default' : 'pointer',
                                    color: '#1e293b',
                                    boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                                    transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                }}
                                onMouseEnter={(e) => !isAnimating && (e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)')}
                                onMouseLeave={(e) => !isAnimating && (e.currentTarget.style.transform = 'scale(1) translateY(0)')}
                            >
                                <i className="ph-bold ph-arrow-right" style={{ fontSize: '28px' }}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section - Image 5 Match */}
            <section style={{
                padding: '120px 20px 80px',
                background: 'url("/projects/bg.png") center/cover no-repeat',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 60px' }}>
                    {/* Section Header */}
                    <div style={{ textAlign: 'right', marginBottom: '80px' }}>
                        <h2 style={{
                            fontSize: 'clamp(48px, 6vw, 72px)',
                            fontWeight: '800',
                            margin: 0,
                            letterSpacing: '-2px'
                        }}>
                            Our <span style={{ color: '#fff' }}>Approach</span>
                        </h2>
                    </div>

                    <div className="approach-grid">
                        {/* Left: Numbered Steps */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '45px' }}>
                            {[
                                { num: '1', title: 'Discovery & Planning', desc: 'Understanding your vision to define a clear roadmap.' },
                                { num: '2', title: 'Design & Innovation', desc: 'Creating intuitive, user-focused and innovative designs.' },
                                { num: '3', title: 'Development & Execution', desc: 'Building secure, scalable, high-performance solutions.' },
                                { num: '4', title: 'Testing & Optimization', desc: 'Ensuring quality, reliability, and smooth performance.' },
                                { num: '5', title: 'Launch & Support', desc: 'Seamless deployment with ongoing support.' },
                                { num: '6', title: 'Iterative Delivery', desc: 'Milestone-based delivery for flexibility and clarity.' }
                            ].map((step, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    gap: '35px',
                                    alignItems: 'flex-start'
                                }}>
                                    <div style={{
                                        fontSize: 'clamp(64px, 8vw, 84px)',
                                        fontWeight: '800',
                                        color: '#A294F9', // Dark gray for number
                                        lineHeight: '1',
                                        minWidth: '80px',
                                        marginTop: '-10px'
                                    }}>{step.num}</div>
                                    <div>
                                        <h3 style={{
                                            fontSize: '24px',
                                            fontWeight: '700',
                                            marginBottom: '12px',
                                            color: '#A294F9' // Light purple title
                                        }}>{step.title}</h3>
                                        <p style={{
                                            fontSize: '16px',
                                            color: '#888',
                                            lineHeight: '1.6',
                                            margin: 0,
                                            maxWidth: '400px'
                                        }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right: Standalone Robot Image */}
                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            zIndex: 5
                        }}>
                            <img
                                src="/projects/robo.png" // Standalone robot image from Image 3/4
                                alt="AI Assistant Robot"
                                style={{
                                    width: '125%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 0 50px rgba(118, 105, 239, 0.15))',
                                    transform: 'translateX(20px) translateY(-50px)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to Start Your Project - Image 3 Exact Match */}
            <section style={{
                padding: '120px 20px',
                background: '#fafafa'
            }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <div style={{
                        background: 'url("/projects/ready.png") center/cover no-repeat', // Custom background from Image 2
                        borderRadius: '60px', // More rounded as in Image 3
                        padding: '100px 40px',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        color: '#fff',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.12)'
                    }}>
                        <h2 style={{
                            fontSize: 'clamp(42px, 6vw, 64px)',
                            fontWeight: '800',
                            marginBottom: '24px',
                            letterSpacing: '-2px',
                            lineHeight: '1.1',
                            color: '#fff'
                        }}>
                            Ready to Start Your Project?
                        </h2>
                        <p style={{
                            fontSize: 'clamp(16px, 2vw, 19px)',
                            color: 'rgba(255,255,255,0.85)',
                            marginBottom: '48px',
                            maxWidth: '700px',
                            margin: '0 auto 48px',
                            lineHeight: '1.6',
                            fontWeight: '500'
                        }}>
                            Join the AI revolution. Let's discuss how Dilshaj Infotech can help you unlock new possibilities and drive unprecedented growth.
                        </p>
                        <a
                            href="#contact"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '20px 50px',
                                background: '#A294F9', // Precisely matching the button color in Image 3
                                color: '#fff',
                                borderRadius: '40px', // Pill-shaped as in Image 3
                                textDecoration: 'none',
                                fontWeight: '700',
                                fontSize: '18px',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                boxShadow: '0 15px 35px rgba(162, 148, 249, 0.45)'
                            }}
                        >
                            <i className="ph-bold ph-calendar-blank"></i>
                            Get Started Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section - Home Page Matching */}
            <ContactSection />
            <style jsx>{`
                .projects-hero-grid {
                    display: grid;
                    grid-template-columns: minmax(600px, 1.3fr) 1fr;
                    gap: 40px;
                    align-items: center;
                }
                .future-projects-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 40px;
                    align-items: flex-start;
                }
                .approach-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 100px;
                    align-items: center;
                }
                @media (max-width: 1200px) {
                    .projects-hero-grid, .future-projects-grid, .approach-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                    .future-projects-grid {
                        padding: 40px 30px !important;
                    }
                    div[style*="justifyContent: flex-end"] {
                        justify-content: center !important;
                    }
                    img[alt="Colorful Geometric Shapes"], img[src="/portfolio-hand.png"] {
                        width: 100% !important;
                        transform: none !important;
                        margin: 0 auto;
                    }
                    img[src="/projects/robo.png"] {
                        width: 80% !important;
                        margin: 0 auto;
                        transform: none !important;
                    }
                    div[style*="paddingLeft: 40px"] {
                        padding-left: 0 !important;
                    }
                    div[style*="clipPath: polygon"] {
                        display: none;
                    }
                }
                @media (max-width: 768px) {
                    div[style*="padding: 60px 80px"] {
                        padding: 40px 20px !important;
                    }
                    div[style*="textAlign: right"] {
                        text-align: center !important;
                    }
                    .approach-grid {
                        gap: 40px;
                    }
                }
            `}</style>
        </PageWrapper>
    );
}
