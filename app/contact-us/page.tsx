'use client';

import { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import ContactSection from '../components/sections/ContactSection';

export default function ContactUsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const questions = [
        {
            title: "What services does Dilshaj Infotech provide?",
            answer: "Dilshaj Infotech offers end-to-end digital solutions including AI & Machine Learning, web and mobile app development, UI/UX design, cloud solutions, big data analytics, digital marketing, 3D visualization, and construction & design support."
        },
        {
            title: "Which industries do you work with?",
            answer: "We work with a wide range of industries including Healthcare, E-commerce, Logistics, Education, and Tech startups."
        },
        {
            title: "How do you ensure quality and security?",
            answer: "We follow industry-best practices, rigorous testing phases, and implement multi-layered security protocols for every project."
        },
        {
            title: "What is your development process?",
            answer: "Our process includes Discovery, Strategy, Design, Development, Testing, and Deployment phases with continuous client feedback."
        },
        {
            title: "How can we start a project with Dilshaj Infotech?",
            answer: "You can start by clicking 'Start Collaboration' or reaching out via our contact form for a free consultation."
        }
    ];

    return (
        <PageWrapper>
            {/* Hero Section - Refined for Image 2 Match */}
            <section style={{
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fafafa',
                paddingTop: '60px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Left Cube - Positioned exactly as Image 2 */}
                <div style={{
                    position: 'absolute',
                    bottom: '60px',
                    left: '-20px',
                    width: '220px',
                    height: '220px',
                    opacity: 1,
                    pointerEvents: 'none',
                    zIndex: 1
                }}>
                    <img
                        src="/about/hero/blob-left.png"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>

                {/* Right Blob - Large and centered-right as Image 2 */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-120px',
                    transform: 'translateY(-50%)',
                    width: '950px',
                    height: '950px',
                    opacity: 0.95,
                    pointerEvents: 'none',
                    zIndex: 1
                }}>
                    <img
                        src="/about/hero/blob-right.png"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>

                {/* Center Content */}
                <div style={{
                    maxWidth: '1200px',
                    width: '100%',
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center'
                }}>
                    {/* Star + Heading */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                        marginBottom: '35px'
                    }}>
                        {/* Star Icon - LEFT */}
                        <div style={{ transform: 'translateX(-40px)' }}>
                            <img
                                src="/about/hero/star-icon.png"
                                alt=""
                                style={{ width: '85px', height: '85px', objectFit: 'contain' }}
                            />
                        </div>

                        {/* Heading */}
                        <h1 style={{
                            fontSize: 'clamp(55px, 8vw, 92px)',
                            fontWeight: '700',
                            color: '#000000',
                            margin: '0',
                            padding: '0',
                            letterSpacing: '-3px',
                            lineHeight: '1',
                        }}>
                            Contact Us
                        </h1>
                    </div>

                    {/* Description */}
                    <p style={{
                        fontSize: 'clamp(17px, 2.2vw, 21px)',
                        color: '#555',
                        maxWidth: '850px',
                        margin: '0 auto',
                        lineHeight: '1.7',
                        fontWeight: '500'
                    }}>
                        Get in touch with us. We'd love to hear from you and discuss how we can help transform your business.
                    </p>
                </div>
            </section>

            {/* Shared Contact Section - Consistent across all pages */}
            <ContactSection />

            {/* FAQ Section */}
            <section style={{ padding: '120px 20px', background: '#fafafa' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div className="faq-grid">
                        {/* Left: Graphic and Title */}
                        <div style={{ paddingRight: '40px' }}>
                            <h2 style={{
                                fontSize: 'clamp(40px, 5.5vw, 68px)',
                                fontWeight: '700',
                                color: '#000',
                                marginBottom: '60px',
                                lineHeight: '1.05',
                                letterSpacing: '-2px'
                            }}>
                                Frequently<br />asked questions
                            </h2>

                            <div style={{ position: 'relative', marginTop: '40px' }}>
                                <img
                                    src="/questions/faq-graphic.png"
                                    alt="FAQ Graphic"
                                    style={{ width: '100%', maxWidth: '420px', height: 'auto' }}
                                />
                            </div>
                        </div>

                        {/* Right: Accordion */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {questions.map((q, i) => {
                                const isOpen = openIndex === i;
                                return (
                                    <div key={i} style={{
                                        background: isOpen ? '#8b7af5' : '#fff',
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        border: isOpen ? 'none' : '1px solid #eee',
                                        boxShadow: isOpen ? '0 15px 40px rgba(139, 122, 245, 0.2)' : 'none'
                                    }} onClick={() => setOpenIndex(isOpen ? null : i)}>
                                        <div style={{
                                            padding: '30px 40px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <h3 style={{
                                                fontSize: '19px',
                                                fontWeight: '600',
                                                color: isOpen ? '#fff' : '#000',
                                                margin: 0
                                            }}>{q.title}</h3>
                                            <i className={`ph-bold ph-caret-${isOpen ? 'up' : 'down'}`} style={{
                                                fontSize: '22px',
                                                color: isOpen ? '#fff' : '#666'
                                            }}></i>
                                        </div>
                                        <div style={{
                                            maxHeight: isOpen ? '250px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease',
                                            padding: isOpen ? '0 40px 35px' : '0 40px'
                                        }}>
                                            <p style={{
                                                fontSize: '16px',
                                                lineHeight: '1.7',
                                                color: isOpen ? 'rgba(255,255,255,0.95)' : '#666',
                                                margin: 0
                                            }}>
                                                {q.answer}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Find Us Section */}
            <section style={{
                padding: '120px 20px',
                background: '#fff',
                position: 'relative'
            }}>
                <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: 'clamp(38px, 5vw, 54px)',
                            fontWeight: '800',
                            color: '#000',
                            marginBottom: '12px',
                            letterSpacing: '-1.5px'
                        }}>Find Us</h2>
                        <p style={{ fontSize: '18px', color: '#666', fontWeight: '500' }}>
                            Visit our office or reach out to us
                        </p>
                    </div>

                    {/* Map with Image 5 style background */}
                    {/* Map with Image 5 style background */}
                    <div style={{
                        borderRadius: '30px',
                        overflow: 'hidden',
                        height: '600px',
                        background: '#f0f0f0',
                        position: 'relative',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
                    }}>
                        {/* Interactive Google Map Overlay */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.998319340913!2d78.3915!3d17.4485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzU0LjYiTiA3OMKwMjMnMjkuNCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin&q=Dilshaj+Infotech"
                            width="100%"
                            height="100%"
                            style={{ border: 0, position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        {/* Custom Map UI Card (Image 5 style) */}
                        <div style={{
                            position: 'absolute',
                            top: '40px',
                            left: '40px',
                            background: '#fff',
                            padding: '30px',
                            borderRadius: '20px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                            zIndex: 2,
                            width: '320px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F3F0FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="ph-fill ph-map-pin" style={{ color: '#7C3AED', fontSize: '20px' }}></i>
                                </div>
                                <h4 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#111827' }}>Our Location</h4>
                            </div>
                            <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '700', color: '#111' }}>Dilshaj Infotech</h4>
                            <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                                Flat no: 101, Kavuri Hills, Madhapur,<br />
                                Hyderabad, Telangana, 500033
                            </p>
                            <a
                                href="https://maps.app.goo.gl/BuT1RmnXdd84j9dk8"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#fff',
                                    background: '#7C3AED',
                                    padding: '12px 20px',
                                    borderRadius: '12px',
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    transition: '0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                            >
                                View larger map
                                <i className="ph-bold ph-arrow-square-out"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .faq-grid {
                    display: grid;
                    grid-template-columns: minmax(400px, 1fr) 1.2fr;
                    gap: 60px;
                    align-items: center;
                }
                @media (max-width: 1024px) {
                    .faq-grid {
                        grid-template-columns: 1fr !important;
                        gap: 40px;
                    }
                    div[style*="paddingRight: 40px"] {
                        padding-right: 0 !important;
                        text-align: center;
                    }
                    img[alt="FAQ Graphic"] {
                        margin: 0 auto;
                    }
                }
                @media (max-width: 768px) {
                    section[style*="padding: 120px 20px"] {
                        padding: 80px 20px !important;
                    }
                    div[style*="height: 600px"] {
                        height: 400px !important;
                    }
                }
            `}</style>
        </PageWrapper>
    );
}
