export default function StatisticsSection() {
    return (
        <div className="mxd-section padding-grid-pre-mtext overflow-hidden">
            <div className="mxd-container grid-container">
                <div className="mxd-block">
                    <div className="mxd-stats-cards">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                {/* Card 1 */}
                                <div className="col-12 col-md-6 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
                                    <div className="mxd-stats-cards__inner align-end bg-accent radius-m padding-4">
                                        <div className="mxd-counter align-end">
                                            <p id="stats-counter-1" className="mxd-counter__number mxd-stats-number opposite">0</p>
                                            <p className="mxd-counter__descr t-140 t-bright opposite">Happy clients who<br />trust my work</p>
                                        </div>
                                        <div className="mxd-stats-cards__btngroup">
                                            <a className="btn btn-anim btn-default btn-outline opposite slide-right-up" href="#about-us.html">
                                                <span className="btn-caption">Studio</span>
                                                <i className="ph-bold ph-arrow-up-right"></i>
                                            </a>
                                        </div>
                                        <div className="mxd-stats-cards__image mxd-stats-cards-image-1">
                                            <img src="/img/mission/woman.png" alt="Illustration" />
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="col-12 col-md-6 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
                                    <div className="mxd-stats-cards__inner align-end bg-base-tint radius-m padding-4">
                                        <div className="mxd-stats-cards__btngroup">
                                            <div className="mxd-avatars">
                                                <div className="mxd-avatars__item">
                                                    <img src="/img/avatars/300x300_ava-02.webp" alt="Avatar" />
                                                </div>
                                                <div className="mxd-avatars__item bg-base-opp">
                                                    <svg className="mxd-avatars__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ enableBackground: 'new 0 0 60 60' }}>
                                                        <path className="icon-star" d="M58.9,28.9c0,0-9.1,0.1-12.1,0c-1.3,0-5.3-0.5-5.3-0.5c-1.7-0.2-3.4-0.7-4.8-1.7c-1.4-1-2.7-2.3-3.6-3.7c-0.8-1.3-1.3-2.7-1.5-4.2c0,0-0.4-3.3-0.5-4.4c-0.2-3.3,0-13.1,0-13.1c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1c0,0,0.2,9.8,0,13.1c0,1.1-0.5,4.4-0.5,4.4c-0.2,1.5-0.6,3-1.5,4.2c-0.9,1.5-2.2,2.7-3.6,3.7s-3,1.5-4.7,1.7c0,0-3.7,0.4-5,0.5c-3.1,0.2-12.5,0-12.5,0C0.5,28.9,0,29.4,0,30s0.5,1.1,1.1,1.1c0,0,9.4-0.2,12.5,0c1.2,0,5,0.5,5,0.5c1.7,0.2,3.3,0.7,4.7,1.7c1.3,0.9,2.4,2,3.3,3.3c1,1.4,1.5,3.1,1.7,4.8c0,0,0.4,3.9,0.5,5.2c0.1,3,0,12.2,0,12.2c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1c0,0-0.1-9.2,0-12.2c0-1.3,0.5-5.2,0.5-5.2c0.2-1.7,0.7-3.4,1.7-4.8c0.9-1.3,2-2.4,3.3-3.3c1.4-1,3.1-1.5,4.8-1.7c0,0,3.9-0.4,5.3-0.5c3-0.1,12.1,0,12.1,0c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1l0,0L58.9,28.9z" />
                                                    </svg>
                                                </div>
                                                <div className="mxd-avatars__item">
                                                    <img src="/img/avatars/300x300_ava-01.webp" alt="Avatar" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mxd-counter align-end">
                                            <p id="stats-counter-2" className="mxd-counter__number mxd-stats-number">0</p>
                                            <p className="mxd-counter__descr t-140 t-bright">Clients come back for<br />a new projects</p>
                                        </div>
                                        <div className="mxd-stats-cards__image mxd-stats-cards-image-2">
                                            <img src="/img/mission/piechart.png" alt="Illustration" />
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="col-12 col-md-6 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
                                    <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                                        <div className="mxd-counter">
                                            <p id="stats-counter-3" className="mxd-counter__number mxd-stats-number">0</p>
                                            <p className="mxd-counter__descr t-140 t-bright">Years of professional experience in designing digital products</p>
                                        </div>
                                        <div className="mxd-stats-cards__btngroup">
                                            <a className="btn btn-anim btn-default btn-outline slide-right-down" href="#contact.html">
                                                <span className="btn-caption">Start New Project</span>
                                                <i className="ph-bold ph-arrow-down-right"></i>
                                            </a>
                                        </div>
                                        <div className="mxd-stats-cards__image mxd-stats-cards-image-3">
                                            <img src="/img/mission/project.png" alt="Illustration" />
                                        </div>
                                    </div>
                                </div>

                                {/* Card 4 */}
                                <div className="col-12 col-md-6 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
                                    <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                                        <div className="mxd-counter">
                                            <p id="stats-counter-4" className="mxd-counter__number mxd-stats-number">0</p>
                                            <p className="mxd-counter__descr t-140 t-bright">Successfully<br />completed projects</p>
                                        </div>
                                        <div className="mxd-stats-cards__btngroup">
                                            <a className="btn btn-anim btn-default btn-outline slide-right-up" href="#works-simple.html">
                                                <span className="btn-caption">Works</span>
                                                <i className="ph-bold ph-arrow-up-right"></i>
                                            </a>
                                        </div>
                                        <div className="mxd-stats-cards__image mxd-stats-cards-image-4">
                                            <img src="/img/mission/innovation.png" alt="Illustration" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
