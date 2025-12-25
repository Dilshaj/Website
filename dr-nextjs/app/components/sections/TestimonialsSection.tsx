export default function TestimonialsSection() {
    const testimonials = [
        {
            image: '/img/avatars/300x300_ava-05.webp',
            text: 'The Rayo team nailed it! They understood our vision and delivered a sleek, intuitive site that our clients love.',
            name: 'Lea Tomato',
            position: 'Senior designer in',
            company: 'The Way'
        },
        {
            image: '/img/avatars/300x300_ava-04.webp',
            text: "The team's attention to detail, creativity, and technical expertise exceeded our expectations. We've received so much positive feedback from our customers already.",
            name: 'Ashley Cherry',
            position: 'SEO in',
            company: 'Eye Candy'
        },
        {
            image: '/img/avatars/300x300_ava-06.webp',
            text: 'Amazing experience working with Rayo! They made the process smooth and gave us a website that truly reflects our brand.',
            name: 'Patrick Pineapple',
            position: 'SEO in',
            company: 'Instant Design'
        }
    ];

    return (
        <div className="mxd-section padding-grid-pre-mtext">
            <div className="mxd-container no-padding-container">
                <div className="mxd-block">
                    <div className="container-fluid px-0">
                        <div className="row gx-0">
                            <div className="col-12 col-xl-5">
                                <div className="mxd-container grid-container">
                                    <div className="mxd-block">
                                        <div className="mxd-section-title no-margin-desktop">
                                            <div className="container-fluid p-0">
                                                <div className="row g-0">
                                                    <div className="col-12 mxd-grid-item no-margin">
                                                        <div className="mxd-section-title__title anim-uni-in-up">
                                                            <h2 className="reveal-type">What our clients say</h2>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mxd-grid-item no-margin">
                                                        <div className="mxd-section-title__descr">
                                                            <p className="anim-uni-in-up">
                                                                We're more than just executors — we're your creative partners. Don't just take our word for it, see what clients have to say about working with us.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-7">
                                <div className="testimonials-slider overflow-hidden anim-uni-in-up">
                                    <div className="swiper-testimonials">
                                        <div className="swiper-wrapper">
                                            {testimonials.map((testimonial, index) => (
                                                <div key={index} className="swiper-slide">
                                                    <div className="mxd-testimonials-card bg-base-tint radius-m">
                                                        <div className="mxd-testimonials-card__content">
                                                            <div className="mxd-testimonials-card__media anim-uni-in-up">
                                                                <div className="mxd-testimonials-card__photo">
                                                                    <img src={testimonial.image} alt="Author Photo" />
                                                                </div>
                                                            </div>
                                                            <div className="mxd-testimonials-card__text">
                                                                <p className="anim-uni-in-up">{testimonial.text}</p>
                                                            </div>
                                                        </div>
                                                        <div className="mxd-testimonials-card__author">
                                                            <h5 className="mxd-testimonials-card__name anim-uni-in-up">{testimonial.name}</h5>
                                                            <p className="mxd-testimonials-card__position t-small anim-uni-in-up">
                                                                {testimonial.position} <a href="##">{testimonial.company}</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="swiper-button-prev mxd-slider-btn mxd-slider-btn-round-prev animate-card-2">
                                                <a className="btn btn-round btn-round-small btn-outline slide-left anim-no-delay" href="##0">
                                                    <i className="ph ph-arrow-left"></i>
                                                </a>
                                            </div>
                                            <div className="swiper-button-next mxd-slider-btn mxd-slider-btn-round-next animate-card-2">
                                                <a className="btn btn-round btn-round-small btn-outline slide-right anim-no-delay" href="##0">
                                                    <i className="ph ph-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="testimonials-slider__shadow"></div>
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
