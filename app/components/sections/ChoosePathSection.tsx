'use client';

import { useState } from 'react';
import EnrollmentModal from '../modals/EnrollmentModal';

export default function ChoosePathSection() {
    const [enrollmentType, setEnrollmentType] = useState<'Value Courses' | 'Hands-on Internship' | null>(null);

    return (
        <section style={{
            padding: '100px 20px',
            background: '#fff'
        }}>
            <EnrollmentModal
                isOpen={!!enrollmentType}
                onClose={() => setEnrollmentType(null)}
                type={enrollmentType || 'Value Courses'}
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{
                        fontSize: '48px',
                        fontWeight: '700',
                        color: '#001a33',
                        marginBottom: '16px',
                        fontFamily: 'Inter, sans-serif'
                    }}>Choose Your Path</h2>
                    <p style={{
                        fontSize: '16px',
                        color: '#444',
                        lineHeight: '1.6',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Accelerate your tech journey with our specialized tracks designed for modern market demands.
                    </p>
                </div>

                {/* Two Cards Container */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '40px'
                }}>
                    {/* Value Courses Card - Light */}
                    <div style={{
                        background: '#f8faff',
                        borderRadius: '40px',
                        padding: '60px 40px',
                        border: '1px solid #e5efff',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Subtle Blue Decoration */}
                        <div style={{
                            position: 'absolute',
                            top: '-50px',
                            right: '-50px',
                            width: '200px',
                            height: '200px',
                            background: 'rgba(59, 130, 246, 0.05)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        {/* Icon */}
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '16px',
                            background: '#3b82f6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '32px',
                            zIndex: 2
                        }}>
                            <i className="ph-bold ph-book-open-text" style={{ fontSize: '32px', color: '#fff' }}></i>
                        </div>

                        {/* Title */}
                        <h3 style={{
                            fontSize: '32px',
                            fontWeight: '700',
                            color: '#001a33',
                            marginBottom: '20px',
                            zIndex: 2
                        }}>Value Courses</h3>

                        {/* Description */}
                        <p style={{
                            fontSize: '16px',
                            color: '#444',
                            lineHeight: '1.8',
                            marginBottom: '40px',
                            zIndex: 2
                        }}>
                            Deep-dive into MERN, UI/UX, and AI development. Our courses are crafted to meet current industry demands and future-proof your skills.
                        </p>

                        {/* Features */}
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: '0 0 50px 0',
                            zIndex: 2
                        }}>
                            {[
                                "Industry Recognized Certification",
                                "Daily Live Q&A Sessions",
                                "Lifetime Community Support",
                                "Real-world Portfolio Projects"
                            ].map((feature, i) => (
                                <li key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    fontSize: '15px',
                                    color: '#444',
                                    marginBottom: '16px'
                                }}>
                                    <i className="ph-bold ph-check-circle" style={{ fontSize: '20px', color: '#3b82f6', opacity: 0.6 }}></i>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button
                            onClick={() => setEnrollmentType('Value Courses')}
                            suppressHydrationWarning
                            style={{
                                width: '100%',
                                padding: '18px 32px',
                                background: '#2563eb',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '16px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                marginTop: 'auto',
                                zIndex: 2
                            }}>
                            Enroll in Courses
                            <i className="ph-bold ph-arrow-right"></i>
                        </button>
                    </div>

                    {/* Hands-on Internship Card - Dark */}
                    <div style={{
                        background: '#0a0d14',
                        borderRadius: '40px',
                        padding: '60px 40px',
                        border: '1px solid #1a1f2e',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Subtle Dark Decoration */}
                        <div style={{
                            position: 'absolute',
                            top: '-50px',
                            right: '-50px',
                            width: '200px',
                            height: '200px',
                            background: 'rgba(124, 58, 237, 0.1)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        {/* Icon */}
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '16px',
                            background: '#6366f1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '32px',
                            zIndex: 2
                        }}>
                            <i className="ph-bold ph-briefcase" style={{ fontSize: '32px', color: '#fff' }}></i>
                        </div>

                        {/* Title */}
                        <h3 style={{
                            fontSize: '32px',
                            fontWeight: '700',
                            color: '#fff',
                            marginBottom: '20px',
                            zIndex: 2
                        }}>Hands-on Internship</h3>

                        {/* Description */}
                        <p style={{
                            fontSize: '16px',
                            color: '#9ca3af',
                            lineHeight: '1.8',
                            marginBottom: '40px',
                            zIndex: 2
                        }}>
                            Transform theory into practice. Work inside our dev teams and experience the software lifecycle first-hand from ideation to deployment.
                        </p>

                        {/* Features */}
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: '0 0 50px 0',
                            zIndex: 2
                        }}>
                            {[
                                "Live Client Projects",
                                "Performance Based Stipend",
                                "PPO Opportunity (Pre-Placement Offer)",
                                "1-on-1 Mentorship from Seniors"
                            ].map((feature, i) => (
                                <li key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    fontSize: '15px',
                                    color: '#9ca3af',
                                    marginBottom: '16px'
                                }}>
                                    <i className="ph-bold ph-check-circle" style={{ fontSize: '20px', color: '#6366f1', opacity: 0.8 }}></i>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button
                            onClick={() => setEnrollmentType('Hands-on Internship')}
                            suppressHydrationWarning
                            style={{
                                width: '100%',
                                padding: '18px 32px',
                                background: '#5c5ffc',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '16px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                marginTop: 'auto',
                                zIndex: 2
                            }}>
                            Apply for Internship
                            <i className="ph-bold ph-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

