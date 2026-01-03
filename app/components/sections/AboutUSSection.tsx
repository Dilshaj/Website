export default function AboutUSSection() {
    return (
        <section style={{
            padding: '120px 20px',
            background: '#fff',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '500px 1fr',
                    gap: '80px',
                    alignItems: 'center'
                }}>
                    {/* Left: Meeting Room Image */}
                    <div style={{
                        borderRadius: '35px',
                        overflow: 'hidden',
                        height: '460px',
                        boxShadow: '0 12px 45px rgba(0, 0, 0, 0.08)'
                    }}>
                        <img
                            src="/about-section/meeting-room.jpg"
                            alt="Dilshaj Infotech Team"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div style={{ position: 'relative' }}>
                        {/* Tag */}
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '14px',
                            marginBottom: '24px'
                        }}>
                            <img
                                src="/about-section/black-star.png"
                                alt=""
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    objectFit: 'contain'
                                }}
                            />
                            <h2 style={{
                                fontSize: '42px',
                                fontWeight: '700',
                                color: '#000',
                                margin: 0,
                                fontFamily: 'Inter, sans-serif'
                            }}>About <span style={{ color: '#9ca3af' }}>US</span></h2>
                        </div>

                        {/* Heading */}
                        <div style={{ maxWidth: '580px' }}>
                            <h3 style={{
                                fontSize: 'clamp(28px, 3.5vw, 42px)',
                                fontWeight: '700',
                                color: '#000',
                                marginBottom: '28px',
                                lineHeight: '1.25'
                            }}>
                                Empowering Your Vision with{' '}
                                <span style={{ color: '#8b7af5' }}>Dilshaj Infotech</span>
                            </h3>
                        </div>

                        {/* Description */}
                        <div style={{ position: 'relative' }}>
                            <p style={{
                                fontSize: '16px',
                                color: '#444',
                                lineHeight: '1.8',
                                marginBottom: '20px',
                                maxWidth: '750px'
                            }}>
                                Dilshaj Infotech is a next-generation global technology company driving impact, innovation, and digital excellence. We build high-performance digital products and scalable, intelligent solutions that help businesses grow, delivering secure and future-ready technology worldwide.
                            </p>

                            <p style={{
                                fontSize: '16px',
                                color: '#444',
                                lineHeight: '1.8',
                                marginBottom: '22px',
                                maxWidth: '750px'
                            }}>
                                Founded in November 2025, Dilshaj Infotech is a service-based and product-based company driven by innovation, skills, and opportunity creation. We specialize in creating digital ecosystems that combine cutting-edge technology with human-centered design.
                            </p>

                            {/* 3D Object - Repositioned to match Image 3 exactly */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-40px',
                                right: '10px',
                                width: '220px',
                                height: '220px',
                                zIndex: 3,
                                pointerEvents: 'none'
                            }}>
                                <img
                                    src="/about-section/3d-object.png"
                                    alt=""
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </div>
                        </div>

                        <p style={{
                            fontSize: '16px',
                            color: '#444',
                            lineHeight: '1.8',
                            marginBottom: '28px',
                            maxWidth: '750px'
                        }}>
                            Our mission is to empower businesses and individuals through technology, fostering growth, innovation, and sustainable success in the digital age.
                        </p>

                        {/* Bullet Points */}
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: '0 0 40px 0'
                        }}>
                            {[
                                "High-performance digital product development",
                                "Intelligent platforms & AI-driven solutions",
                                "Scalable, secure, and future-ready technology",
                                "Customer-centric approach with agile methodologies"
                            ].map((text, i) => (
                                <li key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '14px',
                                    fontSize: '15px',
                                    color: '#444',
                                    marginBottom: '14px'
                                }}>
                                    <span style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: '#8b7af5',
                                        flexShrink: 0
                                    }}></span>
                                    {text}
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button suppressHydrationWarning style={{
                            background: 'linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)',
                            color: '#fff',
                            padding: '16px 42px',
                            borderRadius: '14px',
                            border: 'none',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: '0 8px 25px rgba(126, 34, 206, 0.25)',
                            transition: 'all 0.3s ease'
                        }}>Know More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
