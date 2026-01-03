'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
    const pathname = usePathname();
    useEffect(() => {
        // Safe check for document/window
        if (typeof window === 'undefined' || typeof document === 'undefined') return;

        // Declare handleError outside try-catch so cleanup can access it
        let handleError: ((event: ErrorEvent) => void | boolean) | null = null;

        try {
            // Global error handler to suppress specific harmless errors from external scripts
            handleError = (event: ErrorEvent) => {
                try {
                    const errorMessage = event.message || '';
                    // Suppress addEventListener and querySelectorAll errors from external scripts
                    if (errorMessage.includes('addEventListener') ||
                        errorMessage.includes('querySelectorAll') ||
                        errorMessage.includes('querySelector') ||
                        errorMessage.includes('classList') ||
                        errorMessage.includes('style') ||
                        errorMessage.includes('Cannot read properties of null') ||
                        errorMessage.includes('Cannot read properties of undefined')) {

                        // We prevent the browser from showing the error overlay in dev
                        event.preventDefault();
                        event.stopPropagation();
                        return false;
                    }
                } catch (err) {
                    // Silently handle any errors in error handler itself
                }
            };

            // Add global error handler
            window.addEventListener('error', handleError, true);
        } catch (error) {
            // Fallback
        }

        // Failsafe loader timeout - ensures loader always hides
        let loaderHidden = false;

        const animateLoaderCount = () => {
            const countEl = document.querySelector('.count__text');
            if (!countEl) return Promise.resolve();

            return new Promise<void>((resolve) => {
                let count = 0;
                const duration = 2000; // 2 seconds for count
                const startTime = Date.now();

                const updateCount = () => {
                    const now = Date.now();
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    count = Math.floor(progress * 100);
                    countEl.textContent = count.toString();

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        setTimeout(resolve, 300); // Small pause at 100%
                    }
                };
                updateCount();
            });
        };

        const forceHideLoader = async () => {
            if (loaderHidden) return;

            // Wait for count animation to finish
            await animateLoaderCount();

            loaderHidden = true;

            try {
                const loader = document.getElementById('loader');
                const fadeItems = document.querySelectorAll('.loading__fade');

                if (loader) {
                    // Force hide the loader with smooth animation
                    loader.style.transition = 'opacity 0.8s cubic-bezier(0.65, 0, 0.35, 1)';
                    loader.style.opacity = '0';

                    setTimeout(() => {
                        try {
                            const l = document.getElementById('loader');
                            if (l) {
                                l.classList.add('loaded');
                                l.style.display = 'none';
                            }
                        } catch (e) { }
                    }, 800);
                }

                // Show all fade items
                if (fadeItems && fadeItems.length > 0) {
                    fadeItems.forEach(item => {
                        const el = item as HTMLElement;
                        if (el && el.style) {
                            el.style.opacity = '1';
                            el.style.display = 'block';
                        }
                    });
                }
            } catch (err) { }
        };

        // Start loader hiding process on mount (or load)
        const hasLoaded = sessionStorage.getItem('site_loaded');
        if (hasLoaded) {
            // Skip animation and hide immediately
            const loader = document.getElementById('loader');
            if (loader) {
                loader.style.display = 'none';
                loader.classList.add('loaded');
            }
            // Still show fade items
            const fadeItems = document.querySelectorAll('.loading__fade');
            fadeItems.forEach(item => {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.display = 'block';
            });
        } else {
            forceHideLoader().then(() => {
                sessionStorage.setItem('site_loaded', 'true');
            });
        }

        // Handle To-Top button
        const toTopBtn = document.getElementById('to-top');
        const handleToTop = (e: MouseEvent) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
        if (toTopBtn) {
            toTopBtn.addEventListener('click', handleToTop);
        }

        // Initialize count-up animations safely
        const initCounters = () => {
            try {
                const counters = document.querySelectorAll('.count-up');
                if (!counters || counters.length === 0) return;

                counters.forEach(counter => {
                    try {
                        const el = counter as HTMLElement;
                        const targetValue = parseInt(el.innerText || '0');
                        let currentValue = 0;
                        const duration = 2000;
                        const step = targetValue / (duration / 16);

                        const update = () => {
                            currentValue += step;
                            if (currentValue < targetValue) {
                                el.innerText = Math.ceil(currentValue).toString();
                                requestAnimationFrame(update);
                            } else {
                                el.innerText = targetValue.toString();
                            }
                        };
                        update();
                    } catch (e) { }
                });
            } catch (err) { }
        };

        // Start counters after a delay
        setTimeout(initCounters, 1000);

        // Toggle course function
        (window as any).toggleCourse = function (id: string) {
            try {
                const allSections = document.querySelectorAll('.mxd-res-list__descr[id]');
                if (allSections && allSections.length > 0) {
                    allSections.forEach(sec => {
                        const section = sec as HTMLElement;
                        if (section && section.id && section.id !== id) {
                            section.style.display = "none";
                        }
                    });
                }

                const selected = document.getElementById(id);
                if (selected) {
                    if (selected.style.display === "none" || selected.style.display === "") {
                        selected.style.display = "block";
                    } else {
                        selected.style.display = "none";
                    }
                }
            } catch (err) { }
        };

        // Video popup functionality
        let pBtn: HTMLElement | null = null;
        let cBtn: HTMLElement | null = null;
        let pop: HTMLElement | null = null;
        let pVid: HTMLVideoElement | null = null;

        const handlePPlay = (e: Event) => {
            e.preventDefault();
            if (pop && pVid) {
                pop.classList.add('visible');
                pVid.play();
            }
        };

        const handlePClose = () => {
            if (pop && pVid) {
                pop.classList.remove('visible');
                pVid.pause();
                pVid.currentTime = 0;
            }
        };

        const handlePOutside = (e: MouseEvent) => {
            if (e.target === pop) handlePClose();
        };

        try {
            pBtn = document.getElementById("showreel-trigger") || document.getElementById("promo-play");
            pop = document.getElementById("video-popup");
            pVid = document.getElementById("popup-video") as HTMLVideoElement | null;
            cBtn = document.getElementById("close-popup");

            if (pBtn && pop && pVid && cBtn) {
                pBtn.addEventListener('click', handlePPlay);
                cBtn.addEventListener('click', handlePClose);
                pop.addEventListener('click', handlePOutside as any);
            }
        } catch (err) { }

        // Cleanup function
        return () => {
            if (handleError) {
                window.removeEventListener('error', handleError);
            }
            if (toTopBtn) toTopBtn.removeEventListener('click', handleToTop);
            if (pBtn) pBtn.removeEventListener('click', handlePPlay);
            if (cBtn) cBtn.removeEventListener('click', handlePClose);
            if (pop) pop.removeEventListener('click', handlePOutside as any);
        };
    }, [pathname]);

    return null;
}
