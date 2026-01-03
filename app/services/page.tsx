'use client';

import { useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import ContactSection from '../components/sections/ContactSection';

export default function ServicesPage() {
    useEffect(() => {
        const initGSAP = () => {
            if (typeof (window as any).gsap !== 'undefined') {
                const gsap = (window as any).gsap;
                const ScrollTrigger = (window as any).ScrollTrigger;

                // Floating assets animation
                gsap.to('.floating-asset', {
                    y: -30,
                    x: 10,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power1.inOut'
                });

                // Services offer items reveal
                gsap.utils.toArray('.service-item').forEach((item: any, i: number) => {
                    gsap.from(item, {
                        opacity: 0,
                        x: i % 2 === 0 ? -50 : 50,
                        duration: 1,
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 80%',
                            toggleActions: 'play none none none'
                        }
                    });
                });
            }
        };

        const timeout = setTimeout(initGSAP, 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <PageWrapper>
            {/* Services Hero Section - EXACT Match to Reference Image 2 */}
            <section style={{
                position: 'relative',
                background: '#ffffff',
                padding: '120px 0 160px',
                overflow: 'hidden',
                width: '100%',
                minHeight: '95vh',
                display: 'flex',
                alignItems: 'center'
            }}>
                {/* Background Decorator Assets - Pastel Blobs from public/services */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '15%',
                    width: '75%',
                    height: '110%',
                    opacity: 1.5,
                    zIndex: 9,
                    pointerEvents: 'none',

                }}>
                    <img src="/services/pastel-blobs.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>

                {/* Floating 3D Elements as seen in reference */}
                <div style={{ position: 'absolute', top: '15%', right: '35%', width: '70px', zIndex: 6, opacity: 0.9 }}>
                    <img src="/services/purple-star.png" alt="" className="floating-asset" style={{ width: '100%' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '22%', left: '-0%', width: '100px', zIndex: 6, opacity: 0.8, transform: 'rotate(-15deg)' }}>
                    <img src="/services/small-cube.png" alt="" className="floating-asset" style={{ width: '100%' }} />
                </div>

                <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 100px', position: 'relative', zIndex: 10, width: '100%' }}>
                    <div className="row align-items-center">
                        {/* Left Column: Big Bold Text */}
                        <div className="col-lg-6">
                            <h1 style={{
                                fontSize: 'clamp(55px, 8.5vw, 108px)',
                                fontWeight: '500',
                                color: '#111',
                                lineHeight: '0.6',
                                marginBottom: '195px',
                                letterSpacing: '-5px',
                                marginLeft: '-150px',
                                marginTop: '-250px',

                            }}>
                                Comprehensive<br />
                                <br />
                                Digital Solutions
                            </h1>
                            <p style={{
                                fontSize: '22px',
                                color: '#444',
                                lineHeight: '1.7',
                                maxWidth: '620px',
                                fontWeight: '500',
                                marginLeft: '-150px',
                                marginTop: '-100px',
                            }}>
                                We provide comprehensive digital solutions tailored to your business needs, from design and development to marketing and AI integration. Let us help you achieve your digital transformation goals.
                            </p>
                        </div>

                        {/* Right Column: Massive VR Image precisely matched to Image 2 */}
                        <div className="col-lg-6" style={{ position: 'relative' }}>
                            <div style={{
                                position: 'relative',
                                width: '170%', // Even larger for maximum impact
                                transform: 'translateX(-100px) translateY(-20px)', // Precise alignment for Image 2 feel
                                zIndex: 5,
                                overflow: 'visible'
                            }}>
                                {/* Neon Glow Behind VR Person */}
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    width: '90%',
                                    height: '90%',
                                    background: 'radial-gradient(circle, rgba(130, 115, 255, 0.45) 0%, rgba(255, 255, 255, 0) 70%)',
                                    filter: 'blur(70px)',
                                    zIndex: 1,
                                    transform: 'translate(-50%, -50%)'
                                }} />

                                <img
                                    src="/services/image.png"
                                    alt="Digital Innovation VR"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        position: 'relative',
                                        zIndex: 10,
                                        mixBlendMode: 'screen',
                                        marginTop: '-100px',
                                        filter: 'contrast(1.15) brightness(1.05) saturate(1.1)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services We Offer Section - Image 3 & 4 Match with Sharp Corners */}
            <section id="services-list" style={{ padding: '120px 0', background: '#fff' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
                    {/* Header Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '100px', gap: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <img src="/about/hero/star-icon.png" alt="" style={{ width: '50px', height: '50px' }} />
                            <h2 style={{ fontSize: '64px', fontWeight: '800', color: '#000', margin: 0 }}>Services We Offer</h2>
                        </div>
                        <p style={{ maxWidth: '600px', fontSize: '18px', color: '#666', lineHeight: '1.8', margin: 0 }}>
                            At Dilshaj Infotech, we deliver integrated technology and creative solutions that drive innovation, growth, and lasting impact.
                        </p>
                    </div>

                    {/* Services Alternating List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        {[
                            {
                                title: 'Artificial Intelligence (AI) & Machine Learning (ML)',
                                desc: 'We design and deploy intelligent AI and ML solutions that automate processes, enhance decision-making, and unlock valuable insights from data. From predictive analytics to smart automation, our solutions help businesses innovate and scale faster.',
                                img: '/services/ai-service.jpg',
                                bg: '#F8F9FB',
                                imgPos: 'right'
                            },
                            {
                                title: 'Web & App Development',
                                desc: 'We build high-performance, scalable web and mobile applications tailored to your business needs. Our solutions focus on speed, security, and user experience, ensuring reliable digital products that grow with your business.',
                                img: '/services/web-service.png',
                                bg: '#F8F9FB',
                                imgPos: 'left'
                            },
                            {
                                title: 'UI/UX Designing',
                                desc: 'Our UI/UX design services focus on creating intuitive, engaging, and user-centric experiences. We combine research, creativity, and usability principles to design interfaces that enhance user satisfaction and drive engagement.',
                                img: '/services/uiux-service.png',
                                bg: '#F8F9FB',
                                imgPos: 'right'
                            },
                            {
                                title: 'Cloud & Digital Solutions',
                                desc: 'We deliver cloud-based and digital transformation solutions that improve agility, scalability, and operational efficiency. From cloud migration to system optimization, we help businesses embrace modern digital infrastructure.',
                                img: '/services/cloud-service.png',
                                bg: '#F8F9FB',
                                imgPos: 'left'
                            },
                            {
                                title: 'Graphic Design',
                                desc: 'Our graphic design services bring brands to life through visually compelling designs. From branding and marketing creatives to digital assets, we ensure consistency, clarity, and impact across all visual communications.',
                                img: '/services/graphic-service.jpg',
                                bg: '#F8F9FB',
                                imgPos: 'right'
                            },
                            {
                                title: '3D Design',
                                desc: 'We create high-quality 3D designs and visualizations that bring concepts to reality. Our 3D solutions are ideal for product visualization, architecture, interiors, and immersive presentations.',
                                img: '/services/3d-service.png',
                                bg: '#F8F9FB',
                                imgPos: 'left'
                            },
                            {
                                title: 'PR & Digital Marketing Agency',
                                desc: 'We help brands build strong online presence and credibility through strategic PR and digital marketing. Our services include brand promotion, social media marketing, content strategy, SEO, and performance-driven campaigns.',
                                img: '/services/marketing-service.png',
                                bg: '#F8F9FB',
                                imgPos: 'right'
                            },
                            {
                                title: 'Interior Design & Visualization',
                                desc: 'We provide innovative interior design and visualization services that blend aesthetics with functionality. Our detailed visualizations help clients experience spaces before they are built.',
                                img: '/services/interior-service.jpg',
                                bg: '#F8F9FB',
                                imgPos: 'left'
                            },
                            {
                                title: 'Construction & Design Support',
                                desc: 'We offer end-to-end construction and design support, assisting with planning, visualization, and technical coordination. Our solutions help streamline execution and improve project efficiency.',
                                img: '/services/construction-service.png',
                                bg: '#F8F9FB',
                                imgPos: 'right'
                            }
                        ].map((service, idx) => (
                            <div key={idx} className="service-item" style={{
                                display: 'grid',
                                gridTemplateColumns: service.imgPos === 'right' ? '1.2fr 1fr' : '1fr 1.2fr',
                                gap: '0',
                                background: service.bg,
                                borderRadius: '0px',
                                overflow: 'hidden',
                                minHeight: '540px'
                            }}>
                                {service.imgPos === 'left' && (
                                    <div style={{ overflow: 'hidden' }}>
                                        <img src={service.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                )}
                                <div style={{
                                    padding: '80px 100px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    order: service.imgPos === 'right' ? 1 : 2
                                }}>
                                    <h3 style={{ fontSize: '42px', fontWeight: '800', color: '#000', marginBottom: '30px', lineHeight: '1.2' }}>
                                        {service.title}
                                    </h3>
                                    <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8', margin: 0 }}>
                                        {service.desc}
                                    </p>
                                </div>
                                {service.imgPos === 'right' && (
                                    <div style={{ overflow: 'hidden', order: 2 }}>
                                        <img src={service.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Contact Section */}
            <section id="contact" style={{ padding: '100px 0', background: '#fafafa' }}>
                <ContactSection />
            </section>

            <style jsx>{`
                @media (max-width: 1200px) {
                    div[style*="padding: 0 100px"] {
                        padding: 0 40px !important;
                    }
                    div[style*="marginLeft: -150px"] {
                        margin-left: 0 !important;
                        text-align: center;
                    }
                    h1[style*="fontSize: clamp(55px, 8.5vw, 108px)"] {
                        margin-top: 0 !important;
                        margin-bottom: 40px !important;
                        line-height: 1.1 !important;
                    }
                    p[style*="marginTop: -100px"] {
                        margin-top: 0 !important;
                        margin-bottom: 40px !important;
                        max-width: 100% !important;
                    }
                    div[className="col-lg-6"] {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    div[style*="width: 170%"] {
                        width: 100% !important;
                        transform: none !important;
                        margin-top: 40px;
                    }
                    img[src="/services/image.png"] {
                         margin-top: 0 !important;
                    }
                }
                @media (max-width: 991px) {
                    .service-item {
                        grid-template-columns: 1fr !important;
                        min-height: auto !important;
                    }
                    .service-item > div {
                        padding: 60px 40px !important;
                        order: 2 !important;
                    }
                    .service-item > div:has(img) {
                        height: 350px;
                        order: 1 !important;
                        padding: 0 !important;
                    }
                    div[style*="display: flex; justifyContent: space-between"] {
                        flex-direction: column !important;
                        align-items: center !important;
                        text-align: center;
                        gap: 20px !important;
                    }
                }
                @media (max-width: 600px) {
                    h2[style*="fontSize: 64px"] {
                        font-size: 42px !important;
                    }
                    h3[style*="fontSize: 42px"] {
                        font-size: 32px !important;
                    }
                }
            `}</style>
        </PageWrapper>
    );
}
