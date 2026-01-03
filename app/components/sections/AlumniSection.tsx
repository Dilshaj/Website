'use client';

import HeroImageStack from './HeroImageStack';

export default function AlumniSection() {
    return (
        <section style={{ padding: '80px 20px', background: '#fff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div className="alumni-grid">
                    {/* Left: Content */}
                    <div>
                        <h2 style={{
                            fontSize: '48px',
                            fontWeight: '700',
                            color: '#001a33',
                            marginBottom: '32px',
                            lineHeight: '1.2'
                        }}>
                            Join thousands of<br />
                            <span style={{ color: '#3b82f6', fontStyle: 'italic', fontFamily: 'serif' }}>successful alumni</span>
                        </h2>

                        {/* Avatars */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    border: '2px solid #fff',
                                    background: '#eee',
                                    overflow: 'hidden',
                                    marginLeft: i === 1 ? 0 : '-12px',
                                    zIndex: 6 - i
                                }}>
                                    <img src={`/img/avatars/300x300_ava-0${i}.webp`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            ))}
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: '#f3f4f6',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '12px',
                                fontWeight: '600',
                                color: '#666',
                                marginLeft: '-12px',
                                zIndex: 0,
                                border: '2px solid #fff'
                            }}>+2k</div>
                        </div>

                        {/* Testimonial */}
                        <div style={{ maxWidth: '500px' }}>
                            <p style={{
                                fontSize: '18px',
                                color: '#444',
                                lineHeight: '1.6',
                                marginBottom: '24px',
                                fontStyle: 'italic',
                                opacity: 0.8
                            }}>
                                "Dilshaj Infotech changed my life. Within 6 months of finishing my MERN course and internship, I secured a role at a top tech firm with a package I never thought possible."
                            </p>
                            <div>
                                <span style={{ fontWeight: '700', color: '#000' }}>Ananya Sharma</span>
                                <span style={{ color: '#3b82f6', marginLeft: '12px', fontSize: '14px', fontWeight: '600' }}>· Software Engineer @ InnovateLabs</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image Stack Animation */}
                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', minHeight: '550px' }}>
                        <HeroImageStack />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .alumni-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 1.1fr;
                    gap: 40px;
                    align-items: center;
                }
                @media (max-width: 991px) {
                    .alumni-grid {
                        grid-template-columns: 1fr;
                        gap: 60px;
                        text-align: center;
                    }
                    .alumni-grid div {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
            `}</style>
        </section>
    );
}
