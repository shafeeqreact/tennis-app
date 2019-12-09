import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const Header = () => {
    const slides = [1, 2, 3, 2];

    const slidesWithIndex = slides.map((slide, index) => {
        let animationClass = "";
        switch (index) {
            case 0: animationClass = "fadeInDown"; break;
            case 1: animationClass = "bounceIn"; break;
            case 2: animationClass = "fadeInUp"; break;
            default: animationClass = "fadeInDown"
        }
        const obj = { _id: index, data: slide, animationClass }
        return obj
    })

    const slidesIndicators = slidesWithIndex.map(slide =>
        <li key={slide._id} data-target="#main-slide" data-slide-to={slide._id} className={slide._id === 0 ? "active" : ""}></li>
    )

    const slidesList = slidesWithIndex.map(slide =>
        <div key={slide._id} className={slide._id === 0 ? "carousel-item active" : "carousel-item"}>
            <img className="d-block w-100" src={`assets/img/slider/slide${slide.data}.jpg`} alt={slide.data} />
            <div className="carousel-caption d-md-block">
                <p className="fadeInUp wow" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
                <h1 className={`wow ${slide.animationClass} heading`} data-wow-delay=".4s">Design Thinking Conference</h1>
                <Link to='/' className="fadeInLeft wow btn btn-common btn-lg" data-wow-delay=".6s">Get Ticket</Link>
                <Link to='/' className="fadeInRight wow btn btn-border btn-lg" data-wow-delay=".6s">Explore More</Link>
            </div>
        </div>
    )

    return (
        <header id="header-wrap">
            <div id="main-slide" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {slidesIndicators}
                </ol>
                <div className="carousel-inner">
                    {slidesList}
                    {/* <div className="carousel-item active">
                        <img className="d-block w-100" src="assets/img/slider/slide1.jpg" alt="First slide" />
                        <div className="carousel-caption d-md-block">
                            <p className="fadeInUp wow" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
                            <h1 className="wow fadeInDown heading" data-wow-delay=".4s">Design Thinking Conference</h1>
                            <Link to='/' className="fadeInLeft wow btn btn-common btn-lg" data-wow-delay=".6s">Get Ticket</Link>
                            <Link to='/' className="fadeInRight wow btn btn-border btn-lg" data-wow-delay=".6s">Explore More</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="assets/img/slider/slide2.jpg" alt="Second slide" />
                        <div className="carousel-caption d-md-block">
                            <p className="fadeInUp wow" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
                            <h1 className="wow bounceIn heading" data-wow-delay=".7s">22 Amazing Speakers</h1>
                            <Link to='/' className="fadeInUp wow btn btn-border btn-lg" data-wow-delay=".8s">Learn More</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="assets/img/slider/slide3.jpg" alt="Third slide" />
                        <div className="carousel-caption d-md-block">
                            <p className="fadeInUp wow" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
                            <h1 className="wow fadeInUp heading" data-wow-delay=".6s">Book Your Seat Now!</h1>
                            <Link to='/' className="fadeInUp wow btn btn-common btn-lg" data-wow-delay=".8s">Explore</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="assets/img/slider/slide2.jpg" alt="Fourth slide" />
                        <div className="carousel-caption d-md-block">
                            <p className="fadeInUp wow" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
                            <h1 className="wow bounceIn heading" data-wow-delay=".7s">22 Amazing Speakers</h1>
                            <Link to='/' className="fadeInUp wow btn btn-border btn-lg" data-wow-delay=".8s">Learn More</Link>
                        </div>
                    </div> */}
                </div>
                <Link to='/' className="carousel-control-prev" role="button" data-slide="prev">
                    <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-left"></i></span>
                    <span className="sr-only">Previous</span>
                </Link>
                <Link to='/' className="carousel-control-next" role="button" data-slide="next">
                    <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-right"></i></span>
                    <span className="sr-only">Next</span>
                </Link>
            </div>
        </header>
    );
}

export default Header;