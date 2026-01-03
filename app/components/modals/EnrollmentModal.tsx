'use client';
import { useState, useEffect } from 'react';

interface EnrollmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'Value Courses' | 'Hands-on Internship';
}

export default function EnrollmentModal({ isOpen, onClose, type }: EnrollmentModalProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        specialization: 'Full Stack Web Development'
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/enroll', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, type }),
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setFormData({ fullName: '', phone: '', email: '', specialization: 'Full Stack Web Development' });
                }, 2000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
        }} onClick={onClose}>
            <div style={{
                background: '#fff',
                borderRadius: '24px',
                padding: '40px',
                width: '100%',
                maxWidth: '500px',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }} onClick={e => e.stopPropagation()}>

                {/* Close Button */}
                <button onClick={onClose} style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: '#666'
                }}>×</button>

                {/* Badge */}
                <span style={{
                    background: '#e0e7ff',
                    color: '#4338ca',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'inline-block',
                    marginBottom: '16px'
                }}>
                    ENROLLMENT FORM
                </span>

                <h2 style={{
                    fontSize: '28px',
                    fontWeight: '800',
                    color: '#1a1a1a',
                    marginBottom: '10px'
                }}>
                    Join <span style={{ color: '#2563eb' }}>{type}</span>
                </h2>

                <p style={{
                    color: '#666',
                    fontSize: '15px',
                    lineHeight: '1.5',
                    marginBottom: '30px'
                }}>
                    Fill in your details and our career counselor will contact you within 24 hours.
                </p>

                {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '40px 0', color: '#10b981' }}>
                        <i className="ph-fill ph-check-circle" style={{ fontSize: '48px', marginBottom: '16px' }}></i>
                        <h3>Application Submitted!</h3>
                        <p style={{ color: '#666' }}>Check your email for confirmation.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                            <div>
                                <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '11px', fontWeight: '700', color: '#374151', marginBottom: '8px' }}>Full Name</label>
                                <div style={{ position: 'relative' }}>
                                    <i className="ph-bold ph-user" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}></i>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        value={formData.fullName}
                                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '12px 12px 12px 40px',
                                            background: '#f9fafb',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '12px',
                                            fontSize: '14px',
                                            color: '#1f2937',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '11px', fontWeight: '700', color: '#374151', marginBottom: '8px' }}>Phone Number</label>
                                <div style={{ position: 'relative' }}>
                                    <i className="ph-bold ph-phone" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}></i>
                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        required
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '12px 12px 12px 40px',
                                            background: '#f9fafb',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '12px',
                                            fontSize: '14px',
                                            color: '#1f2937',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '11px', fontWeight: '700', color: '#374151', marginBottom: '8px' }}>Email Address</label>
                            <div style={{ position: 'relative' }}>
                                <i className="ph-bold ph-envelope" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}></i>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '12px 12px 12px 40px',
                                        background: '#f9fafb',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '12px',
                                        fontSize: '14px',
                                        color: '#1f2937',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '11px', fontWeight: '700', color: '#374151', marginBottom: '8px' }}>Select Specialization</label>
                            <div style={{ position: 'relative' }}>
                                <select
                                    value={formData.specialization}
                                    onChange={e => setFormData({ ...formData, specialization: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        background: '#f9fafb',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '12px',
                                        fontSize: '14px',
                                        color: '#1f2937',
                                        outline: 'none',
                                        appearance: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <option>Full Stack Web Development</option>
                                    <option>AI & Machine Learning</option>
                                    <option>UI/UX Design</option>
                                    <option>Data Science</option>
                                    <option>Mobile App Development</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            style={{
                                width: '100%',
                                padding: '16px',
                                background: '#2563eb',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '12px',
                                fontSize: '16px',
                                fontWeight: '700',
                                cursor: status === 'loading' ? 'wait' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                transition: '0.3s',
                                opacity: status === 'loading' ? 0.7 : 1
                            }}
                        >
                            {status === 'loading' ? 'Sending...' : 'Confirm Application'}
                            {!status && <i className="ph-bold ph-paper-plane-right"></i>}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
