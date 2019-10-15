import React from 'react';

const Header = () => {
    return (
        <header id="header-wrap">
            <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="icon-menu"></span>
                            <span className="icon-menu"></span>
                            <span className="icon-menu"></span>
                        </button>
                        <a href="index.html" className="navbar-brand"><img src="assets/img/logo.png" alt="" /></a>
                    </div>
                    <div className="collapse navbar-collapse" id="main-navbar">
                        <ul className="navbar-nav mr-auto w-100 justify-content-end">
                            <li className="nav-item active">
                                <a className="nav-link" href="#header-wrap">
                                    Home
                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    About
                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#schedules">
                                    schedules
                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#team">
                                    Speakers
                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#gallery">
                                    Gallery
                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#faq">
                                    Faq
                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#sponsors">
                                    Sponsors
                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">
                                    pricing
                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#google-map-area">
                                    Contact
                    </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <!-- Mobile Menu Start --> */}
                <ul className="mobile-menu">
                    <li>
                        <a className="page-scrool" href="#header-wrap">Home</a>
                    </li>
                    <li>
                        <a className="page-scrool" href="#about">About</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#schedules">schedules</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#team">Speakers</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#faq">Faq</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#sponsors">Sponsors</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#pricing">pricing</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#google-map-area">Contact</a>
                    </li>
                </ul>
                {/* <!-- Mobile Menu End --> */}

            </nav>
            {/* <!-- Navbar End --> */}

            {/* <!-- Main Carousel Section Start --> */}
            <div id="main-slide" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#main-slide" data-slide-to="0" className="active"></li>
                    <li data-target="#main-slide" data-slide-to="1"></li>
                    <li data-target="#main-slide" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="assets/img/slider/slide1.jpg" alt="First slide" />
                        <div className="carousel-caption d-md-block">
                            <p className="fadeInUp wow" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
                            <h1 className="wow fadeInDown heading" data-wow-delay=".4s">Design Thinking Conference</h1>
                            <a className="fadeInLeft wow btn btn-common btn-lg" data-wow-delay=".6s">Get Ticket</a>
                            <a className="fadeInRight wow btn btn-border btn-lg" data-wow-delay=".6s">Explore More</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="assets/img/slider/slide2.jpg" alt="Second slide" />
                        <div className="carousel-caption d-md-block">
                            <p className="fadeInUp wow" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
                            <h1 className="wow bounceIn heading" data-wow-delay=".7s">22 Amazing Speakers</h1>
                            <a className="fadeInUp wow btn btn-border btn-lg" data-wow-delay=".8s">Learn More</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="assets/img/slider/slide3.jpg" alt="Third slide" />
                        <div className="carousel-caption d-md-block">
                            <p className="fadeInUp wow" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
                            <h1 className="wow fadeInUp heading" data-wow-delay=".6s">Book Your Seat Now!</h1>
                            <a className="fadeInUp wow btn btn-common btn-lg" data-wow-delay=".8s">Explore</a>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#main-slide" role="button" data-slide="prev">
                    <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-left"></i></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#main-slide" role="button" data-slide="next">
                    <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-right"></i></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            {/* <!-- Main Carousel Section End --> */}

        </header>

    );
}

export default Header;