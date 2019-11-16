import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PreLoader from '../common/preLoader';
import SectionHeader from '../common/sectionHeader';

const Services = () => {
    const data = useSelector(state => state.schedule);
    const { isLoading, error, tournament } = data;

    if (isLoading)
        return <PreLoader />

    if (error)
        return <div className="col-sm-12 col-md-12 col-lg-12">Something went wrong!! {error}</div>

    return (
        <section id="services" className="services section-padding">
            <div className="container">
                <SectionHeader
                    name="Why You Should Play?"
                    tagline1={`Grand Event of the ${tournament.tourney_name} Tournament`}
                />
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