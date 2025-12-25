'use client';

import { useEffect } from 'react';

export default function ThemeSwitcher() {
    useEffect(() => {
        // Initialize theme from localStorage or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Add click handler for color switcher
        const colorSwitcher = document.getElementById('color-switcher');

        if (colorSwitcher) {
            const handleThemeToggle = () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);

                // Update aria-checked attribute
                colorSwitcher.setAttribute('aria-checked', newTheme === 'dark' ? 'true' : 'false');
            };

            colorSwitcher.addEventListener('click', handleThemeToggle);

            // Cleanup
            return () => {
                colorSwitcher.removeEventListener('click', handleThemeToggle);
            };
        }
    }, []);

    return null; // This component doesn't render anything
}
