import React from 'react';

const EventSlides = () => {
    return (
        <section id="event-slides" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-header text-center">
                            <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Event Guideline</h1>
                            <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
                        <div className="video">
                            <img className="img-fluid" src="assets/img/about/about.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
                        <p className="intro-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        <h2 className="intro-title">Check List</h2>
                        <ul className="list-specification">
                            <li><i className="lni-check-mark-circle"></i> Lorem Ipsum is simply dummy</li>
                            <li><i className="lni-check-mark-circle"></i> Ipsum passages, and more recently</li>
                            <li><i className="lni-check-mark-circle"></i> PageMaker including versions</li>
                            <li><i className="lni-check-mark-circle"></i> Lorem Ipsum is simply dummy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EventSlides;