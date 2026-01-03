import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function PortfolioSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);
    const nextCardRef = useRef<HTMLDivElement>(null);
    const currentCardRef = useRef<HTMLDivElement>(null);

    const portfolioItems = [
        {
            title: "EduProva AI<br />Tech Skill App",
            subtitle: "EduProva",
            description: "Eduprova is an AI-Tech skill and career ecosystem that combines skill-based courses, expert guidance, community learning, and job opportunities on a single platform.",
            image: "/home/techskill1.png",
            color: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
            accent: "#a78bfa",
            textAccent: "#7c3aed",
            glow: "rgba(124, 58, 237, 0.15)"
        },
        {
            title: "Digital News<br />Channel",
            subtitle: "NewsChannel",
            description: "Stay updated with real-time news across various categories with our intuitive and fast news platform, designed for modern readers.",
            image: "/home/news2.png",
            color: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
            accent: "#ef4444",
            textAccent: "#b91c1c",
            glow: "rgba(185, 28, 28, 0.15)"
        },
        {
            title: "Bike & Car<br />Rider App",
            subtitle: "RideApp",
            description: "Seamlessly book rides and manage your daily commutes with our user-friendly and highly efficient mobile application.",
            image: "/home/bike3.png",
            color: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)",
            accent: "#f97316",
            textAccent: "#c2410c",
            glow: "rgba(194, 65, 12, 0.15)"
        },
        {
            title: "Architecture &<br />Design Platform",
            subtitle: "DesignPro",
            description: "Innovative architectural solutions and design inspirations for modern living and workspace environments, pushing the boundaries of creativity.",
            image: "/home/Architecture.4.png",
            color: "linear-gradient(135deg, #64748b 0%, #334155 100%)",
            accent: "#94a3b8",
            textAccent: "#475569",
            glow: "rgba(51, 65, 85, 0.15)"
        },
        {
            title: "E-Commerce<br />Platform",
            subtitle: "ShopNow",
            description: "Scalable and feature-rich commerce solutions designed to provide an exceptional shopping experience for customers worldwide.",
            image: "/home/ecommerce5.png",
            color: "linear-gradient(135deg, #fb923c 0%, #ea580c 100%)",
            accent: "#fdba74",
            textAccent: "#f97316",
            glow: "rgba(234, 88, 12, 0.15)"
        },
        {
            title: "Security &<br />Navigation App",
            subtitle: "GuardNav",
            description: "Advanced security tracking and smart navigation features integrated into a single powerful application for ultimate user safety.",
            image: "/home/image6.png",
            color: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
            accent: "#94a3b8",
            textAccent: "#64748b",
            glow: "rgba(15, 23, 42, 0.15)"
        },
        {
            title: "Doctor on<br />One-Click",
            subtitle: "HealthConnect",
            description: "Connect with healthcare professionals instantly and manage your health records on the go with our secured medical platform.",
            image: "/home/doctor.6.png",
            color: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
            accent: "#60a5fa",
            textAccent: "#2563eb",
            glow: "rgba(29, 78, 216, 0.15)"
        },
        {
            title: "UrbanClap-Style<br />Service App",
            subtitle: "ServiceHub",
            description: "Professional home services delivered at your doorstep with just a few taps, connecting you with verified experts in your area.",
            image: "/home/urban7.png",
            color: "linear-gradient(135deg, #eab308 0%, #a16207 100%)",
            accent: "#facc15",
            textAccent: "#ca8a04",
            glow: "rgba(161, 98, 7, 0.15)"
        },
        {
            title: "Food Delivery<br />Application",
            subtitle: "FoodieExpress",
            description: "Get your favorite meals delivered hot and fresh from local restaurants with our lightning-fast food delivery ecosystem.",
            image: "/home/fooddelivery8.2.png",
            color: "linear-gradient(135deg, #d97706 0%, #92400e 100%)",
            accent: "#fbbf24",
            textAccent: "#d97706",
            glow: "rgba(146, 64, 14, 0.15)"
        }
    ];

    const animateToSlide = (nextIndex: number) => {
        if (isAnimating) return;
        setIsAnimating(true);

        // Move the whole track by exactly one card width (1/N of the total track width)
        gsap.to(sliderRef.current, {
            xPercent: -(nextIndex * (100 / portfolioItems.length)),
            duration: 0.9,
            ease: "power4.inOut",
            onComplete: () => {
                setCurrentIndex(nextIndex);
                setIsAnimating(false);
            }
        });
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % portfolioItems.length;
        animateToSlide(nextIndex);
    };

    const handlePrev = () => {
        const nextIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
        animateToSlide(nextIndex);
    };

    return (
        <section style={{
            padding: '120px 20px',
            background: '#fff',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '20px'
                    }}>
                        <img src="/about-section/black-star.png" alt="" style={{ width: '28px', height: '28px' }} />
                        <span style={{
                            fontSize: '18px',
                            fontWeight: '700',
                            color: '#1e293b',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}>Our Portfolio Showcase</span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(44px, 5.5vw, 72px)',
                        fontWeight: '850',
                        color: '#0f172a',
                        margin: 0,
                        lineHeight: '1.1',
                        letterSpacing: '-2px'
                    }}>
                        Where Ideas Turn Into <span style={{ color: '#94a3b8' }}>Impactful Solutions</span>
                    </h2>
                </div>

                {/* Portfolio Slider Engine */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '850px', // Proper Height as requested
                    overflow: 'hidden',
                    borderRadius: '50px',
                    background: '#f8fafc',
                    boxShadow: '0 50px 120px rgba(0,0,0,0.07)'
                }}>
                    <div ref={sliderRef} style={{
                        display: 'flex',
                        width: `${portfolioItems.length * 100}%`,
                        height: '100%',
                        position: 'absolute',
                        left: 0,
                        top: 0
                    }}>
                        {portfolioItems.map((item, idx) => (
                            <div key={`${item.subtitle}-${idx}`} style={{
                                width: `${100 / portfolioItems.length}%`,
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
                                            fontSize: 'clamp(44px, 5vw, 70px)',
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
    );
}
