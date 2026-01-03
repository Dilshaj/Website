'use client';

export default function PartnerSection() {
    return (
        <section style={{ padding: '100px 20px', background: '#fff' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(400px, 1fr) 1.2fr',
                    gap: '40px',
                    alignItems: 'center'
                }}>
                    {/* Left: Content */}
                    <div style={{ paddingRight: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                            <img src="/about-section/black-star.png" alt="" style={{ width: '22px', height: '22px' }} />
                            <span style={{ fontSize: '15px', fontWeight: '700', color: '#000', letterSpacing: '0.5px' }}>Partner With Us</span>
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(36px, 4.5vw, 56px)',
                            fontWeight: '700',
                            color: '#000',
                            marginBottom: '40px',
                            lineHeight: '1.1',
                            fontFamily: 'Inter, sans-serif'
                        }}>
                            Partner with <span style={{ color: '#a78bfa' }}>Dilshaj Infotech</span><br />
                            for Impactful <span style={{ color: '#333' }}>Growth</span>
                        </h2>

                        <p style={{
                            fontSize: '18px',
                            color: '#555',
                            lineHeight: '1.8',
                            marginBottom: '48px',
                            maxWidth: '550px'
                        }}>
                            We collaborate with startups, enterprises, institutions, and innovators to transform ideas into scalable digital solutions. Whether it's technology, education, or product innovation — great results are built together.
                        </p>

                        {/* Features Row */}
                        <div style={{ display: 'flex', gap: '30px', marginBottom: '60px', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(167, 139, 250, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="ph-bold ph-handshake" style={{ color: '#a78bfa', fontSize: '18px' }}></i>
                                </div>
                                <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Strategic Partnerships</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(167, 139, 250, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="ph-bold ph-chart-line-up" style={{ color: '#a78bfa', fontSize: '18px' }}></i>
                                </div>
                                <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Mutual Growth</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(167, 139, 250, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="ph-bold ph-lightbulb" style={{ color: '#a78bfa', fontSize: '18px' }}></i>
                                </div>
                                <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Tech Synergy</span>
                            </div>
                        </div>

                        <button suppressHydrationWarning style={{
                            padding: '18px 45px',
                            background: '#a78bfa',
                            color: '#fff',
                            borderRadius: '100px',
                            border: 'none',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: '0 15px 35px rgba(167, 139, 250, 0.3)',
                            transition: 'all 0.3s ease'
                        }}>Start Collaboration</button>
                    </div>

                    {/* Right: Image */}
                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="/partner-section-image/partnership-hands.png"
                            alt="Partnership Hands"
                            style={{
                                width: '100%',
                                maxWidth: '700px',
                                height: 'auto',
                                zIndex: 2
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
