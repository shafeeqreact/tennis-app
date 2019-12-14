import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import PreLoader from '../common/preLoader';

const Header = () => {
    const { isLoading, error, headerImages } = useSelector(state => state.players);

    if (isLoading)
        return <PreLoader />

    if (error)
        return <div className="col-sm-12 col-md-12 col-lg-12">Something went wrong!! {error}</div>

    const slidesWithClasses = headerImages.map(image => {
        let animationClass = "";
        const randomNumber = Math.floor(Math.random() * 3)
        switch (randomNumber) {
            case 0: animationClass = "fadeInDown"; break;
            case 1: animationClass = "bounceIn"; break;
            default: animationClass = "fadeInUp"
        }
        const obj = { ...image, animationClass }
        return obj
    })

    const slidesIndicators = slidesWithClasses.map((image, index) =>
        <li key={image._id} data-target="#main-slide" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
    )

    const slidesList = slidesWithClasses.map((slide, index) =>
        <div key={slide._id} className={index === 0 ? "carousel-item active" : "carousel-item"}>
            <img className="d-block w-100" src={slide.link} alt={slide.link} />
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