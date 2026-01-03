'use client';

import PageWrapper from '../components/PageWrapper';
import ContactSection from '../components/sections/ContactSection';
import { useState } from 'react';
import JobApplicationModal from '../components/modals/JobApplicationModal';

export default function CareerPage() {
    const [activeFilter, setActiveFilter] = useState('View All');
    const [selectedJob, setSelectedJob] = useState<string | null>(null);

    const allJobs = [
        { title: 'Senior Frontend Engineer', dept: 'Engineering', loc: 'Remote', type: 'Full-time', pay: '$20k - $40k / yr', subPay: 'Equity options available', icon: 'ph-code', iconBg: '#f8f4ff', iconColor: '#8b7af5' },
        { title: 'Product Designer (UI/UX)', dept: 'Design', loc: 'Narsipatnam', type: 'Full-time', pay: 'Competitive', subPay: 'Based on experience', icon: 'ph-palette', iconBg: '#fff0f6', iconColor: '#d63384' },
        { title: 'Mobile Developer (React Native)', dept: 'Engineering', loc: 'Remote', type: 'Contract', pay: 'Project Based', subPay: 'Hourly / Fixed', icon: 'ph-device-mobile', iconBg: '#e7f5ff', iconColor: '#007bff' },
        { title: 'Business Development Intern', dept: 'Management', loc: 'Hybrid', type: 'Internship', pay: 'Stipend', subPay: 'PPO opportunity', icon: 'ph-briefcase', iconBg: '#fff3e0', iconColor: '#f39c12' }
    ];

    const filteredJobs = activeFilter === 'View All'
        ? allJobs
        : allJobs.filter(job => job.dept === activeFilter);

    return (
        <PageWrapper>
            {/* Hero Section - Image 3 Exact Match */}
            <section style={{
                minHeight: '82vh',
                display: 'flex',
                alignItems: 'center',
                background: '#fafafa',
                padding: '100px 20px 0', // Removed bottom padding for team overlap
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1700px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>
                    <div className="career-hero-grid">
                        {/* Left Content Area (Image 2 style) */}
                        <div style={{ paddingLeft: '0px', paddingTop: '10px', position: 'relative', zIndex: 10 }}>
                            {/* Purple Star Precisely Positioned over "at" */}
                            <div style={{
                                position: 'absolute',
                                top: '-80px',
                                right: '20px', // Further left relative to headline end
                                width: '135px',
                                height: '135px',
                                opacity: 0.9,
                                zIndex: -1,
                                transform: 'rotate(10deg)'
                            }}>
                                <img
                                    src="/projects/purple-star.png"
                                    alt=""
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </div>

                            <h1 style={{
                                fontSize: 'clamp(55px, 8.5vw, 92px)',
                                fontWeight: '600',
                                color: '#000',
                                lineHeight: '1.25',
                                marginBottom: '40px',
                                letterSpacing: '-3px',

                            }}>
                                Build the future at<br />
                                Dilshaj Infotech
                            </h1>
                            <p style={{
                                fontSize: 'clamp(17px, 2.2vw, 20px)',
                                color: '#555',
                                lineHeight: '1.7',
                                maxWidth: '640px',
                                fontWeight: '500'
                            }}>
                                Be part of a dynamic team building the future of technology. We're always looking for talented individuals who share our passion for innovation.
                            </p>
                        </div>

                        {/* Right: Large Scale Team Portrait (Image 2 Precise Scale) */}
                        <div style={{
                            position: 'relative',
                            height: '850px',
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            overflow: 'visible',
                            paddingRight: '200px',
                            marginTop: '-120px'
                        }}>
                            <img
                                src="/career/right.png" // User-provided team image
                                alt="Dilshaj Infotech Team"
                                style={{
                                    width: '140%',
                                    maxWidth: '1050px',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    marginRight: '-250px',
                                    zIndex: 5,
                                    transform: 'translateX(40px) translateY(80px)' // Slightly less bleed to show more team
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Left Cube - Image 2 corner position */}
                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '-40px',
                    width: '180px', // Reduced size to match Image 2
                    height: '180px',
                    opacity: 1,
                    zIndex: 2,
                    transform: 'rotate(-5deg)'
                }}>
                    <img
                        src="/projects/small-cube.png"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
            </section>

            {/* Life at Dilshaj Section */}
            {/* Life at Dilshaj Section - Refined for Image 2 Match */}
            <section style={{
                padding: '120px 20px',
                background: '#fafafa', // Light background from Image 2
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
                    <div className="life-grid">
                        {/* Left: Content & Benefit Cards */}
                        <div style={{ paddingLeft: '40px' }}>
                            <div style={{
                                fontSize: '13px',
                                color: '#8b7af5',
                                fontWeight: '700',
                                letterSpacing: '1.2px',
                                marginBottom: '16px',
                                textTransform: 'uppercase'
                            }}>LIFE AT DILSHAJ</div>
                            <h2 style={{
                                fontSize: 'clamp(40px, 4.5vw, 56px)',
                                fontWeight: '800',
                                color: '#000',
                                marginBottom: '24px',
                                lineHeight: '1.1',
                                letterSpacing: '-1.5px'
                            }}>
                                More than just a workplace.
                            </h2>
                            <p style={{
                                fontSize: '17px',
                                color: '#555',
                                lineHeight: '1.7',
                                marginBottom: '60px',
                                maxWidth: '600px'
                            }}>
                                We believe that a happy team is a productive team. Our culture is built on trust, continuous learning, and a shared passion for technology.
                            </p>

                            {/* Benefit Cards Grid (Image 2 style) */}
                            <div className="benefit-cards">
                                {[
                                    { icon: 'ph-lightning', title: 'Empowerment First', desc: 'Full autonomy to own your projects. We trust our team to innovate and lead without micromanagement.', iconBg: '#E3E0FE', iconColor: '#8b7af5' },
                                    { icon: 'ph-book-open', title: 'Continuous Learning', desc: 'Access to premium courses, mentorship from seniors, and a budget for conferences.', iconBg: '#F3E8FF', iconColor: '#A855F7' },
                                    { icon: 'ph-heart', title: 'Community Driven', desc: 'We are deeply connected to our roots, organizing regular hackathons and tech meetups.', iconBg: '#FFE4E6', iconColor: '#F43F5E' },
                                    { icon: 'ph-shooting-star', title: 'Modern Work', desc: 'High-end equipment (MacBooks/ThinkPads), flexible hours, and a relaxed atmosphere.', iconBg: '#FEF3C7', iconColor: '#D97706' }
                                ].map((benefit, idx) => (
                                    <div key={idx} style={{
                                        background: '#fff',
                                        padding: '40px 30px',
                                        borderRadius: '24px',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                                        border: '1px solid rgba(0,0,0,0.02)'
                                    }}>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            background: benefit.iconBg,
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '20px'
                                        }}>
                                            <i className={`ph-bold ${benefit.icon} `} style={{ fontSize: '24px', color: benefit.iconColor }}></i>
                                        </div>
                                        <h3 style={{ fontSize: '19px', fontWeight: '700', color: '#000', marginBottom: '12px' }}>{benefit.title}</h3>
                                        <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Staggered Image Layout (Image 2 exact replica) */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gridAutoRows: 'minmax(300px, auto)',
                            gap: '24px',
                            position: 'relative'
                        }}>
                            {/* Staggered arrangement like Image 2 */}
                            <div style={{ alignSelf: 'end' }}>
                                <img src="/career/life-1.jpg" alt="" style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: '35px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                                <div style={{ height: '24px' }} /> {/* Spacer */}
                                <img src="/career/life-3.jpg" alt="" style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: '35px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                            </div>
                            <div style={{ alignSelf: 'start' }}>
                                <img src="/career/life-2.jpg" alt="" style={{ width: '100%', height: '480px', objectFit: 'cover', borderRadius: '35px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                                <div style={{ height: '24px' }} /> {/* Spacer */}
                                <img src="/career/life-4.jpg" alt="" style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '35px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Application Modal */}
            <JobApplicationModal
                isOpen={!!selectedJob}
                onClose={() => setSelectedJob(null)}
                jobTitle={selectedJob || ''}
            />

            {/* Main Content Section (Image 5 Style) */}
            <section style={{
                padding: '120px 20px',
                background: '#fafafa',
                position: 'relative'
            }}>
                <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
                    {/* 3 Reasons to Choose Us Section */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '15px',
                        marginBottom: '60px'
                    }}>
                        <img src="/about-section/black-star.png" alt="" style={{ width: '32px', height: '32px' }} />
                        <h2 style={{
                            fontSize: 'clamp(38px, 5vw, 68px)',
                            fontWeight: '800',
                            color: '#000',
                            letterSpacing: '-2px',
                            margin: 0
                        }}>3 Reasons to Choose Us</h2>
                    </div>

                    <div className="reasons-grid">
                        {[
                            { title: 'Discovery & Planning', desc: 'We encourage continuous learning, upskilling, and personal development at every stage of your career.' },
                            { title: 'Supportive & Collaborative Team', desc: 'Work alongside passionate professionals in a culture that values teamwork, respect, and open communication.' },
                            { title: 'Work on Real-World Projects', desc: 'Get hands-on experience with live projects, cutting-edge technologies, and real business challenges.' }
                        ].map((item, idx) => (
                            <div key={idx} className="reason-card">
                                <h3 className="reason-title">{item.title}</h3>
                                <p className="reason-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Open Roles Section */}
                    <div style={{ marginTop: '120px' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '50px'
                        }}>
                            <div>
                                <h2 style={{
                                    fontSize: 'clamp(44px, 5.5vw, 54px)', // Increased font size slightly
                                    fontWeight: '700',
                                    color: '#000',
                                    letterSpacing: '-2px',
                                    marginBottom: '10px'
                                }}>Open Roles</h2>
                                <p style={{
                                    fontSize: '18px',
                                    color: '#666',
                                    fontWeight: '500'
                                }}>Find the role that fits your superpower.</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                gap: '8px',
                                background: '#f8f4ff',
                                padding: '6px',
                                borderRadius: '14px'
                            }}>
                                {['View All', 'Engineering', 'Design', 'Management'].map((filter) => (
                                    <span key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        style={{
                                            padding: '10px 24px',
                                            borderRadius: '10px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            background: activeFilter === filter ? '#fff' : 'transparent',
                                            color: activeFilter === filter ? '#000' : '#666',
                                            boxShadow: activeFilter === filter ? '0 5px 15px rgba(0,0,0,0.05)' : 'none',
                                            transition: '0.3s'
                                        }}>{filter}</span>
                                ))}
                            </div>
                        </div>

                        {/* Job Listings */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px'
                        }}>
                            {filteredJobs.map((job, idx) => (
                                <div key={idx}
                                    onClick={() => setSelectedJob(job.title)}
                                    style={{
                                        background: '#fff',
                                        borderRadius: '50px',
                                        padding: '24px 45px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        boxShadow: '0 5px 30px rgba(0,0,0,0.02)',
                                        border: '1px solid #f0f0f0',
                                        transition: '0.3s',
                                        cursor: 'pointer'
                                    }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                                        <div style={{
                                            width: '56px',
                                            height: '56px',
                                            background: job.iconBg,
                                            borderRadius: '16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <i className={`ph-bold ${job.icon}`} style={{ fontSize: '26px', color: job.iconColor }}></i>
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#000', marginBottom: '8px' }}>{job.title}</h3>
                                            <div style={{ display: 'flex', gap: '20px', fontSize: '15px', color: '#666', fontWeight: '500' }}>
                                                <span>{job.dept}</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="ph ph-globe" style={{ fontSize: '18px', verticalAlign: 'middle', marginRight: '4px' }}></i>{job.loc}</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="ph ph-clock" style={{ fontSize: '18px', verticalAlign: 'middle', marginRight: '4px' }}></i>{job.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '18px', fontWeight: '800', color: '#000' }}>{job.pay}</div>
                                            <div style={{ fontSize: '14px', color: '#999', marginTop: '4px' }}>{job.subPay}</div>
                                        </div>
                                        <div style={{
                                            width: '45px',
                                            height: '45px',
                                            borderRadius: '50%',
                                            border: '1px solid #eee',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: '0.3s'
                                        }}>
                                            <i className="ph-bold ph-arrow-right" style={{ fontSize: '20px', color: '#000' }}></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navy CTA Card (Image 5 Style) */}
                        <div style={{
                            background: '#1a1831', // Dark navy from Image 5
                            borderRadius: '30px',
                            padding: '45px 55px',
                            marginTop: '50px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
                        }}>
                            <div>
                                <h3 style={{
                                    fontSize: '24px',
                                    fontWeight: '700',
                                    color: '#fff',
                                    marginBottom: '10px'
                                }}>Didn't find what you were looking for?</h3>
                                <p style={{
                                    fontSize: '15px',
                                    color: '#b0b0c0'
                                }}>We are always looking for great talent. Drop your resume.</p>
                            </div>
                            <button
                                onClick={() => setSelectedJob('General Open Application')}
                                style={{
                                    background: '#fff',
                                    color: '#1a1831',
                                    padding: '16px 36px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    fontSize: '15px',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    transition: '0.3s'
                                }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                                Send Open Application
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Hiring Protocol Section */}
            <section style={{
                padding: '140px 20px',
                background: '#020617', // Deep navy matching image 4
                color: '#fff',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                        <h2 style={{
                            fontSize: 'clamp(44px, 5.5vw, 76px)',
                            fontWeight: '800',
                            marginBottom: '10px',
                            letterSpacing: '-2px',
                            color: '#fff'
                        }}>
                            Our Hiring <span style={{ color: '#46a2ff' }}>Protocol</span>
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            color: '#cbd5e1',
                            fontWeight: '500',
                            marginTop: '15px'
                        }}>Transparent. Fair. Fast.</p>
                    </div>

                    {/* Protocol Steps */}
                    <div className="protocol-grid" style={{ gap: '40px' }}>
                        {/* Step 1 */}
                        <div>
                            <div style={{
                                fontSize: '84px',
                                fontWeight: '900',

                                marginBottom: '20px',
                                lineHeight: '1',
                                letterSpacing: '-4px'
                            }}>01</div>
                            <h3 style={{
                                fontSize: '26px',
                                fontWeight: '800',
                                color: '#fff',
                                marginBottom: '16px'
                            }}>Application Review</h3>
                            <p style={{
                                fontSize: '16px',
                                color: '#94a3b8',
                                lineHeight: '1.7',
                                fontWeight: '500'
                            }}>
                                Our team reviews your portfolio and code samples.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div>
                            <div style={{
                                fontSize: '84px',
                                fontWeight: '900',

                                marginBottom: '20px',
                                lineHeight: '1',
                                letterSpacing: '-4px'
                            }}>02</div>
                            <h3 style={{
                                fontSize: '26px',
                                fontWeight: '800',
                                color: '#fff',
                                marginBottom: '16px'
                            }}>Culture Sync</h3>
                            <p style={{
                                fontSize: '16px',
                                color: '#94a3b8',
                                lineHeight: '1.7',
                                fontWeight: '500'
                            }}>
                                A quick call to see if our values and goals align.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div>
                            <div style={{
                                fontSize: '84px',
                                fontWeight: '900',

                                marginBottom: '20px',
                                lineHeight: '1',
                                letterSpacing: '-4px'
                            }}>03</div>
                            <h3 style={{
                                fontSize: '26px',
                                fontWeight: '800',
                                color: '#fff',
                                marginBottom: '16px'
                            }}>Skill Assessment</h3>
                            <p style={{
                                fontSize: '16px',
                                color: '#94a3b8',
                                lineHeight: '1.7',
                                fontWeight: '500'
                            }}>
                                Practical task or pair programming session.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div>
                            <div style={{
                                fontSize: '84px',
                                fontWeight: '900',

                                marginBottom: '20px',
                                lineHeight: '1',
                                letterSpacing: '-4px'
                            }}>04</div>
                            <h3 style={{
                                fontSize: '26px',
                                fontWeight: '800',
                                color: '#fff',
                                marginBottom: '16px'
                            }}>Onboarding</h3>
                            <p style={{
                                fontSize: '16px',
                                color: '#94a3b8',
                                lineHeight: '1.7',
                                fontWeight: '500'
                            }}>
                                Final offer and introduction to the team.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to Start Your Project - Separate Section Match Image 2 */}
            <section style={{
                padding: '120px 20px',
                background: '#fff',
                position: 'relative'
            }}>
                <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
                    <div style={{
                        borderRadius: '50px',
                        padding: '120px 60px',
                        textAlign: 'center',
                        backgroundImage: 'url(/projects/ready.png)', // Background image image1.png from public/home
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        overflow: 'hidden',

                    }}>
                        {/* Dark Overlay for readability */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,

                            zIndex: 1
                        }}></div>

                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <h2 style={{
                                fontSize: 'clamp(40px, 6vw, 76px)',
                                fontWeight: '800',
                                color: '#fff',
                                marginBottom: '24px',
                                letterSpacing: '-2px'
                            }}>Ready to Start Your Project?</h2>
                            <p style={{
                                fontSize: 'clamp(16px, 2vw, 22px)',
                                color: '#d0d0d0',
                                marginBottom: '45px',
                                maxWidth: '900px',
                                margin: '0 auto 45px',
                                lineHeight: '1.6',
                                fontWeight: '500'
                            }}>
                                Join the AI revolution. Let's discuss how Dilshaj Infotech can help you unlock new possibilities and drive unprecedented growth.
                            </p>
                            <button style={{
                                background: '#A294F9',
                                color: '#fff',
                                padding: '22px 60px',
                                borderRadius: '25px',
                                border: 'none',
                                fontSize: '20px',
                                fontWeight: '700',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                transition: '0.3s',
                                boxShadow: '0 10px 30px rgba(162, 148, 249, 0.4)'
                            }}>
                                <i className="ph ph-calendar-check" style={{ fontSize: '24px' }}></i>
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Us Section - Shared Component */}
            <ContactSection />
            <style jsx>{`
                .career-hero-grid {
                    display: grid;
                    grid-template-columns: minmax(600px, 1.1fr) 1fr;
                    gap: 20px;
                    align-items: center;
                }
                .life-grid {
                    display: grid;
                    grid-template-columns: minmax(500px, 1fr) 1.2fr;
                    gap: 60px;
                    align-items: start;
                }
                .benefit-cards {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                }
                .reasons-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                }
                .protocol-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 32px;
                }
                .reason-card {
                    position: relative;
                    padding: 60px 45px;
                    background: #fff;
                    border-radius: 40px 10px 40px 10px;
                    text-align: left;
                    min-height: 380px;
                    border: 1.5px solid #eee;
                    border-right: 5px solid #A294F9;
                    border-top: 5px solid #A294F9;
                    box-shadow: 0 15px 45px rgba(0,0,0,0.03);
                    transition: all 0.4s ease;
                }
                .reason-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 25px 60px rgba(162, 148, 249, 0.12);
                }
                .reason-title {
                    font-size: 32px;
                    font-weight: 800;
                    color: #A294F9;
                    line-height: 1.15;
                    margin-bottom: 30px;
                    max-width: 280px;
                }
                .reason-desc {
                    font-size: 18px;
                    color: #444;
                    line-height: 1.7;
                    font-weight: 500;
                }
                @media (max-width: 1200px) {
                    .life-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .career-hero-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                    div[style*="justifyContent: flex-end"] {
                        justify-content: center !important;
                        height: auto !important;
                        padding-right: 0 !important;
                    }
                    img[alt="Dilshaj Infotech Team"] {
                        margin-right: 0 !important;
                        width: 100% !important;
                        transform: none !important;
                    }
                }
                @media (max-width: 991px) {
                    .protocol-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    .reasons-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (max-width: 768px) {
                    .benefit-cards {
                        grid-template-columns: 1fr !important;
                    }
                    .protocol-grid {
                        grid-template-columns: 1fr !important;
                    }
                    div[style*="justifyContent: space-between"] {
                        flex-direction: column !important;
                        gap: 20px;
                    }
                }
            `}</style>
        </PageWrapper >
    );
}
