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
        service: '',
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

    const inputStyle = {
        width: '100%',
        padding: '18px 22px',
        border: '1px solid #e8e8e8',
        borderRadius: '18px',
        fontSize: '15px',
        outline: 'none',
        background: '#ffffff',
        transition: 'border-color 0.2s ease',
        color: '#555555'
    };

    const selectStyle = {
        ...inputStyle,
        appearance: 'none' as const,
        backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23999\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 18px center',
        backgroundSize: '18px',
        paddingRight: '45px',
        color: '#888888'
    };

    return (
        <section id="contact" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: '#fafafa',
            padding: '80px 0'
        }}>
            <div style={{
                maxWidth: '1400px',
                width: '100%',
                margin: '0 auto',
                padding: '0 60px'
            }}>
                {/* Heading - Centered */}
                <h2 style={{
                    fontSize: '48px',
                    fontWeight: '700',
                    marginBottom: '60px',
                    color: '#000000',
                    textAlign: 'center',
                    letterSpacing: '-0.5px'
                }}>
                    Contact <span style={{ color: '#b0b0b0' }}>Us</span>
                </h2>

                {/* Two Column Layout - 68% / 32% */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2.125fr 1fr',
                    gap: '50px',
                    alignItems: 'start'
                }}>

                    {/* Left Section - Form (68%) */}
                    <div>
                        <form onSubmit={handleSubmit}>
                            {/* Row 1: First Name & Last Name */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', marginBottom: '18px' }}>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    style={inputStyle}
                                    suppressHydrationWarning
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    style={inputStyle}
                                    suppressHydrationWarning
                                />
                            </div>

                            {/* Row 2: Company Name & Work Email */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', marginBottom: '18px' }}>
                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder="Company Name"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    style={inputStyle}
                                    suppressHydrationWarning
                                />
                                <input
                                    type="email"
                                    name="workEmail"
                                    placeholder="Work Email"
                                    value={formData.workEmail}
                                    onChange={handleChange}
                                    style={inputStyle}
                                    suppressHydrationWarning
                                />
                            </div>

                            {/* Row 3: Select Country | Phone Number | Services - THREE COLUMNS */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr', gap: '18px', marginBottom: '18px' }}>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    style={selectStyle}
                                    suppressHydrationWarning
                                >
                                    <option value="">Select Country</option>
                                    <option value="india">India</option>
                                    <option value="usa">USA</option>
                                    <option value="uk">UK</option>
                                </select>

                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    style={inputStyle}
                                    suppressHydrationWarning
                                />

                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    style={{
                                        ...selectStyle,
                                        color: '#888888'
                                    }}
                                    suppressHydrationWarning
                                >
                                    <option value="">Services I'm Interested In</option>
                                    <option value="web">Web Development</option>
                                    <option value="mobile">Mobile Apps</option>
                                    <option value="ai">AI & ML</option>
                                    <option value="cloud">Cloud Solutions</option>
                                </select>
                            </div>

                            {/* Textarea - Full Width */}
                            <div style={{ marginBottom: '28px' }}>
                                <textarea
                                    name="message"
                                    placeholder="Tell Us About Your Project"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    style={{
                                        ...inputStyle,
                                        resize: 'vertical',
                                        fontFamily: 'inherit',
                                        minHeight: '130px'
                                    }}
                                    suppressHydrationWarning
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                style={{
                                    padding: '16px 42px',
                                    background: '#000000',
                                    color: '#ffffff',
                                    border: 'none',
                                    borderRadius: '50px',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    marginBottom: '16px',
                                    transition: 'all 0.2s ease'
                                }}
                                suppressHydrationWarning
                            >
                                Send a Message
                            </button>

                            {/* reCAPTCHA Text */}
                            <p style={{ fontSize: '11px', color: '#999999', margin: 0, lineHeight: '1.5' }}>
                                This site is protected by reCAPTCHA and the Google{' '}
                                <a href="#" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Privacy Policy</a> and{' '}
                                <a href="#" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Terms of Service</a> apply.
                            </p>
                        </form>
                    </div>

                    {/* Right Section - Contact Information Card (32%) */}
                    <div style={{
                        background: '#000000',
                        borderRadius: '30px',
                        padding: '50px',
                        color: '#ffffff',
                        position: 'relative',
                        overflow: 'hidden',
                        minHeight: '580px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '12px', color: '#ffffff' }}>
                            Contact Information
                        </h3>
                        <p style={{ fontSize: '14px', color: '#a8a8a8', marginBottom: '50px' }}>
                            Say something to start a live chat!
                        </p>

                        {/* Email */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '30px' }}>
                            <i className="ph-bold ph-envelope" style={{ fontSize: '20px', color: '#ffffff' }}></i>
                            <span style={{ fontSize: '15px', color: '#ffffff', fontWeight: '400' }}>dilshajinfotech.it@gmail.com</span>
                        </div>

                        {/* Phone */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '35px' }}>
                            <i className="ph-bold ph-phone" style={{ fontSize: '20px', color: '#ffffff' }}></i>
                            <span style={{ fontSize: '15px', color: '#ffffff', fontWeight: '400' }}>+91-8977272783</span>
                        </div>

                        {/* Locations */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', marginBottom: '35px' }}>
                            <i className="ph-bold ph-map-pin" style={{ fontSize: '20px', marginTop: '2px', color: '#ffffff' }}></i>
                            <div style={{ fontSize: '14px', lineHeight: '1.7' }}>
                                <span style={{ display: 'block', color: '#e0e0e0' }}>
                                    Visakhapatnam, Andhra Pradesh.<br />
                                    Hyderabad, Telangana.
                                </span>
                            </div>
                        </div>

                        {/* Registered Office */}
                        <div style={{ fontSize: '14px', lineHeight: '1.75', marginTop: '10px' }}>
                            <strong style={{ display: 'block', marginBottom: '8px', color: '#ffffff', fontSize: '15px' }}>
                                Registered Office Address:
                            </strong>
                            <span style={{ display: 'block', color: '#d0d0d0', fontSize: '13.5px' }}>
                                225-2A, dilshaj infotech, Block-2,<br />
                                Rolugunta, Visakhapatnam - 531114<br />
                                (Headquarters, Delivery Center, R&D)
                            </span>
                        </div>

                        {/* Decorative Circles */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-90px',
                            right: '-90px',
                            width: '280px',
                            height: '280px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)'
                        }}></div>

                        <div style={{
                            position: 'absolute',
                            bottom: '25px',
                            right: '25px',
                            width: '130px',
                            height: '130px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 100%)'
                        }}></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
