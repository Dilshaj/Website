'use client';

import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    // Add any animations if needed
  }, []);

  return (
    <>
      <footer className="new-footer">
        {/* Top Section - "Lets Connect there" */}
        <div className="footer-top">
          <div className="footer-container">
            <h2 className="footer-title">Lets Connect there</h2>
            <a href="#contact" className="connect-btn">
              Connect
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>

        {/* Separator Line */}
        <div className="footer-separator"></div>

        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-container">
            <div className="footer-grid">
              {/* Left Column - Company Info */}
              <div className="footer-col footer-col-1">
                <div className="footer-logo-box">
                  <img src="/img/drlogo.png" alt="Dilshaj Infotech" className="footer-logo" />
                </div>
                <p className="footer-description">
                  Dilshaj Infotech is a next-generation global technology company building high-performance digital products, intelligent platforms, and scalable solutions. We focus on quality, innovation, and speed to deliver secure, future-ready technology that drives real impact.
                </p>
              </div>

              {/* Middle Column - Navigation */}
              <div className="footer-col footer-col-2">
                <h3 className="footer-heading">Navigation</h3>
                <ul className="footer-links">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#service">Service</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              {/* Contact Column */}
              <div className="footer-col footer-col-3">
                <h3 className="footer-heading">Contact</h3>
                <ul className="footer-contact">
                  <li>
                    <a href="tel:+918977272783">+91 8977272783</a>
                  </li>
                  <li>
                    <a href="mailto:dilshajinfotech.it@gmail.com">dilshajinfotech.it@gmail.com</a>
                  </li>
                  <li>
                    <span>Rolugunta, Narsapatnam,<br />Visakhapatnam, Andhra Pradesh</span>
                  </li>
                </ul>
              </div>

              {/* Right Column - Newsletter */}
              <div className="footer-col footer-col-4">
                <h3 className="footer-heading">Get the latest information</h3>
                <form className="newsletter-form">
                  <div className="input-wrapper">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="newsletter-input"
                      suppressHydrationWarning
                    />
                    <button type="submit" className="newsletter-btn" suppressHydrationWarning>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>›</span>
                    </button>
                  </div>
                </form>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <i className="ph-fill ph-facebook-logo"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="YouTube">
                    <i className="ph-fill ph-youtube-logo"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="WhatsApp">
                    <i className="ph-fill ph-whatsapp-logo"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <i className="ph-fill ph-instagram-logo"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <i className="ph-fill ph-twitter-logo"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="footer-separator"></div>

        {/* Bottom Section - Copyright */}
        <div className="footer-bottom">
          <div className="footer-container">
            <div className="footer-bottom-content">
              <p className="copyright">Copyright© 2023 Jayesh. All Rights Reserved.</p>
              <div className="footer-bottom-links">
                <a href="#terms">User Terms & Conditions</a>
                <span className="separator">|</span>
                <a href="#privacy">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .new-footer {
          background: #000000;
          color: #ffffff;
          position: relative;
          overflow: hidden;
          border-radius: 40px 40px 0 0;
          margin-top: 0;
        }

        .footer-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 60px;
        }

        /* Top Section */
        .footer-top {
          padding: 70px 0 50px;
        }

        .footer-top .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-title {
          font-size: 64px;
          font-weight: 700;
          margin: 0;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .connect-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 50px;
          font-size: 17px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(139, 92, 246, 0.3);
        }

        .connect-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
        }

        .connect-btn svg {
          width: 18px;
          height: 18px;
        }

        /* Separator */
        .footer-separator {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin: 0 60px;
        }

        /* Main Footer */
        .footer-main {
          padding: 60px 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.2fr 1.8fr;
          gap: 80px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        .footer-logo-box {
          margin-bottom: 28px;
          background: #ffffff;
          padding: 16px 20px;
          border-radius: 16px;
          display: inline-block;
          max-width: 280px;
        }

        .footer-logo {
          height: auto;
          width: 240px;
          display: block;
          object-fit: contain;
        }

        .footer-description {
          font-size: 17px;
          line-height: 1.8;
          color: #e5e7eb;
          margin: 0;
          font-weight: 400;
        }

        /* Headings - Light Purple Color from Image 4 */
        .footer-heading {
          font-size: 19px;
          font-weight: 600;
          margin: 0 0 26px 0;
          color: #a78bfa;
          letter-spacing: 0.3px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-links a {
          color: #d1d5db;
          text-decoration: none;
          font-size: 16px;
          transition: all 0.3s ease;
          display: inline-block;
          font-weight: 400;
        }

        .footer-links a:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-contact a,
        .footer-contact span {
          color: #d1d5db;
          text-decoration: none;
          font-size: 16px;
          line-height: 1.7;
          display: block;
          font-weight: 400;
        }

        .footer-contact a:hover {
          color: #ffffff;
        }

        /* Newsletter - Exact match to Image 2 */
        .newsletter-form {
          margin-bottom: 20px;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .newsletter-input {
          width: 100%;
          padding: 16px 70px 16px 20px;
          background: #ffffff;
          border: none;
          border-radius: 12px;
          color: #1f2937;
          font-size: 16px;
          outline: none;
          transition: all 0.3s ease;
        }

        .newsletter-input::placeholder {
          color: #9ca3af;
        }

        .newsletter-btn {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 56px;
          background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
          border: none;
          border-radius: 0 12px 12px 0;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .newsletter-btn:hover {
          background: linear-gradient(135deg, #7c3aed 0%, #9333ea 100%);
        }

        /* Social Icons - Exact match to Image 2 */
        .social-icons {
          display: flex;
          gap: 0;
          justify-content: space-between;
          width: 100%;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          background: transparent;
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          font-size: 28px;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: #a78bfa;
          transform: translateY(-2px);
        }

        /* Bottom Section - Exact match to Image 1 */
        .footer-bottom {
          padding: 28px 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          margin: 0;
          font-size: 16px;
          color: #d1d5db;
          font-weight: 400;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .footer-bottom-links a {
          color: #d1d5db;
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s ease;
          font-weight: 400;
        }

        .footer-bottom-links a:hover {
          color: #ffffff;
        }

        .separator {
          color: rgba(255, 255, 255, 0.3);
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .footer-container {
            padding: 0 40px;
          }

          .footer-separator {
            margin: 0 40px;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 50px;
          }
        }

        @media (max-width: 768px) {
          .new-footer {
            border-radius: 30px 30px 0 0;
          }

          .footer-container {
            padding: 0 24px;
          }

          .footer-separator {
            margin: 0 24px;
          }

          .footer-top {
            padding: 50px 0 40px;
          }

          .footer-top .footer-container {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }

          .footer-title {
            font-size: 36px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-logo-box {
            margin: 0 auto 24px;
          }

          .footer-description {
            text-align: center;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }

          .social-icons {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .new-footer {
            border-radius: 24px 24px 0 0;
          }

          .footer-title {
            font-size: 32px;
          }

          .connect-btn {
            padding: 14px 28px;
            font-size: 15px;
          }

          .footer-heading {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
