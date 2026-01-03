'use client';

import PageWrapper from '../components/PageWrapper';
import HeroImageStack from '../components/sections/HeroImageStack';

export default function TestAnimationPage() {
    return (
        <PageWrapper>
            <div style={{ padding: '150px 0', background: '#fafafa' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#000' }}>GSAP Image Stack Animation</h1>
                    <p style={{ fontSize: '18px', color: '#666' }}>Testing the fluid, premium rotating card effect.</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <HeroImageStack />
                </div>
            </div>
        </PageWrapper>
    );
}
