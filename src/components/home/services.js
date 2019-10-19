import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section id="services" className="services section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-header text-center">
                            <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Why You Choose Us?</h1>
                            <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
                        </div>
                    </div>
                </div>
                <div className="row services-wrapper">
                    <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
                        <div className="services-item wow fadeInDown" data-wow-delay="0.2s">
                            <div className="icon">
                                <i className="lni-heart"></i>
                            </div>
                            <div className="services-content">
                                <h3><Link to='/'>Get Inspired</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
                        <div className="services-item wow fadeInDown" data-wow-delay="0.4s">
                            <div className="icon">
                                <i className="lni-gallery"></i>
                            </div>
                            <div className="services-content">
                                <h3><Link to='/'>Meet New Faces</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
                        <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
                            <div className="icon">
                                <i className="lni-envelope"></i>
                            </div>
                            <div className="services-content">
                                <h3><Link to='/'>Fresh Tech Insights</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
                        <div className="services-item wow fadeInDown" data-wow-delay="0.8s">
                            <div className="icon">
                                <i className="lni-cup"></i>
                            </div>
                            <div className="services-content">
                                <h3><Link to='/'>Networking Session</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
                        <div className="services-item wow fadeInDown" data-wow-delay="1s">
                            <div className="icon">
                                <i className="lni-user"></i>
                            </div>
                            <div className="services-content">
                                <h3><Link to='/'>Global Event</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
                        <div className="services-item wow fadeInDown" data-wow-delay="1.2s">
                            <div className="icon">
                                <i className="lni-bubble"></i>
                            </div>
                            <div className="services-content">
                                <h3><Link to='/'>Free Swags</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;