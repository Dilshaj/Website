'use client';

import PageWrapper from './components/PageWrapper';
import HeroSection from './components/sections/HeroSection';
import MarqueeFeaturesSection from './components/sections/MarqueeFeaturesSection';
import AboutUSSection from './components/sections/AboutUSSection';
import AboutSection from './components/sections/AboutSection';
import VisionMissionSection from './components/sections/VisionMissionSection';
import StatisticsSection from './components/sections/StatisticsSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ChoosePathSection from './components/sections/ChoosePathSection';
import ProjectsSection from './components/sections/ProjectsSection';
import AlumniSection from './components/sections/AlumniSection';
import PartnerSection from './components/sections/PartnerSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';

export default function HomePage() {
    return (
        <PageWrapper>
            <HeroSection />
            <MarqueeFeaturesSection />
            <AboutUSSection />
            <AboutSection />
            <VisionMissionSection />
            <StatisticsSection />
            <ProjectsSection />
            <ServicesSection />
            <PortfolioSection />
            <ChoosePathSection />
            <AlumniSection />
            <PartnerSection />
            <FAQSection />
            <ContactSection />
        </PageWrapper>
    );
}
