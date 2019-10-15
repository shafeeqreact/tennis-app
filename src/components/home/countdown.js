import React from 'react';

const Countdown = () => {
    return (
        <section className="countdown-timer section-padding">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="heading-count">
                            <h2 className="wow fadeInDown" data-wow-delay="0.2s">Event Will Start In</h2>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row time-countdown justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                            <div id="clock" className="time-count"></div>
                        </div>
                        <a href="pricing.html" className="btn btn-common wow fadeInUp" data-wow-delay="0.3s">Add to My Calender</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Countdown;