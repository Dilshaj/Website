'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
    useEffect(() => {
        // Failsafe loader timeout - ensures loader always hides
        let loaderHidden = false;

        const forceHideLoader = () => {
            if (loaderHidden) return;
            loaderHidden = true;

            const loader = document.getElementById('loader');
            const fadeItems = document.querySelectorAll('.loading__fade');

            if (loader) {
                // Force hide the loader with smooth animation
                loader.style.transition = 'opacity 0.5s ease-out';
                loader.style.opacity = '0';

                setTimeout(() => {
                    loader.classList.add('loaded');
                    loader.style.display = 'none';
                }, 500);
            }

            // Show all fade items
            fadeItems.forEach(item => {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.display = 'block';
            });
        };

        // Maximum timeout: force hide after 4 seconds
        const maxTimeout = setTimeout(() => {
            console.log('Loader timeout - forcing hide');
            forceHideLoader();
        }, 4000);

        // Listen for the original loader completion
        const checkLoaderComplete = setInterval(() => {
            const loader = document.getElementById('loader');
            if (loader && loader.classList.contains('loaded')) {
                clearTimeout(maxTimeout);
                clearInterval(checkLoaderComplete);
                loaderHidden = true;
            }
        }, 100);

        // Cleanup
        return () => {
            clearTimeout(maxTimeout);
            clearInterval(checkLoaderComplete);
        };
    }, []);

    useEffect(() => {
        // Initialize counters
        if (typeof window !== 'undefined' && (window as any).countUp) {
            const { CountUp } = (window as any).countUp;
            const optionsPlus = { suffix: '+' };
            const optionsPercent = { suffix: '%' };

            const statsCounter1 = new CountUp("stats-counter-1", 50, optionsPlus);
            const statsCounter2 = new CountUp("stats-counter-2", 80, optionsPercent);
            const statsCounter3 = new CountUp("stats-counter-3", 5, optionsPlus);
            const statsCounter4 = new CountUp("stats-counter-4", 70, optionsPlus);

            statsCounter1.start();
            statsCounter2.start();
            statsCounter3.start();
            statsCounter4.start();
        }

        // Toggle course function
        (window as any).toggleCourse = function (id: string) {
            const allSections = document.querySelectorAll('.mxd-res-list__descr[id]');
            allSections.forEach(sec => {
                const section = sec as HTMLElement;
                if (section.id !== id) {
                    section.style.display = "none";
                }
            });

            const selected = document.getElementById(id);
            if (selected) {
                if (selected.style.display === "none" || selected.style.display === "") {
                    selected.style.display = "block";
                } else {
                    selected.style.display = "none";
                }
            }
        };

        // Video popup functionality
        const playBtn = document.getElementById("promo-play");
        const popup = document.getElementById("video-popup");
        const popupVideo = document.getElementById("popup-video") as HTMLVideoElement;
        const closeBtn = document.getElementById("close-popup");

        if (playBtn && popup && popupVideo && closeBtn) {
            // When play button clicked
            playBtn.addEventListener("click", () => {
                if (popup) popup.classList.add("active");
                popupVideo.currentTime = 0;
                popupVideo.muted = false;
                popupVideo.play();
            });

            // Close when clicking on close button
            closeBtn.addEventListener("click", closePopup);

            // Close when clicking outside popup video
            popup.addEventListener("click", (e) => {
                if (e.target === popup) {
                    closePopup();
                }
            });

            function closePopup() {
                if (popup) popup.classList.remove("active");
                popupVideo.pause();
            }
        }
    }, []);

    return null;
}
