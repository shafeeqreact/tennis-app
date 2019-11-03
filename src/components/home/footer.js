import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
                        <h3><img src="assets/img/logo.png" alt="" /></h3>
                        <p>Aorem ipsum dolor sit amet elit sed lum tempor incididunt ut labore el dolore alg minim veniam quis nostrud ncididunt.</p>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li><Link to="/">About Conference</Link></li>
                            <li><Link to="/">Our Speakers</Link></li>
                            <li><Link to="/">Event Shedule</Link></li>
                            <li><Link to="/">Latest News</Link></li>
                            <li><Link to="/">Event Photo Gallery</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
                        <h3>RECENT POSTS</h3>
                        <ul className="image-list">
                            <li>
                                <figure className="overlay">
                                    <img className="img-fluid" src="assets/img/art/a1.jpg" alt="" />
                                </figure>
                                <div className="post-content">
                                    <h6 className="post-title"> <Link to="/">Lorem ipsm dolor sumit.</Link> </h6>
                                    <div className="meta"><span className="date">October 12, 2018</span></div>
                                </div>
                            </li>
                            <li>
                                <figure className="overlay">
                                    <img className="img-fluid" src="assets/img/art/a2.jpg" alt="" />
                                </figure>
                                <div className="post-content">
                                    <h6 className="post-title"><Link to="/">Lorem ipsm dolor sumit.</Link></h6>
                                    <div className="meta"><span className="date">October 12, 2018</span></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.8s">
                        <h3>SUBSCRIBE US</h3>
                        <div className="widget">
                            <div className="newsletter-wrapper">
                                <form method="post" id="subscribe-form" name="subscribe-form" className="validate">
                                    <div className="form-group is-empty">
                                        <input type="email" name="Email" className="form-control" id="EMAIL" placeholder="Your email" required="" />
                                        <button type="submit" name="subscribe" id="subscribes" className="btn btn-common sub-btn"><i className="lni-pointer"></i></button>
                                        <div className="clearfix"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- /.widget --> */}
                        <div className="widget">
                            <h5 className="widget-title">FOLLOW US ON</h5>
                            <ul className="footer-social">
                                <li><Link to='/' className="facebook"><i className="lni-facebook-filled"></i></Link></li>
                                <li><Link to='/' className="twitter"><i className="lni-twitter-filled"></i></Link></li>
                                <li><Link to='/' className="linkedin"><i className="lni-linkedin-filled"></i></Link></li>
                                <li><Link to='/' className="google-plus"><i className="lni-google-plus"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;