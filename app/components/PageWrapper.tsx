'use client';

import Navbar from './Navbar';
import Footer from './sections/Footer';
import ClientScripts from './ClientScripts';
import ThemeSwitcher from './ThemeSwitcher';
import LegacyElements from './LegacyElements';

interface PageWrapperProps {
    children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
    return (
        <>
            <ClientScripts />
            <ThemeSwitcher />
            <LegacyElements />

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


            <Navbar />

            {/* Page Content Start */}
            <main id="mxd-page-content" className="mxd-page-content">
                {children}

                <Footer />
            </main>

            {/* To Top Button */}
            <a href="#0" id="to-top" className="btn btn-to-top slide-up anim-no-delay">
                <i className="ph ph-arrow-up"></i>
            </a>
        </>
    );
}
