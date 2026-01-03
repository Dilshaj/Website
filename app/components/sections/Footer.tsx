'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        {/* Top Section - "Lets Connect there" */}
        <div className="footer-top">
          <div className="footer-content">
            <div className="footer-header">
              <h2 className="footer-title">Lets Connect there</h2>
              <Link
                href="/#contact"
                className="connect-button"
                style={{
                  background: '#8b5cf6',
                  backgroundColor: '#8b5cf6',
                  color: '#ffffff',
                  padding: '18px 48px',
                  borderRadius: '50px',
                  fontSize: '22px',
                  fontWeight: '700',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)'
                }}
              >
                Connect
                <i className="ph ph-arrow-up-right" style={{ fontSize: '20px' }}></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="footer-separator"></div>

        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-content">
            <div className="footer-grid">

              {/* Left Column - Company Info */}
              <div className="footer-column footer-about">

                <img src="/img/drlogo.png" alt="Dilshaj Infotech" className="footer-logo" />

                <p className="footer-description">
                  Dilshaj Infotech is a next-generation global technology company building high-performance digital products, intelligent platforms, and scalable solutions. We focus on quality, innovation, and speed to deliver secure, future-ready technology that drives real impact.
                </p>
              </div>

              {/* Navigation Column */}
              <div className="footer-column">
                <h3 className="footer-column-title">Navigation</h3>
                <ul className="footer-links">
                  <li><Link href="/" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>Home</Link></li>
                  <li><Link href="/about" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>About Us</Link></li>
                  <li><Link href="/services" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>Service</Link></li>
                  <li><Link href="/projects" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>Projects</Link></li>
                  <li><Link href="/#contact" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>Contact</Link></li>
                </ul>
              </div>

              {/* Contact Column */}
              <div className="footer-column">
                <h3 className="footer-column-title">Contact</h3>
                <ul className="footer-contact">
                  <li><a href="tel:+918977272783" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>+91 8977272783</a></li>
                  <li><a href="mailto:dilshajinfotech.it@gmail.com" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>dilshajinfotech.it@gmail.com</a></li>
                  <li>
                    <span style={{ color: '#fff', fontSize: '18px' }}>Rolugunta, Narsapatnam,<br />Visakhapatnam, Andhra Pradesh</span>
                  </li>
                </ul>
              </div>

              {/* Newsletter Column */}
              <div className="footer-column">
                <h3 className="footer-column-title">Get the latest information</h3>

                <form className="newsletter-form">
                  <div className="newsletter-input-wrapper">
                    <input type="email" placeholder="Email Address" className="newsletter-input" suppressHydrationWarning />
                    <button type="submit" className="newsletter-button" suppressHydrationWarning>
                      <i className="ph-fill ph-paper-plane-tilt" style={{ fontSize: '24px', color: 'white' }}></i>
                    </button>
                  </div>
                </form>

                <div className="social-icons">
                  <a href="#" aria-label="Facebook">
                    <i className="ph-fill ph-facebook-logo"></i>
                  </a>
                  <a href="#" aria-label="YouTube">
                    <i className="ph-fill ph-youtube-logo"></i>
                  </a>
                  <a href="#" aria-label="WhatsApp">
                    <i className="ph-fill ph-whatsapp-logo"></i>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <i className="ph-fill ph-instagram-logo"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
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
          <div className="footer-content">
            <div className="footer-copyright">
              <p>Copyright© 2025 Dilshaj Infotech. All Rights Reserved.</p>
              <div className="footer-legal">
                <Link href="#terms">User Terms & Conditions</Link>
                <span>|</span>
                <Link href="#privacy">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer-container {
          background: #0b0d17 url('/footer.png') center/cover no-repeat !important;
          border-radius: 50px 50px 0 0 !important;
          margin-top: 0 !important;
          position: relative !important;
          overflow: hidden !important;
          color: white !important;
          padding-bottom: 40px !important;
        }

        .footer-content {
          position: relative !important;
          z-index: 10 !important;
          max-width: 1320px !important;
          margin: 0 auto !important;
          padding: 0 60px !important;
        }

        .footer-top {
          padding: 100px 0 60px 0 !important;
        }

        .footer-header {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 30px !important;
        }

        .footer-title {
          font-size: 72px !important;
          font-weight: 800 !important;
          color: white !important;
          margin: 0 !important;
          letter-spacing: -0.03em !important;
          font-family: var(--font-outfit), sans-serif !important;
        }

        .connect-button {
          display: inline-flex !important;
          align-items: center !important;
          gap: 12px !important;
          padding: 18px 48px !important;
          background-color: #8b5cf6 !important;
          background: #8b5cf6 !important;
          color: #ffffff !important;
          border-radius: 50px !important;
          font-size: 22px !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3) !important;
          border: none !important;
          white-space: nowrap !important;
        }

        .connect-button:hover {
          transform: translateY(-3px) !important;
          background: #7c3aed !important;
          box-shadow: 0 15px 35px rgba(139, 92, 246, 0.4) !important;
        }

        .footer-separator {
          height: 1px !important;
          background: rgba(255, 255, 255, 0.12) !important;
          margin: 0 60px !important;
        }

        .footer-main {
          padding: 80px 0 !important;
        }

        .footer-grid {
          display: grid !important;
          grid-template-columns: 1.2fr 0.8fr 0.9fr 1.1fr !important;
          gap: 60px !important;
        }

        .footer-logo {
          width: 100% !important;
          height: auto !important;
          max-width: 260px !important;
          display: block !important;
          margin-bottom: 35px !important;
        }

        .footer-description {
          font-size: 19px !important;
          line-height: 1.8 !important;
          color: rgba(255, 255, 255, 0.9) !important;
          margin: 0 !important;
          max-width: 380px !important;
        }

        .footer-column-title {
          font-size: 26px !important;
          font-weight: 700 !important;
          color: #c084fc !important;
          margin: 0 0 35px 0 !important;
          letter-spacing: 0.01em !important;
        }

        .footer-links,
        .footer-contact {
          list-style: none !important;
          padding: 0 !important;
          margin: 0 !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 18px !important;
        }

        .footer-links li a,
        .footer-contact li a,
        .footer-contact li span {
          color: #ffffff !important;
          text-decoration: none !important;
          font-size: 20px !important;
          font-weight: 500 !important;
          transition: all 0.3s ease !important;
          display: inline-block !important;
        }

        .footer-links li a:hover,
        .footer-contact li a:hover {
          color: #c084fc !important;
          transform: translateX(6px) !important;
        }

        .newsletter-form {
          margin-bottom: 30px !important;
        }

        .newsletter-input-wrapper {
          position: relative !important;
          display: flex !important;
          align-items: center !important;
        }

        .newsletter-input {
          width: 100% !important;
          padding: 18px 24px !important;
          padding-right: 70px !important;
          background: #ffffff !important;
          color: #111111 !important;
          border: none !important;
          border-radius: 14px !important;
          font-size: 17px !important;
          outline: none !important;
          transition: all 0.3s ease !important;
        }

        .newsletter-button {
          position: absolute !important;
          right: 5px !important;
          top: 5px !important;
          bottom: 5px !important;
          width: 58px !important;
          background: #8b5cf6 !important;
          border: none !important;
          border-radius: 12px !important;
          cursor: pointer !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.3s ease !important;
        }

        .newsletter-button:hover {
          background: #7c3aed !important;
          transform: scale(1.02) !important;
        }

        .social-icons {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
        }

        .social-icons a {
          color: white !important;
          font-size: 32px !important;
          transition: all 0.3s ease !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .social-icons a:hover {
          color: #c084fc !important;
          transform: translateY(-3px) !important;
        }

        .footer-bottom {
          padding: 40px 0 !important;
          margin-top: 20px !important;
        }

        .footer-copyright {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 20px !important;
        }

        .footer-copyright p {
          color: rgba(255, 255, 255, 0.7) !important;
          font-size: 17px !important;
          margin: 0 !important;
        }

        .footer-legal {
          display: flex !important;
          align-items: center !important;
          gap: 20px !important;
          font-size: 17px !important;
        }

        .footer-legal a {
          color: rgba(255, 255, 255, 0.7) !important;
          text-decoration: none !important;
          transition: color 0.3s ease !important;
        }

        .footer-legal a:hover {
          color: white !important;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .footer-title { font-size: 54px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-about { grid-column: 1 / -1 !important; margin-bottom: 40px !important; }
        }

        @media (max-width: 768px) {
          .footer-header { flex-direction: column !important; align-items: flex-start !important; }
          .footer-title { font-size: 42px !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-content { padding: 0 24px !important; }
          .footer-copyright { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </>
  );
}
