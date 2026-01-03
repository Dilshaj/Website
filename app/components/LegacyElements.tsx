'use client';

/**
 * LegacyElements Component
 * 
 * This component renders invisible DOM elements that are expected by legacy JavaScript 
 * files (app.min.js, libs.min.js). These scripts often use direct DOM manipulation 
 * (document.querySelector) without null checks. By providing these elements, we 
 * prevent the "Cannot read properties of null" errors completely.
 */
export default function LegacyElements() {
    return (
        <div
            id="legacy-elements-safety-net"
            aria-hidden="true"
            style={{
                position: 'absolute',
                width: 0,
                height: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: -9999,
                visibility: 'hidden'
            }}
        >
            {/* Elements expected by app.min.js */}
            <div id="color-switcher" className="color-switcher"></div>
            <div className="btn-to-top"></div>
            <div className="loading-wrap">
                <div className="loading__item"></div>
            </div>
            <div className="loader__count">
                <span className="count__text">0</span>
            </div>
            <div className="marquee-item"></div>
            <div className="reveal-type"></div>
            <div className="anim-uni-in-up"></div>
            <div id="typed"></div>
            <div id="typed-strings"></div>
            <div className="mxd-header"></div>
            <div className="mxd-nav__wrap">
                <div className="mxd-nav__hamburger"></div>
            </div>
            <div id="main-menu" className="main-menu">
                <div className="main-menu__toggle"></div>
            </div>
            <form className="notify-form"></form>
            <form id="contact-form"></form>
            <div className="parallax-img"></div>
            <div className="stack-item"></div>
            <div className="stack-offset"></div>
            <div className="loading__fade"></div>
            <div className="mxd-pinned">
                <div className="mxd-pinned__text-item"></div>
                <div className="mxd-pinned__img-item"></div>
            </div>
            <div className="stack-wrapper"></div>
            <div className="btn-anim">
                <div className="btn-caption"></div>
            </div>
            <div className="reveal-in-up"></div>
            <div id="showreel-trigger"></div>
            <div id="promo-play"></div>
            <div id="video-popup"></div>
            <video id="popup-video"></video>
            <div id="close-popup"></div>
        </div>
    );
}
