'use client';

import React, { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        workEmail: '',
        country: '',
        phoneNumber: '',
        services: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" style={{
            padding: '100px 20px',
            background: '#ffffff'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Main Content Wrap */}
                <div className="contact-container">

                    {/* Left Side: Contact Form (Takes more space) */}
                    <div className="contact-form-side">
                        <h2 style={{
                            fontSize: '48px',
                            fontWeight: '800',
                            color: '#000',
                            marginBottom: '40px',
                            fontFamily: 'var(--font-outfit), sans-serif'
                        }}>
                            Contact Us
                        </h2>

                        <form onSubmit={handleSubmit}>
                            {/* Row 1: First Name & Last Name */}
                            <div className="form-grid-2">
                                <div className="form-group">
                                    <label>First name</label>
                                    <input
                                        suppressHydrationWarning
                                        type="text"
                                        name="firstName"
                                        placeholder="First name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last name</label>
                                    <input
                                        suppressHydrationWarning
                                        type="text"
                                        name="lastName"
                                        placeholder="Last name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Row 2: Company Name & Work Email */}
                            <div className="form-grid-2">
                                <div className="form-group">
                                    <label>Company Name</label>
                                    <input
                                        suppressHydrationWarning
                                        type="text"
                                        name="companyName"
                                        placeholder="Company Name"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Work Email</label>
                                    <input
                                        suppressHydrationWarning
                                        type="email"
                                        name="workEmail"
                                        placeholder="Work Email"
                                        value={formData.workEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Row 3: Select Country, Phone Number, Services */}
                            <div className="form-grid-3">
                                <div className="form-group">
                                    <label>Select Country</label>
                                    <select
                                        suppressHydrationWarning
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Country</option>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        suppressHydrationWarning
                                        type="tel"
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Services I'm Interested In</label>
                                    <select
                                        suppressHydrationWarning
                                        name="services"
                                        value={formData.services}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Services I'm Interested In</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="AI Solutions">AI Solutions</option>
                                        <option value="Mobile Apps">Mobile Apps</option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 4: Message */}
                            <div className="form-group" style={{ marginBottom: '30px' }}>
                                <label>Tell Us About Your Project</label>
                                <textarea
                                    suppressHydrationWarning
                                    name="message"
                                    placeholder="Tell Us About Your Project"
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{ minHeight: '150px' }}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                suppressHydrationWarning
                                type="submit"
                                className="send-btn"
                            >
                                Send a Message
                            </button>

                            {/* Disclaimer */}
                            <p style={{
                                fontSize: '11px',
                                color: '#909090',
                                marginTop: '20px',
                                fontWeight: '400'
                            }}>
                                This site is protected by reCAPTCHA and the Google <a href="#" style={{ color: '#909090', textDecoration: 'underline' }}>Privacy Policy</a> and <a href="#" style={{ color: '#909090', textDecoration: 'underline' }}>Terms of Service</a> apply.
                            </p>
                        </form>
                    </div>

                    {/* Right Side: Contact Info Card */}
                    <div className="contact-info-side" style={{
                        background: '#000',
                        borderRadius: '24px',
                        padding: '60px 45px',
                        color: '#fff',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h3 style={{
                                fontSize: '38px', // High impact size
                                fontWeight: '900',
                                marginBottom: '20px',
                                color: '#ffffff',
                                letterSpacing: '-1px',
                                lineHeight: '1.1'
                            }}>
                                Contact Information
                            </h3>
                            <p style={{
                                fontSize: '22px',
                                color: '#B0B0B0',
                                marginBottom: '60px',
                                fontWeight: '500'
                            }}>
                                Say something to start a live chat!
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '45px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                                    <i className="ph ph-phone" style={{ fontSize: '32px', color: '#ffffff' }}></i>
                                    <span style={{ fontSize: '22px', color: '#ffffff', fontWeight: '500' }}>+91 8977272783</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                                    <i className="ph ph-envelope" style={{ fontSize: '32px', color: '#ffffff' }}></i>
                                    <span style={{ fontSize: '22px', color: '#ffffff', fontWeight: '500' }}>dilshajinfotech.it@gmail.com</span>
                                </div>

                                {/* Visakhapatnam Address */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '25px', marginTop: '10px' }}>
                                    <i className="ph ph-map-pin" style={{ fontSize: '34px', marginTop: '6px', color: '#ffffff' }}></i>
                                    <div>
                                        <h4 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '15px', color: '#ffffff', letterSpacing: '0.5px' }}>VISAKHAPATNAM</h4>
                                        <p style={{ fontSize: '20px', color: '#D9D9D9', lineHeight: '1.7', fontWeight: '400' }}>
                                            Rolugunta, Narsapatnam,<br />
                                            Visakhapatnam, Andhra Pradesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Circles */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-40px',
                            right: '-40px',
                            width: '240px', // Changed from 200px to 240px
                            height: '240px', // Changed from 200px to 240px
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.08)', // Changed from 0.05 to 0.08
                            zIndex: 0
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '50px', // Changed from 40px to 50px
                            right: '50px', // Changed from 40px to 50px
                            width: '120px', // Changed from 100px to 120px
                            height: '120px', // Changed from 100px to 120px
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.04)', // Changed from 0.05 to 0.04
                            zIndex: 0
                        }}></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .contact-container {
                    display: flex;
                    flex-direction: row;
                    gap: 40px;
                    align-items: flex-start;
                }
                .contact-form-side {
                    flex: 1.2;
                    min-width: 320px;
                }
                .contact-info-side {
                    flex: 0.8;
                    min-width: 320px;
                    align-self: stretch;
                }
                .form-grid-2 {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 20px;
                }
                .form-grid-3 {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 20px;
                }
                .form-group {
                    display: flex;
                    flex-direction: column;
                }
                .form-group label {
                    font-size: 13px;
                    color: #111;
                    margin-bottom: 10px;
                    font-weight: 600;
                }
                .form-group input, 
                .form-group select, 
                .form-group textarea {
                    padding: 16px 20px;
                    border: 1px solid #EAEAEA;
                    border-radius: 14px;
                    font-size: 15px;
                    outline: none;
                    transition: all 0.3s ease;
                    background: #fff;
                    color: #000;
                    width: 100%;
                }
                .form-group input:focus, 
                .form-group select:focus, 
                .form-group textarea:focus {
                    border-color: #000;
                    box-shadow: 0 0 0 4px rgba(0,0,0,0.02);
                }
                .send-btn {
                    background: #000;
                    color: #fff;
                    border: none;
                    padding: 18px 45px;
                    border-radius: 50px;
                    font-size: 16px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    margin-top: 10px;
                    display: inline-block;
                    width: fit-content;
                }
                .send-btn:hover {
                    background: #222;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }

                @media (max-width: 1024px) {
                    .contact-container {
                        flex-direction: column !important;
                    }
                    .contact-info-side {
                        width: 100% !important;
                        min-height: 500px;
                    }
                }
                @media (max-width: 768px) {
                    .form-grid-3 {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }
                @media (max-width: 600px) {
                    .form-grid-2, .form-grid-3 {
                        grid-template-columns: 1fr !important;
                    }
                    .send-btn {
                        width: 100% !important;
                    }
                }
            `}</style>
        </section>
    );
}
