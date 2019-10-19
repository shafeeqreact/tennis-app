import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <section id="pricing" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-header text-center">
                            <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Our Pricing</h1>
                            <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-xa-12 mb-3">
                        <div className="price-block-wrapper wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="icon">
                                <i className="lni-write"></i>
                            </div>
                            <div className="colmun-title">
                                <h5>Basic Pass</h5>
                            </div>
                            <div className="price">
                                <h2>$29</h2>
                                <p>452 Tickets Available</p>
                            </div>
                            <div className="pricing-list">
                                <ul>
                                    <li><i className="lni-check-mark-circle"></i><span className="text">Entrance</span></li>
                                    <li><i className="lni-check-mark-circle"></i><span className="text">Coffee Break</span></li>
                                    <li><i className="lni-check-mark-circle"></i><span className="text">Lunch on all days</span></li>
                                    <li><i className="lni-close"></i><span className="text">Access to all areas</span></li>
                                    <li><i className="lni-close"></i><span className="text">Certificate</span></li>
                                    <li><i className="lni-check-mark-circle"></i><span className="text">Workshop</span></li>
                                </ul>
                            </div>
                            <Link to='/' className="btn btn-common">Buy Ticket</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-xa-12 mb-3">
                        <div className="price-block-wrapper wow fadeInUp" data-wow-delay="0.3s">
                            <div className="icon">
                                <i className="lni-layers"></i>
                            </div>
                            <div className="colmun-title">
                                <h5>Standard Pass</h5>
                            </div>
                            <div className="price">
                                <h2>$40</h2>
                                <p>452 Tickets Available</p>
                            </div>
                            <div className="pricing-list">
                                <ul>
                                    <li><i className="lni-check-mark-circle"></i><span className="text">Entrance</span></li>
                                    <li><i className="lni-check-mark-circle"></i><span className="text">Coffee Break</span></li>
                                    <li><i className="lni-check-mark-circle"></i><span className="text">Lunch on all days</span></li>
                                    <li><i className="lni-close"></i><span className="text">Access to all areas</span></li>
                                    <li><i className="lni-check-mark-circle"></i><span className="text">Certificate</span></li>
                                    <li><i className="lni-close"></i><span className="text">Workshop</span></li>
                                </ul>
                            </div>
                            <Link to='/' className="btn btn-common">Buy Ticket</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-xa-12 mb-3">
                        <div className="price-block-wrapper wow fadeInRight" data-wow-delay="0.4s">
                            <div className="icon">
                                <i className="lni-leaf"></i>
                            </div>
                            <div className="colmun-title">
                                <h5>Premium Pass</h5>
                            </div>
                            <div className="price">
                                <h2>$68</h2>
                                <p>452 Tickets Available</p>
                            </div>
                            <div className="pricing-list">
                                <ul>
                                    <li><i className="lni-check-mark-circle"></i><span className="text">Entrance</span></li>
                                    <li><i className="lni-check-mark-circle"></i><span className="text">Coffee Break</span></li>
                                    <li><i className="lni-close"></i><span className="text">Lunch on all days</span></li>
                                    <li><i className="lni-check-mark-circle"></i><span className="text">Access to all areas</span></li>
                                    <li><i className="lni-check-mark-circle"></i><span className="text">Certificate</span></li>
                                    <li><i className="lni-close"></i><span className="text">Workshop</span></li>
                                </ul>
                            </div>
                            <Link to='/' className="btn btn-common">Buy Ticket</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;