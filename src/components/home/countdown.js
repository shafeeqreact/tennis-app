import React from 'react';
import { useSelector } from 'react-redux';

import useCountdownTimer from '../common/useCountdownTimer';

import PreLoader from '../common/preLoader';

const Countdown = () => {
    const { isLoading, error, tournament } = useSelector(state => state.schedule);
    const { tourney_has_started, tourney_start_date } = tournament;

    let startMonth = new Date().getMonth() + 2;
    let startDay = new Date().getDay();
    let startYear = new Date().getFullYear();

    if (!isLoading) {
        const array = tourney_start_date ? tourney_start_date.split('/') : [];
        startMonth = array[0];
        startDay = array[1];
        startYear = array[2];
    }

    const remTime = useCountdownTimer(startYear, startMonth, startDay);

    if (isLoading)
        return <PreLoader />

    if (error)
        return null;

    if (tourney_has_started)
        return null;

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
                            <div className="time-count">
                                <div className="time-entry days">{remTime.days ? <span>{remTime.days}</span> : <span>0</span>} Days</div>
                                <div className="time-entry hours">{remTime.hours ? <span>{remTime.hours}</span> : <span>0</span>} Hours</div>
                                <div className="time-entry minutes">{remTime.minutes ? <span>{remTime.minutes}</span> : <span>0</span>} Minutes</div>
                                <div className="time-entry seconds">{remTime.seconds ? <span>{remTime.seconds}</span> : <span>0</span>} Seconds</div>
                            </div>
                        </div>
                        {/* <a href="pricing.html" className="btn btn-common wow fadeInUp" data-wow-delay="0.3s">Add to My Calender</a> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Countdown;