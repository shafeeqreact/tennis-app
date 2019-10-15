import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-header text-center">
                            <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">About This Events</h1>
                            <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="about-item">
                            <img className="img-fluid" src="assets/img/about/img1.jpg" alt="" />
                            <div className="about-text">
                                <h3><a href="#">Wanna Know Our Mission?</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                                <a className="btn btn-common btn-rm" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="about-item">
                            <img className="img-fluid" src="assets/img/about/img2.jpg" alt="" />
                            <div className="about-text">
                                <h3><a href="#">What you will learn?</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                                <a className="btn btn-common btn-rm" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="about-item">
                            <img className="img-fluid" src="assets/img/about/img3.jpg" alt="" />
                            <div className="about-text">
                                <h3><a href="#">What are the benifits?</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                                <a className="btn btn-common btn-rm" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;