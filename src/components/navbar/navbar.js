import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                    </button>
                    <Link to="/" className="navbar-brand"><img src="assets/img/logo.png" alt="" /></Link>
                </div>
                <div className="collapse navbar-collapse" id="main-navbar">
                    <ul className="navbar-nav mr-auto w-100 justify-content-end">
                        <li className="nav-item active"><a className="nav-link" href="#header-wrap">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#schedules">schedules</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Players</a></li>
                        <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
                        <li className="nav-item"><a className="nav-link" href="#faq">Faq</a></li>
                        <li className="nav-item"><a className="nav-link" href="#sponsors">Sponsors</a></li>
                        <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
                        <li className="nav-item"><a className="nav-link" href="#google-map-area">Contact</a></li>
                    </ul>
                </div>
            </div>

            <ul className="mobile-menu">
                <li><a className="page-scrool" href="#header-wrap">Home</a></li>
                <li><a className="page-scrool" href="#about">About</a></li>
                <li><a className="page-scroll" href="#schedules">schedules</a></li>
                <li><a className="page-scroll" href="#team">players</a></li>
                <li><a className="page-scroll" href="#gallery">Gallery</a></li>
                <li><a className="page-scroll" href="#faq">Faq</a></li>
                <li><a className="page-scroll" href="#sponsors">Sponsors</a></li>
                <li><a className="page-scroll" href="#pricing">pricing</a></li>
                <li><a className="page-scroll" href="#google-map-area">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;