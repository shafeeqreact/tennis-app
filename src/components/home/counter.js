import React from 'react';

const Counter = () => {
    return (
        <section className="counter-section section-padding">
            <div className="container">
                <div className="row">
                    {/* <!-- Counter Item --> */}
                    <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="0.3s">
                            <div className="icon"><i className="lni-map"></i></div>
                            <p>Wst. Conference Center</p>
                            <span>San Francisco, CA</span>
                        </div>
                    </div>
                    {/* <!-- Counter Item --> */}
                    <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="0.6s">
                            <div className="icon"><i className="lni-timer"></i></div>
                            <p>February 14 - 19, 2018</p>
                            <span>09:00 AM – 05:00 PM</span>
                        </div>
                    </div>
                    {/* <!-- Counter Item --> */}
                    <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="0.9s">
                            <div className="icon"><i className="lni-users"></i></div>
                            <p>343 Available Seats</p>
                            <span>Hurryup! few tickets are left</span>
                        </div>
                    </div>
                    {/* <!-- Counter Item --> */}
                    <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="1.2s">
                            <div className="icon"><i className="lni-coffee-cup"></i></div>
                            <p>Free Lunch & Snacks</p>
                            <span>Don’t miss it</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Counter;