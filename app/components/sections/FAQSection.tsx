'use client';

import { useState } from 'react';

export default function FAQSection() {
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
        <section style={{ padding: '100px 20px', background: '#fff' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(400px, 1fr) 1.2fr',
                    gap: '40px',
                    alignItems: 'center'
                }}>
                    {/* Left: Graphic and Title */}
                    <div style={{ paddingRight: '40px' }}>
                        <h2 style={{
                            fontSize: 'clamp(36px, 5vw, 64px)',
                            fontWeight: '700',
                            color: '#000',
                            marginBottom: '60px',
                            lineHeight: '1.1',
                            fontFamily: 'Inter, sans-serif'
                        }}>
                            Frequently<br />asked questions
                        </h2>

                        <div style={{ position: 'relative', marginTop: '40px' }}>
                            <img
                                src="/questions/faq-graphic.png"
                                alt="FAQ Graphic"
                                style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
                            />
                        </div>
                    </div>

                    {/* Right: Accordion */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {questions.map((q, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <div key={i} style={{
                                    background: isOpen ? '#a78bfa' : '#f9fafb',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    border: isOpen ? 'none' : '1px solid #f3f4f6'
                                }} onClick={() => setOpenIndex(isOpen ? null : i)}>
                                    <div style={{
                                        padding: '25px 35px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <h3 style={{
                                            fontSize: '18px',
                                            fontWeight: '600',
                                            color: isOpen ? '#fff' : '#333',
                                            margin: 0
                                        }}>{q.title}</h3>
                                        <i className={`ph-bold ph-caret-${isOpen ? 'up' : 'down'}`} style={{
                                            fontSize: '20px',
                                            color: isOpen ? '#fff' : '#666'
                                        }}></i>
                                    </div>
                                    <div style={{
                                        maxHeight: isOpen ? '200px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.4s ease',
                                        padding: isOpen ? '0 35px 30px' : '0 35px'
                                    }}>
                                        <p style={{
                                            fontSize: '15px',
                                            lineHeight: '1.7',
                                            color: isOpen ? 'rgba(255,255,255,0.9)' : '#666',
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
    );
}
