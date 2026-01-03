'use client';

export default function StatisticsSection() {
    return (
        <section className="mxd-section" style={{ padding: '60px 0', background: 'transparent' }}>
            <div className="mxd-container grid-container">
                <div className="mxd-block">
                    <div className="container-fluid px-0">
                        <div className="row g-4">
                            {/* Card 1: 100% Commitment */}
                            <div className="col-lg-5">
                                <div style={{
                                    background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
                                    borderRadius: '30px',
                                    padding: '50px 40px',
                                    height: '380px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    color: '#fff'
                                }}>
                                    <img
                                        src="/img/mission/silver-checkmark.png"
                                        alt="Commitment"
                                        style={{
                                            position: 'absolute',
                                            left: '20px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: '260px',
                                            zIndex: 1
                                        }}
                                    />
                                    <div style={{ position: 'relative', zIndex: 2, textAlign: 'right' }}>
                                        <h3 style={{ fontSize: '72px', fontWeight: '800', margin: 0, lineHeight: '1' }}>100%</h3>
                                        <p style={{ fontSize: '20px', fontWeight: '600', marginTop: '10px' }}>Commitment</p>

                                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '40px', fontSize: '15px' }}>
                                            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px', marginBottom: '8px' }}>
                                                <i className="ph-bold ph-check" style={{ fontSize: '14px' }}></i> Quality
                                            </li>
                                            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px', marginBottom: '8px' }}>
                                                <i className="ph-bold ph-check" style={{ fontSize: '14px' }}></i> Integrity
                                            </li>
                                            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
                                                <i className="ph-bold ph-check" style={{ fontSize: '14px' }}></i> Responsibility
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: 80% Clients */}
                            <div className="col-lg-7">
                                <div style={{
                                    background: '#fff',
                                    borderRadius: '30px',
                                    padding: '40px',
                                    height: '380px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: '1px solid #f0f0f0',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
                                }}>
                                    <img
                                        src="/img/mission/bar-chart-3d.png"
                                        alt="Success Rate"
                                        style={{
                                            position: 'absolute',
                                            left: '40px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: '320px',
                                            zIndex: 1
                                        }}
                                    />

                                    {/* Avatars on top right */}
                                    <div style={{ position: 'absolute', top: '40px', right: '40px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div className="mxd-avatars" style={{ display: 'flex' }}>
                                            {[1, 2, 3].map(i => (
                                                <div key={i} style={{ width: '45px', height: '45px', borderRadius: '50%', border: '3px solid #fff', overflow: 'hidden', marginLeft: i === 1 ? 0 : '-15px' }}>
                                                    <img src={`/img/avatars/300x300_ava-0${i}.webp`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ position: 'absolute', bottom: '40px', right: '40px', textAlign: 'right' }}>
                                        <h3 style={{ fontSize: '72px', fontWeight: '800', color: '#1a1a1a', margin: 0, lineHeight: '1' }}>80%</h3>
                                        <p style={{ fontSize: '15px', color: '#666', marginTop: '10px', lineHeight: '1.4' }}>
                                            Clients come back for<br />a new project
                                        </p>
                                    </div>

                                    {/* Small arrow icon on right edge */}
                                    <div style={{ position: 'absolute', bottom: '40px', right: '15px', width: '30px', height: '30px', borderRadius: '50%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="ph-bold ph-arrow-up" style={{ fontSize: '14px', color: '#000' }}></i>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: 15+ Project Ideas */}
                            <div className="col-lg-7">
                                <div style={{
                                    background: '#fff',
                                    borderRadius: '30px',
                                    padding: '50px',
                                    height: '450px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: '1px solid #f0f0f0',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
                                }}>
                                    <div style={{ maxWidth: '300px' }}>
                                        <h3 style={{ fontSize: '84px', fontWeight: '800', color: '#1a1a1a', margin: 0, lineHeight: '1' }}>15+</h3>
                                        <p style={{ fontSize: '24px', fontWeight: '700', color: '#333', marginTop: '10px' }}>Project Ideas</p>
                                    </div>

                                    <img
                                        src="/img/mission/zen-stones-3d.png"
                                        alt="Projects"
                                        style={{
                                            position: 'absolute',
                                            right: '0',
                                            top: '0',
                                            height: '100%',
                                            width: 'auto',
                                            objectFit: 'cover',
                                            zIndex: 1
                                        }}
                                    />

                                    <button suppressHydrationWarning style={{
                                        position: 'absolute',
                                        bottom: '50px',
                                        left: '50px',
                                        padding: '14px 28px',
                                        borderRadius: '30px',
                                        border: '1px solid #000',
                                        background: '#fff',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        zIndex: 2,
                                        cursor: 'pointer'
                                    }}>Start New Project</button>
                                </div>
                            </div>

                            {/* Card 4: 1 Clear Vision */}
                            <div className="col-lg-5">
                                <div style={{
                                    background: '#fff',
                                    borderRadius: '30px',
                                    padding: '50px',
                                    height: '450px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: '1px solid #f0f0f0',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                        <h3 style={{ fontSize: '84px', fontWeight: '800', color: '#1a1a1a', margin: 0, lineHeight: '0.8' }}>1</h3>
                                        <p style={{ fontSize: '20px', fontWeight: '700', color: '#333', marginTop: '10px' }}>Clear<br />Vision</p>
                                    </div>

                                    <p style={{
                                        fontSize: '15px',
                                        color: '#555',
                                        marginTop: '30px',
                                        lineHeight: '1.6',
                                        maxWidth: '240px'
                                    }}>
                                        Building global technology solutions rooted in local impact.
                                    </p>

                                    <img
                                        src="/img/mission/innovation.png"
                                        alt="Vision"
                                        style={{
                                            position: 'absolute',
                                            right: '-20px',
                                            bottom: '0',
                                            width: '320px',
                                            zIndex: 1
                                        }}
                                        onError={(e) => { (e.target as any).src = 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png'; }}
                                    />

                                    <button suppressHydrationWarning style={{
                                        position: 'absolute',
                                        bottom: '50px',
                                        left: '50px',
                                        padding: '14px 34px',
                                        borderRadius: '30px',
                                        border: '1px solid #000',
                                        background: '#fff',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        zIndex: 2,
                                        cursor: 'pointer'
                                    }}>Works</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
