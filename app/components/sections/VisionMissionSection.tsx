'use client';

export default function VisionMissionSection() {
    return (
        <section className="mxd-section" style={{ padding: '80px 0', background: 'transparent' }}>
            <div className="mxd-container grid-container">
                <div className="mxd-block">
                    {/* Vision Row - Text on Left, Heading on Right */}
                    <div className="row align-items-center mb-5" style={{ marginBottom: '100px' }}>
                        <div className="col-lg-7">
                            <p style={{
                                fontSize: '18px',
                                color: '#444',
                                lineHeight: '1.6',
                                fontWeight: '500',
                                margin: 0
                            }}>
                                Under our brand DR, we aim to bridge the gap between education and employment, while also creating digital platforms that redefine industries like e-commerce, healthcare, and logistics
                            </p>
                        </div>
                        <div className="col-lg-5 text-end">
                            <h2 style={{
                                fontSize: 'clamp(40px, 6vw, 84px)',
                                fontWeight: '700',
                                color: '#333',
                                margin: 0,
                                lineHeight: '1.1',
                                letterSpacing: '-1px'
                            }}>Our Vision</h2>
                        </div>
                    </div>

                    {/* Mission Row - Heading on Left, Text on Right */}
                    <div className="row align-items-center" style={{ marginTop: '80px' }}>
                        {/* Left Side: Heading + Subtitle */}
                        <div className="col-lg-5">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h2 style={{
                                    fontSize: 'clamp(40px, 6vw, 84px)',
                                    fontWeight: '700',
                                    color: '#1a1a1a',
                                    margin: 0,
                                    lineHeight: '1',
                                    letterSpacing: '-1px'
                                }}>Our Mission</h2>
                                <p style={{
                                    fontSize: '14px',
                                    color: '#666',
                                    marginTop: '15px',
                                    fontWeight: '500',
                                    maxWidth: '350px'
                                }}>To deliver excellence through innovation, integrity, and dedication.</p>
                            </div>
                        </div>

                        {/* Right Side: Paragraph */}
                        <div className="col-lg-7">
                            <div className="ps-lg-5">
                                <p style={{
                                    fontSize: '18px',
                                    color: '#333',
                                    lineHeight: '1.6',
                                    fontWeight: '500',
                                    margin: 0
                                }}>
                                    Our mission is to make DR a nationally recognized innovation hub for training, digital services, and real-world product launches
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
