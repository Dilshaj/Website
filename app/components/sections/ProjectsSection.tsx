export default function ProjectsSection() {
    const projects = [
        {
            image: 'preview-image-1',
            tags: ['UI/UX', 'Web design', 'Illustrations'],
            title: 'Innovation That Drives Results'
        },
        {
            image: 'preview-image-2',
            tags: ['Sora', 'AI', 'Editorial'],
            title: 'Trusted Technology Partner'
        },
        {
            image: 'preview-image-3',
            tags: ['IOS', 'Design', 'Android'],
            title: 'End-To-End Project Expertise'
        },
        {
            image: 'preview-image-5',
            tags: ['Development', 'SEO', 'SMO'],
            title: 'Illustrations set developed for digital and print use.'
        }
    ];

    return (
        <div id="projects" className="mxd-section padding-pre-stack">
            <div className="mxd-container grid-container">
                <div className="mxd-block">
                    <div className="mxd-pinned-projects">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 col-xl-5 mxd-pinned-projects__static">
                                    <div className="mxd-pinned-projects__static-inner no-margin">
                                        <div className="mxd-section-title no-margin-desktop">
                                            <div className="container-fluid p-0">
                                                <div className="row g-0">
                                                    <div className="col-12 mxd-grid-item no-margin">
                                                        <div className="mxd-section-title__title anim-uni-in-up">
                                                            <h2 className="reveal-type">Our<br />Industry Support</h2>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mxd-grid-item no-margin">
                                                        <div className="mxd-section-title__descr anim-uni-in-up">
                                                            <p>Explore a selection of projects blending<br />creativity with practical design</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mxd-grid-item no-margin">
                                                        <div className="mxd-section-title__controls anim-uni-in-up">
                                                            <a className="btn btn-anim btn-default btn-outline slide-right-up" href="#works-simple.html">
                                                                <span className="btn-caption">All Works</span>
                                                                <i className="ph-bold ph-arrow-up-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-7 mxd-pinned-projects__scroll">
                                    <div className="mxd-pinned-projects__scroll-inner mxd-grid-item no-margin">
                                        {projects.map((project, index) => (
                                            <div key={index} className="mxd-project-item">
                                                <a className="mxd-project-item__media anim-uni-in-up" href="#project-details.html">
                                                    <div className={`mxd-project-item__preview ${project.image} parallax-img-small`}>
                                                        <div className="mxd-project-item__tags">
                                                            {project.tags.map((tag, tagIndex) => (
                                                                <span key={tagIndex} className="tag tag-default tag-permanent">{tag}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="mxd-project-item__promo">
                                                    <div className="mxd-project-item__name">
                                                        <a className="anim-uni-in-up" href="#project-details.html">
                                                            <span>{project.title}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .mxd-project-item__preview {
                    max-height: 400px !important;
                    height: 400px !important;
                    object-fit: cover;
                    position: relative;
                }

                .mxd-project-item__tags {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    display: flex;
                    gap: 10px;
                    z-index: 2;
                }

                .mxd-project-item__media {
                    position: relative;
                    display: block;
                    margin-bottom: 0 !important;
                    height: 400px !important;
                    max-height: 400px !important;
                    overflow: hidden;
                }

                .mxd-project-item__promo {
                    margin-top: 0 !important;
                    padding-top: 0 !important;
                }
            `}</style>
        </div>
    );
}
