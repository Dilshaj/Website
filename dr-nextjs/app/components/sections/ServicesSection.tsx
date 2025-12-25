export default function ServicesSection() {
    return (
        <div className="mxd-section services-stacking" style={{ padding: '20px 0 100px', overflow: 'visible' }}>
            <div className="mxd-container">
                {/* Centered Heading with Description */}
                <div className="mxd-section-head" style={{ textAlign: 'center', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px' }}>
                    <h2 className="h2 anim-heading" style={{ marginBottom: '16px', color: '#000000' }}>
                        Services We Offer
                    </h2>
                    <p style={{ fontSize: '17px', color: '#666666', lineHeight: '1.6', margin: 0 }}>
                        We will bring the breathe of our experience and industry knowledge to help you succeed
                    </p>
                </div>

                {/* Cards Container - Larger Sizes */}
                <div className="mxd-services-stack" style={{ position: 'relative' }}>
                    <div className="mxd-services-stack__wrap" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px',
                        flexWrap: 'nowrap',
                        maxWidth: '1600px',
                        margin: '0 auto'
                    }}>

                        {/* Card 1 - 3D Design - SMALL */}
                        <div className="mxd-services-stack__item" data-index="1" style={{
                            width: '250px',
                            height: '300px',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                            flexShrink: 0,
                            position: 'relative'
                        }}>
                            <img src="/img/services/card-1-3d-design.png" alt="3D Design & Visualization" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }} />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '45px 20px 20px 20px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ fontSize: '14px', fontWeight: '600', margin: 0, lineHeight: '1.4', color: '#ffffff' }}>
                                    3D Design & Visualization
                                </h3>
                            </div>
                        </div>

                        {/* Card 2 - UI/UX - MEDIUM */}
                        <div className="mxd-services-stack__item" data-index="2" style={{
                            width: '290px',
                            height: '340px',
                            borderRadius: '26px',
                            overflow: 'hidden',
                            boxShadow: '0 12px 45px rgba(0,0,0,0.18)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                            flexShrink: 0,
                            position: 'relative'
                        }}>
                            <img src="/img/services/card-2-uiux.png" alt="UI/UX Designing" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }} />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '50px 22px 22px 22px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ fontSize: '15px', fontWeight: '600', margin: 0, lineHeight: '1.4', color: '#ffffff' }}>
                                    UI/UX Designing
                                </h3>
                            </div>
                        </div>

                        {/* Card 3 - AI & ML - LARGE CENTER */}
                        <div className="mxd-services-stack__item" data-index="3" style={{
                            width: '350px',
                            height: '400px',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                            flexShrink: 0,
                            position: 'relative'
                        }}>
                            <img src="/img/services/card-3-ai-ml.png" alt="Artificial Intelligence (AI) & Machine Learning" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }} />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '55px 28px 28px 28px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0, lineHeight: '1.4', color: '#ffffff' }}>
                                    Artificial Intelligence (AI) & Machine Learning
                                </h3>
                            </div>
                        </div>

                        {/* Card 4 - Web & Mobile - MEDIUM */}
                        <div className="mxd-services-stack__item" data-index="4" style={{
                            width: '290px',
                            height: '340px',
                            borderRadius: '26px',
                            overflow: 'hidden',
                            boxShadow: '0 12px 45px rgba(0,0,0,0.18)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                            flexShrink: 0,
                            position: 'relative'
                        }}>
                            <img src="/img/services/card-4-web-mobile-new.png" alt="Web & Mobile App Development" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }} />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '50px 22px 22px 22px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ fontSize: '15px', fontWeight: '600', margin: 0, lineHeight: '1.4', color: '#ffffff' }}>
                                    Web & Mobile App Development
                                </h3>
                            </div>
                        </div>

                        {/* Card 5 - Cloud - SMALL */}
                        <div className="mxd-services-stack__item" data-index="5" style={{
                            width: '250px',
                            height: '300px',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                            flexShrink: 0,
                            position: 'relative'
                        }}>
                            <img src="/img/services/card-5-cloud.png" alt="Cloud & Digital Solutions" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }} />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '45px 20px 20px 20px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ fontSize: '14px', fontWeight: '600', margin: 0, lineHeight: '1.4', color: '#ffffff' }}>
                                    Cloud & Digital Solutions
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
