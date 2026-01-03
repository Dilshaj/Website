'use client';

import PageWrapper from '../components/PageWrapper';
import VisionMissionSection from '../components/sections/VisionMissionSection';
import StatisticsSection from '../components/sections/StatisticsSection';
import ContactSection from '../components/sections/ContactSection';
import FounderSection from '../components/sections/FounderSection';

export default function AboutPage() {
    return (
        <PageWrapper>
            {/* Hero Section - Absolute Pixel Perfect Match Image 2 */}
            <section style={{
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fafafa',
                padding: '120px 40px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Assets - Image 2 Match */}
                {/* Left Floating Soap Cube - Scaled and Positioned exactly as Image 2 */}
                <div style={{
                    position: 'absolute',
                    bottom: '12%',
                    left: '-1%',
                    width: '200px',
                    height: '200px',
                    zIndex: 1,
                    opacity: 1,
                    pointerEvents: 'none',
                    transform: 'rotate(-5deg)',
                }} className="hero-floating-1">
                    <img
                        src="/about/hero/blob-left.png"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>

                {/* Right Abstract Soft Blobs */}
                <div style={{
                    position: 'absolute',
                    top: '0%',
                    right: '-12%',
                    width: '950px',
                    height: '1000px',
                    zIndex: 1,
                    opacity: 0.9,
                    pointerEvents: 'none',
                }} className="hero-floating-2">
                    <img
                        src="/about/hero/blob-right.png"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>

                {/* Center Content - Positioned slightly higher for Image 2 Match */}
                <div style={{
                    maxWidth: '1600px',
                    width: '100%',
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '-40px'
                }}>
                    <div style={{
                        position: 'relative',
                        display: 'inline-block'
                    }}>
                        {/* Star Icon - Fine-tuned position for Image 2 Match */}
                        <div style={{
                            position: 'absolute',
                            left: '-105px',
                            top: '-32px',
                            zIndex: 3,
                            transform: 'rotate(-2deg)'
                        }}>
                            <img
                                src="/about/hero/star-icon.png"
                                alt=""
                                style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                            />
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(50px, 8.5vw, 92px)',
                            fontWeight: '600',
                            color: '#000000',
                            margin: '0',
                            padding: '0',
                            letterSpacing: '-3.8px',
                            lineHeight: '1.02',
                            textAlign: 'center',
                            maxWidth: '1380px',
                            marginTop: '-200px'
                        }}>
                            Empowering Your Business with<br />
                            Digital Literacy & Innovation
                        </h1>
                    </div>

                    <p style={{
                        fontSize: 'clamp(18px, 2.2vw, 24px)',
                        color: '#666666',
                        maxWidth: '920px',
                        margin: '50px auto 0',
                        lineHeight: '1.65',
                        fontWeight: '500',
                        textAlign: 'center',
                        letterSpacing: '-0.3px'
                    }}>
                        Dilshaj Infotech is a future-focused technology company dedicated to bridging the gap between education and employment through digital literacy training, innovative solutions, and cutting-edge products.
                    </p>
                </div>

            </section>


            {/* Our Story Section - Background Assets matched to Image 2 */}
            <section style={{
                padding: '80px 20px 40px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Decorator Assets */}
                <div style={{
                    position: 'absolute',
                    left: '-150px',
                    top: '15%',
                    width: '400px',
                    height: '400px',
                    zIndex: 0,
                    opacity: 0.7,
                    pointerEvents: 'none',
                    transform: 'rotate(-12deg)',
                    filter: 'blur(30px)'
                }}>
                    <img src="/about/bg-blob.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>

                <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                    {/* Header Row */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '60px',
                        alignItems: 'start',
                        marginBottom: '60px'
                    }}>
                        <div>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                marginBottom: '25px'
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000">
                                    <path d="M12,2L14.5,9.5L22,12L14.5,14.5L12,22L9.5,14.5L2,12L9.5,9.5L12,2Z" />
                                </svg>
                                <span style={{ fontSize: '18px', fontWeight: '700', color: '#000' }}>Our Story</span>
                            </div>
                            <h2 style={{
                                fontSize: 'clamp(28px, 4vw, 42px)',
                                fontWeight: '700',
                                color: '#333',
                                lineHeight: '1.2'
                            }}>
                                We deliver the best technology <br /> solutions for modern businesses.
                            </h2>
                        </div>

                        <div className="story-grid">
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.8' }}>
                                At Dilshaj Infotech, we specialize in building high-performance digital products and intelligent platforms. From scalable business solutions to modern web and mobile applications, we transform ideas into reliable, future-ready technology.
                            </p>
                            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.8' }}>
                                Our experienced team is driven by innovation, quality, and speed. We focus on understanding real business needs and delivering solutions that are secure, scalable, and designed to create lasting impact.
                            </p>
                        </div>
                    </div>

                    {/* Cards Row */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '40px',
                        marginBottom: '100px'
                    }}>
                        {[
                            { title: 'Innovation-Driven Approach', icon: '/about/icons/icon-bulb.png', desc: 'We combine modern technologies with creative thinking to deliver smart, efficient, and impactful digital solutions.' },
                            { title: 'Scalable & Secure Solutions', icon: '/about/icons/icon-shield.png', desc: 'Our products are built to scale with your business while maintaining high performance and strong security.' },
                            { title: 'Quality You Can Trust', icon: '/about/icons/icon-check.png', desc: 'We follow industry best practices to ensure reliability, speed, and long-term value in everything we build.' }
                        ].map((item, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                borderRadius: '15px',
                                padding: '50px 35px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '30px',
                                boxShadow: '0 15px 40px rgba(0,0,0,0.04)'
                            }}>
                                <div style={{
                                    width: '74px',
                                    height: '74px',
                                    minWidth: '74px',
                                    borderRadius: '50%',
                                    background: '#7E6ED1',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '18px'
                                }}>
                                    <img src={item.icon} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '19px', fontWeight: '700', color: '#333', marginBottom: '10px' }}>{item.title}</h3>
                                    <p style={{ fontSize: '14px', color: '#777', lineHeight: '1.6' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Images Row - Cleaned Background */}
                    <div style={{ position: 'relative', height: '650px', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Main Large Image (Left-Center) */}
                        <div style={{
                            position: 'absolute',
                            top: '40px',
                            left: '0',
                            width: '62%',
                            height: '480px',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                            zIndex: 2
                        }}>
                            <img src="/about/team/team-meeting.png" alt="Team at work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

                        {/* Smaller Overlapping Image (Right-Center) */}
                        <div style={{
                            position: 'absolute',
                            top: '130px',
                            right: '35px',
                            width: '42%',
                            height: '340px',
                            borderRadius: '28px',
                            overflow: 'hidden',
                            boxShadow: '0 30px 70px rgba(0,0,0,0.15)',
                            zIndex: 3,
                            border: '10px solid #ffffff',
                            background: '#ffffff'
                        }}>
                            <img src="/about/team/team-work.png" alt="Writing in notebook" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            {/* Play Button Overlay */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'rgba(111, 96, 241, 0.85)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                boxShadow: '0 0 30px rgba(111, 96, 241, 0.4)',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease'
                            }}>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Sections */}
            <VisionMissionSection />
            <StatisticsSection />

            {/* Founder's Desk Section */}
            <FounderSection />

            <ContactSection />
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px) rotate(-15deg); }
                    50% { transform: translateY(-25px) rotate(-12deg); }
                    100% { transform: translateY(0px) rotate(-15deg); }
                }
                @keyframes floatSlow {
                    0% { transform: translate(0, 0); }
                    50% { transform: translate(-20px, 30px); }
                    100% { transform: translate(0, 0); }
                }
                .hero-floating-1 {
                    animation: float 10s ease-in-out infinite;
                }
                .hero-floating-2 {
                    animation: floatSlow 15s ease-in-out infinite;
                }
                .story-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: start;
                }
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 20px;
                    max-width: 1300px;
                    margin: 0 auto;
                }
                @media (max-width: 1200px) {
                    .story-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                    .team-grid {
                        grid-template-columns: repeat(3, 1fr) !important;
                    }
                    div[style*="height: 650px"] {
                        height: auto !important;
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 20px;
                    }
                    div[style*="top: 40px"], div[style*="top: 130px"] {
                        position: relative !important;
                        top: 0 !important;
                        left: 0 !important;
                        right: 0 !important;
                        width: 100% !important;
                        height: 400px !important;
                    }
                }
                @media (max-width: 768px) {
                    .team-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    div[style*="gridTemplateColumns: 1fr 1fr"] {
                        grid-template-columns: 1fr !important;
                        gap: 15px !important;
                    }
                }
                @media (max-width: 480px) {
                    .team-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </PageWrapper>
    );
}
