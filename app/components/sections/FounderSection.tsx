'use client';

import { useState } from 'react';

export default function FounderSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('idle');

        try {
            const response = await fetch('/api/contact-founder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                if (data.warning) console.warn(data.warning);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section style={{
            padding: '120px 20px',
            background: '#FDF8FF', // Light pinkish/purple background from Image 2
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                maxWidth: '1300px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'minmax(400px, 1fr) 1.2fr', // Left column slightly smaller, Right wider
                gap: '80px',
                alignItems: 'center'
            }} className="founder-grid">

                {/* Left Column: Founder Photo & Rings */}
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    {/* Background Rings */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        zIndex: 1
                    }}>
                        <img
                            src="/about/founder/rings-bg.png"
                            alt=""
                            style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.8 }}
                        />
                    </div>

                    {/* Founder Photo */}
                    <div style={{
                        position: 'relative',
                        zIndex: 2,
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '10px solid rgba(255,255,255,0.8)',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src="/about/founder/dilshaj-photo.png"
                            alt="Dilshaj - Founder"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>

                {/* Right Column: Text & Form */}
                <div style={{ zIndex: 5 }}>
                    {/* Top Text Block */}
                    <div style={{ marginBottom: '60px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                            <h2 style={{
                                fontSize: '32px',
                                fontWeight: '800',
                                color: '#333',
                                margin: 0,
                            }}>From the <span style={{ color: '#2563EB' }}>Founder's</span> Desk</h2>
                            {/* Little spark/icon if needed */}
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#333" />
                            </svg>
                        </div>

                        <p style={{
                            fontSize: '18px',
                            color: '#444',
                            lineHeight: '1.7',
                            fontWeight: '600',
                            marginBottom: '25px',
                            fontStyle: 'italic'
                        }}>
                            "I started Dilshaj Infotech with a simple belief - talent exists everywhere, but opportunity does not. Our goal is to bridge that gap by bringing global technology, quality education, and real career opportunities to every learner, especially from rural communities like Narsipatnam."
                        </p>

                        <p style={{
                            fontSize: '16px',
                            color: '#555',
                            lineHeight: '1.7',
                            marginBottom: '40px'
                        }}>
                            At Dilshaj Infotech, we are committed to building not just technology solutions, but a complete ecosystem that empowers learning, innovation, and career growth. Through our services, products, courses, and internships, we aim to create lasting impact for individuals and businesses alike.
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                background: '#8B5CF6',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: '20px'
                            }}>DR</div>
                            <div>
                                <h4 style={{ fontSize: '18px', fontWeight: '800', margin: 0, color: '#000' }}>Dilshaj</h4>
                                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Founder & CEO, Dilshaj Infotech</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div>
                        <div style={{ textAlign: 'left', marginBottom: '30px' }}>
                            <h3 style={{
                                fontSize: '32px',
                                fontWeight: '800',
                                color: '#333',
                                marginBottom: '10px'
                            }}>
                                Have an Awsome Project<br />
                                Idea? <span style={{ color: '#2563EB' }}>Let's Discuss</span>
                            </h3>
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {/* Input Row */}
                            <div style={{
                                background: '#fff',
                                borderRadius: '50px',
                                padding: '10px 25px',
                                display: 'flex',
                                alignItems: 'center',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                border: '1px solid #eee'
                            }}>
                                <div style={{
                                    width: '40px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    color: '#8B5CF6'
                                }}>
                                    <i className="ph-bold ph-user" style={{ fontSize: '20px' }}></i>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        width: '100%',
                                        padding: '10px',
                                        fontSize: '16px',
                                        color: '#333'
                                    }}
                                />
                            </div>

                            <div style={{
                                background: '#fff',
                                borderRadius: '50px',
                                padding: '10px 25px',
                                display: 'flex',
                                alignItems: 'center',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                border: '1px solid #eee'
                            }}>
                                <div style={{
                                    width: '40px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    color: '#3B82F6'
                                }}>
                                    <i className="ph-bold ph-envelope" style={{ fontSize: '20px' }}></i>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        width: '100%',
                                        padding: '10px',
                                        fontSize: '16px',
                                        color: '#333'
                                    }}
                                />
                            </div>

                            <div style={{
                                background: '#fff',
                                borderRadius: '50px',
                                padding: '10px 25px',
                                display: 'flex',
                                alignItems: 'center',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                border: '1px solid #eee'
                            }}>
                                <div style={{
                                    width: '40px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    color: '#8B5CF6'
                                }}>
                                    <i className="ph-bold ph-chat-circle-text" style={{ fontSize: '20px' }}></i>
                                </div>
                                <input
                                    type="text"
                                    name="message"
                                    placeholder="Enter Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        width: '100%',
                                        padding: '10px',
                                        fontSize: '16px',
                                        color: '#333'
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    background: '#2563EB',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '50px',
                                    padding: '18px',
                                    fontSize: '18px',
                                    fontWeight: '700',
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)',
                                    transition: 'transform 0.2s ease',
                                    marginTop: '10px'
                                }}
                                onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.transform = 'translateY(-2px)')}
                                onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.transform = 'translateY(0)')}
                            >
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>

                            {status === 'success' && (
                                <p style={{ color: 'green', fontSize: '14px', textAlign: 'center', fontWeight: 'bold' }}>Message sent successfully! We'll be in touch soon.</p>
                            )}
                            {status === 'error' && (
                                <p style={{ color: 'red', fontSize: '14px', textAlign: 'center' }}>Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
               @media (max-width: 1024px) {
                   .founder-grid {
                       grid-template-columns: 1fr !important;
                       text-align: center;
                       gap: 60px !important;
                   }
                   .founder-grid > div[style*="justifyContent: center"] {
                       margin-bottom: 40px;
                   }
                   div[style*="display: flex; alignItems: center; gap: 15px"] {
                       justify-content: center;
                   }
                   div[style*="textAlign: left"] {
                       text-align: center !important;
                   }
               }
           `}</style>
        </section>
    );
}

// Icons Note: Ensure Phosphor icons are available, otherwise standard SVGs are used as backups in logic above?
// Using Phosphor class names as they seem to be used in the project (e.g. ph-bold)
