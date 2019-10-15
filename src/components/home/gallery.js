import React from 'react';

const Gallery = () => {
    return (
        <section id="gallery" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-header text-center">
                            <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">our event gallery</h1>
                            <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-4">
                        <div className="gallery-box">
                            <div className="img-thumb">
                                <img className="img-fluid" src="assets/img/gallery/img-1.jpg" alt="" />
                            </div>
                            <div className="overlay-box text-center">
                                <a className="lightbox" href="assets/img/gallery/img-1.jpg">
                                    <i className="lni-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ccol-md-6 col-sm-6 col-lg-4">
                        <div className="gallery-box">
                            <div className="img-thumb">
                                <img className="img-fluid" src="assets/img/gallery/img-2.jpg" alt="" />
                            </div>
                            <div className="overlay-box text-center">
                                <a className="lightbox" href="assets/img/gallery/img-2.jpg">
                                    <i className="lni-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ccol-md-6 col-sm-6 col-lg-4">
                        <div className="gallery-box">
                            <div className="img-thumb">
                                <img className="img-fluid" src="assets/img/gallery/img-3.jpg" alt="" />
                            </div>
                            <div className="overlay-box text-center">
                                <a className="lightbox" href="assets/img/gallery/img-3.jpg">
                                    <i className="lni-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ccol-md-6 col-sm-6 col-lg-4">
                        <div className="gallery-box">
                            <div className="img-thumb">
                                <img className="img-fluid" src="assets/img/gallery/img-4.jpg" alt="" />
                            </div>
                            <div className="overlay-box text-center">
                                <a className="lightbox" href="assets/img/gallery/img-4.jpg">
                                    <i className="lni-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ccol-md-6 col-sm-6 col-lg-4">
                        <div className="gallery-box">
                            <div className="img-thumb">
                                <img className="img-fluid" src="assets/img/gallery/img-5.jpg" alt="" />
                            </div>
                            <div className="overlay-box text-center">
                                <a className="lightbox" href="assets/img/gallery/img-5.jpg">
                                    <i className="lni-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ccol-md-6 col-sm-6 col-lg-4">
                        <div className="gallery-box">
                            <div className="img-thumb">
                                <img className="img-fluid" src="assets/img/gallery/img-6.jpg" alt="" />
                            </div>
                            <div className="overlay-box text-center">
                                <a className="lightbox" href="assets/img/gallery/img-6.jpg">
                                    <i className="lni-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-xs-12">
                        <a href="#" className="btn btn-common">Browse All</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;