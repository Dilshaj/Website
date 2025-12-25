'use client';

import HeroSection from './components/sections/HeroSection';
import ParallaxDivider from './components/sections/ParallaxDivider';
import AboutSection from './components/sections/AboutSection';
import VisionMissionSection from './components/sections/VisionMissionSection';
import StatisticsSection from './components/sections/StatisticsSection';
import MarqueeText from './components/sections/MarqueeText';
import ProjectsSection from './components/sections/ProjectsSection';
import FeaturesPromo from './components/sections/FeaturesPromo';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import ClientScripts from './components/ClientScripts';
import ThemeSwitcher from './components/ThemeSwitcher';

export default function HomePage() {
  return (
    <>
      <ClientScripts />
      <ThemeSwitcher />

      {/* Loader Start */}
      <div id="loader" className="loader">
        <div className="loader__wrapper">
          <div className="loader__content">
            <div className="loader__count">
              <span className="count__text">0</span>
              <span className="count__percent">%</span>
            </div>
          </div>
        </div>
      </div>
      {/* Loader End */}

      {/* Menu & Menu Hamburger Start */}
      <nav className="mxd-nav__wrap" data-lenis-prevent="">
        <div className="mxd-nav__contain loading__fade" style={{ display: 'none' }}>
          <a href="#0" className="mxd-nav__hamburger">
            <div className="hamburger__base"></div>
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
          </a>
        </div>

        <div className="mxd-menu__wrapper">
          <div className="mxd-menu__base"></div>
          <div className="mxd-menu__contain">
            <div className="mxd-menu__inner">
              <div className="mxd-menu__left">
                <p className="mxd-menu__caption menu-fade-in">🦄 Innovative design<br />and cutting-edge development</p>
                <div className="main-menu">
                  <nav className="main-menu__content">
                    <ul id="main-menu" className="main-menu__accordion">
                      <li className="main-menu__item">
                        <a className="main-menu__link btn btn-anim" href="#contact.html">
                          <span className="btn-caption">Contact</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="mxd-menu__right">
                <div className="menu-promo">
                  <div className="menu-promo__content">
                    <p className="menu-promo__caption menu-fade-in">Dilshaj Infotech is a future focused technology company offering training, digital solutions, and innovative products.</p>
                    <div className="menu-promo__video">
                      <video className="menu-video" id="inner-video" preload="auto" autoPlay loop muted poster="/video/540x310_video-01.webp">
                        <source type="video/mp4" src="/video/video1.mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mxd-menu__data menu-fade-in">
                <p className="t-xsmall">
                  Made with <i className="ph-fill ph-heart t-additional"></i> by <a className="no-effect" href="#" target="_blank">Dilshaj Infotech</a>
                </p>
                <p className="t-xsmall">
                  <i className="ph ph-copyright"></i> 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Menu & Menu Hamburger End */}

      {/* Header Start */}
      <header id="header" className="mxd-header">
        <div className="mxd-header__logo loading__fade">
          <a href="#index-main.html" className="mxd-logo">
            <img src="/img/drlogo.png" style={{ width: '185px', maxWidth: '100%', height: 'auto' }} alt="DR Logo" />
          </a>
        </div>
        <div className="mxd-header__controls loading__fade">
          <button id="color-switcher" className="mxd-color-switcher" type="button" role="switch" aria-label="light/dark mode" aria-checked="true" suppressHydrationWarning></button>
          <a className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right-up" href="https://api.whatsapp.com/send?phone=918977272783&text=Hello.">
            <span className="btn-caption">Say Hello</span>
            <i className="ph-bold ph-arrow-up-right" style={{ display: 'block' }}></i>
          </a>
        </div>
      </header>
      {/* Header End */}

      {/* Page Content Start */}
      <main id="mxd-page-content" className="mxd-page-content">
        <HeroSection />
        <ParallaxDivider />
        <AboutSection />
        <VisionMissionSection />
        <StatisticsSection />
        <MarqueeText />
        <ProjectsSection />
        <FeaturesPromo />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      {/* Page Content End */}

      <Footer />

      {/* To Top Button */}
      <a href="#0" id="to-top" className="btn btn-to-top slide-up anim-no-delay">
        <i className="ph ph-arrow-up"></i>
      </a>
    </>
  );
}
