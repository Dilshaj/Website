'use client';

import { useEffect } from 'react';

export default function ThemeSwitcher() {
    useEffect(() => {
        try {
            // Initialize theme from localStorage or default to dark
            const savedTheme = localStorage.getItem('theme') || 'dark';
            document.documentElement.setAttribute('data-theme', savedTheme);

            // Add click handler for color switcher - only if element exists
            const colorSwitcher = document.getElementById('color-switcher');

            // If the color-switcher element doesn't exist, silently return
            if (!colorSwitcher) {
                return;
            }

            const handleThemeToggle = () => {
                try {
                    const currentTheme = document.documentElement.getAttribute('data-theme');
                    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

                    document.documentElement.setAttribute('data-theme', newTheme);
                    localStorage.setItem('theme', newTheme);

                    // Update aria-checked attribute
                    colorSwitcher.setAttribute('aria-checked', newTheme === 'dark' ? 'true' : 'false');
                } catch (error) {
                    // Silently handle errors
                    console.debug('Theme toggle error:', error);
                }
            };

            colorSwitcher.addEventListener('click', handleThemeToggle);

            // Cleanup
            return () => {
                try {
                    if (colorSwitcher) {
                        colorSwitcher.removeEventListener('click', handleThemeToggle);
                    }
                } catch (error) {
                    // Silently handle cleanup errors
                    console.debug('Theme cleanup error:', error);
                }
            };
        } catch (error) {
            // Silently handle any initialization errors
            console.debug('ThemeSwitcher initialization error:', error);
        }
    }, []);

    return null; // This component doesn't render anything
}
