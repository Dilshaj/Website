'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Career', path: '/careers' },
        { name: 'Contact Us', path: '/contact-us' },
    ];

    return (
        <>
            {/* Header */}
            <header className="header">
                <div className="header-container">
                    {/* Logo */}
                    <div className="logo">
                        <Link href="/">
                            <img src="/img/drlogo.png" alt="Dilshaj Infotech" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="navbar">
                        <ul className="nav-links">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        className={pathname === item.path ? 'active' : ''}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right Side Button */}
                    <a
                        href="https://api.whatsapp.com/send?phone=918977272783&text=Hello."
                        className="header-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Let's Talk
                    </a>

                    {/* Mobile Menu Toggle */}
                    <div
                        className="mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <i className={isMobileMenuOpen ? 'ph ph-x' : 'ph ph-list'}></i>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <nav>
                            <ul>
                                {navItems.map((item) => (
                                    <li key={item.path}>
                                        <Link
                                            href={item.path}
                                            className={pathname === item.path ? 'active' : ''}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://api.whatsapp.com/send?phone=918977272783&text=Hello."
                                className="mobile-cta"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Let's Talk
                            </a>
                        </nav>
                    </div>
                )}
            </header>

            <style jsx>{`
                /* HEADER */
                .header {
                    background: transparent;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    padding: 30px 0;
                    width: 100%;
                }

                .header-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                    padding: 0 100px;
                    width: 100%;
                    max-width: 1800px;
                    margin: 0 auto;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    z-index: 10;
                }

                .logo img {
                    height: 70px;
                    width: auto;
                    transition: transform 0.3s ease;
                }

                .logo a:hover img {
                    transform: scale(1.05);
                }

                /* Centered Pill Navigation */
                .navbar {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                }

                .nav-links {
                    display: flex;
                    gap: 50px;
                    background: rgba(255, 255, 255, 0.4);
                    padding: 15px 50px;
                    border-radius: 50px;
                    border: 1px solid #a5b4fc;
                    align-items: center;
                    backdrop-filter: blur(5px);
                    white-space: nowrap;
                    list-style: none;
                    margin: 0;
                }

                .nav-links li a {
                    font-weight: 500;
                    font-size: 1.05rem;
                    color: #4A4A4A;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    padding: 8px 24px;
                    border-radius: 20px;
                    text-decoration: none;
                    display: inline-block;
                }

                .nav-links li a:hover {
                    color: #6366f1;
                }

                .nav-links li a.active {
                    color: #6366f1;
                    background: #eef2ff;
                    font-weight: 600;
                }

                /* Right Side Button */
                .header-btn {
                    background: transparent;
                    color: #1A1A1A;
                    padding: 12px 35px;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 1.1rem;
                    transition: all 0.3s ease;
                    border: 1px solid #1A1A1A;
                    text-decoration: none;
                    display: inline-block;
                }

                .header-btn:hover {
                    background: #6366f1;
                    border-color: #6366f1;
                    color: #fff;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
                }

                /* Mobile Toggle */
                .mobile-toggle {
                    display: none;
                    font-size: 1.8rem;
                    cursor: pointer;
                    color: #1A1A1A;
                    z-index: 10;
                }

                /* Mobile Menu */
                .mobile-menu {
                    display: none;
                    position: fixed;
                    top: 110px;
                    left: 0;
                    right: 0;
                    background: #FFF5FA;
                    padding: 20px 30px;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                }

                .mobile-menu nav ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .mobile-menu nav ul li a {
                    font-size: 1.1rem;
                    font-weight: 500;
                    color: #1A1A1A;
                    text-decoration: none;
                    display: block;
                    padding: 10px 15px;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }

                .mobile-menu nav ul li a:hover,
                .mobile-menu nav ul li a.active {
                    background: rgba(0, 123, 255, 0.1);
                    color: #007BFF;
                }

                .mobile-cta {
                    display: block;
                    margin-top: 20px;
                    background: transparent;
                    color: #1A1A1A;
                    padding: 12px 35px;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 1.1rem;
                    border: 1px solid #1A1A1A;
                    text-decoration: none;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .mobile-cta:hover {
                    background: #007BFF;
                    border-color: #007BFF;
                    color: #fff;
                }

                /* Responsive Design */
                @media (max-width: 1200px) {
                    .nav-links {
                        gap: 30px;
                        padding: 12px 35px;
                    }

                    .header-container {
                        padding: 0 30px;
                    }
                }

                @media (max-width: 1024px) {
                    .navbar {
                        display: none;
                    }

                    .header-btn {
                        display: none;
                    }

                    .mobile-toggle {
                        display: block;
                    }

                    .mobile-menu {
                        display: block;
                    }

                    .logo img {
                        height: 60px;
                    }
                }

                @media (max-width: 768px) {
                    .header-container {
                        padding: 0 20px;
                    }

                    .logo img {
                        height: 50px;
                    }

                    .mobile-menu {
                        top: 80px;
                    }
                }

                @media (max-width: 480px) {
                    .nav-links li a,
                    .mobile-menu nav ul li a {
                        font-size: 1rem;
                    }

                    .header-btn,
                    .mobile-cta {
                        font-size: 1rem;
                        padding: 10px 28px;
                    }
                }
            `}</style>
        </>
    );
}
