import React from 'react';

const SubscribeArea = () => {
    return (
        <div id="subscribe" className="section-padding">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-10 col-lg-7">
                        <div className="subscribe-inner wow fadeInDown" data-wow-delay="0.3s">
                            <h2 className="subscribe-title">Sign Up For Our Newsletter</h2>
                            <form className="text-center form-inline">
                                <input className="mb-20 form-control" name="email" placeholder="Enter Your Email Here" />
                                <button type="submit" className="btn btn-common sub-btn" data-style="zoom-in" data-spinner-size="30" name="submit" id="submit">
                                    <span className="ladda-label"><i className="lni-check-box"></i> Submit</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscribeArea;