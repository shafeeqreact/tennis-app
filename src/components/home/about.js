import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/sectionHeader';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <SectionHeader name="About This Event" tagline1="Global Grand Event on Digital Design" />
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="about-item">
                            <img className="img-fluid" src="assets/img/about/img1.jpg" alt="" />
                            <div className="about-text">
                                <h3><Link to='/'>Wanna Know Our Mission?</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                                <Link className="btn btn-common btn-rm" to='/'>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="about-item">
                            <img className="img-fluid" src="assets/img/about/img2.jpg" alt="" />
                            <div className="about-text">
                                <h3><Link to='/'>What you will learn?</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                                <Link className="btn btn-common btn-rm" to='/'>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="about-item">
                            <img className="img-fluid" src="assets/img/about/img3.jpg" alt="" />
                            <div className="about-text">
                                <h3><Link to='/'>What are the benifits?</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                                <Link className="btn btn-common btn-rm" to='/'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;