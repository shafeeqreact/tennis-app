import React from 'react';

const Blogs = () => {
    return (
        <section id="blog" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-header text-center">
                            <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Our Latest News & Articles</h1>
                            <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className="blog-item">
                            <div className="blog-image">
                                <a href="#">
                                    <img className="img-fluid" src="assets/img/blog/img-1.jpg" alt="" />
                                </a>
                            </div>
                            <div className="descr">
                                <div className="tag">Design</div>
                                <h3 className="title">
                                    <a href="single-blog.html">
                                        The 9 Design Trends You Need to Know
                    </a>
                                </h3>
                                <div className="meta-tags">
                                    <span className="date">Jan 20, 2018</span>
                                    <span className="comments">| <a href="#"> by Cindy Jefferson</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className="blog-item">
                            <div className="blog-image">
                                <a href="#">
                                    <img className="img-fluid" src="assets/img/blog/img-2.jpg" alt="" />
                                </a>
                            </div>
                            <div className="descr">
                                <div className="tag">Design</div>
                                <h3 className="title">
                                    <a href="single-blog.html">
                                        The 9 Design Trends You Need to Know
                    </a>
                                </h3>
                                <div className="meta-tags">
                                    <span className="date">Jan 20, 2018 </span>
                                    <span className="comments">| <a href="#"> by Cindy Jefferson</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className="blog-item">
                            <div className="blog-image">
                                <a href="#">
                                    <img className="img-fluid" src="assets/img/blog/img-3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="descr">
                                <div className="tag">Design</div>
                                <h3 className="title">
                                    <a href="single-blog.html">
                                        The 9 Design Trends You Need to Know
                    </a>
                                </h3>
                                <div className="meta-tags">
                                    <span className="date">Jan 20, 2018</span>
                                    <span className="comments">| <a href="#"> by Cindy Jefferson</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <a href="#" className="btn btn-common">Read More News</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blogs;