'use client';
import { useState, useEffect } from 'react';

interface JobApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}

export default function JobApplicationModal({ isOpen, onClose, jobTitle }: JobApplicationModalProps) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        portfolio: '',
    });
    const [resume, setResume] = useState<File | null>(null);
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

        const data = new FormData();
        data.append('firstName', formData.firstName);
        data.append('lastName', formData.lastName);
        data.append('email', formData.email);
        data.append('portfolio', formData.portfolio);
        data.append('jobTitle', jobTitle);
        if (resume) {
            data.append('resume', resume);
        }

        try {
            const res = await fetch('/api/apply', {
                method: 'POST',
                body: data,
            });
            const result = await res.json();
            if (result.success) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setFormData({ firstName: '', lastName: '', email: '', portfolio: '' });
                    setResume(null);
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
                    background: '#f3f4f6',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#666'
                }}>×</button>

                <div style={{ marginBottom: '20px' }}>
                    <span style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#9ca3af',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>APPLYING FOR</span>
                    <h2 style={{
                        fontSize: '28px',
                        fontWeight: '800',
                        color: '#111827',
                        marginTop: '4px'
                    }}>{jobTitle}</h2>
                </div>

                {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '40px 0', color: '#10b981' }}>
                        <i className="ph-fill ph-check-circle" style={{ fontSize: '48px', marginBottom: '16px' }}></i>
                        <h3>Application Submitted!</h3>
                        <p style={{ color: '#666' }}>Good luck! We'll be in touch soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                            <div>
                                <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '11px', fontWeight: '700', color: '#374151', marginBottom: '8px' }}>First Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.firstName}
                                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        background: '#f9fafb',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '12px',
                                        fontSize: '14px',
                                        color: '#1f2937',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '11px', fontWeight: '700', color: '#374151', marginBottom: '8px' }}>Last Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.lastName}
                                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
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

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '11px', fontWeight: '700', color: '#374151', marginBottom: '8px' }}>Email Address</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: '#f9fafb',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '12px',
                                    fontSize: '14px',
                                    color: '#1f2937',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '11px', fontWeight: '700', color: '#374151', marginBottom: '8px' }}>Portfolio / LinkedIn URL</label>
                            <div style={{ position: 'relative' }}>
                                <i className="ph-bold ph-link" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}></i>
                                <input
                                    type="url"
                                    placeholder="https://"
                                    value={formData.portfolio}
                                    onChange={e => setFormData({ ...formData, portfolio: e.target.value })}
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
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>Upload Resume</label>
                            <div style={{
                                border: '2px dashed #e5e7eb',
                                borderRadius: '12px',
                                padding: '30px',
                                textAlign: 'center',
                                background: '#f9fafb',
                                cursor: 'pointer',
                                transition: '0.3s'
                            }} onClick={() => document.getElementById('resume-upload')?.click()}>
                                <input
                                    type="file"
                                    id="resume-upload"
                                    hidden
                                    accept=".pdf,.doc,.docx"
                                    onChange={e => setResume(e.target.files?.[0] || null)}
                                />
                                <i className="ph-bold ph-upload-simple" style={{ fontSize: '32px', color: '#9ca3af', marginBottom: '8px' }}></i>
                                <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
                                    {resume ? resume.name : 'Click to upload your resume (PDF or DOCX)'}
                                </p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            style={{
                                width: '100%',
                                padding: '16px',
                                background: '#111827',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '12px',
                                fontSize: '16px',
                                fontWeight: '700',
                                cursor: status === 'loading' ? 'wait' : 'pointer',
                                transition: '0.3s',
                                opacity: status === 'loading' ? 0.7 : 1
                            }}
                        >
                            {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
