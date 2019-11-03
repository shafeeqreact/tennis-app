import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PreLoader from '../common/preLoader';

const Countdown = () => {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const isLoading = useSelector(state => state.schedule.isLoading);
    const error = useSelector(state => state.schedule.error);
    const tourney_start_date = useSelector(state => state.schedule.tournament.tourney_start_date);

    const array = tourney_start_date ? tourney_start_date.split('/') : [];
    const startMonth = array[0];
    const startDay = array[1];
    const startYear = array[2];

    // Set the date we're counting down to
    const startDate = new Date(startYear, startMonth - 1, startDay).getTime();

    let interval;

    useEffect(() => {
        tick();

        return () => {
            clearInterval(interval);
        }
    }, [countdown]);

    const tick = () => {
        interval = setInterval(() => {
            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = now - startDate;

            // Time calculations for days, hours, minutes and seconds
            const days = -1 * Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = -1 * Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = -1 * Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = -1 * Math.floor((distance % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);
    }

    if (isLoading)
        return <PreLoader />

    if (error)
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
                                <div className="time-entry days">{countdown.days ? <span>{countdown.days}</span> : <span>0</span>} Days</div>
                                <div className="time-entry hours">{countdown.hours ? <span>{countdown.hours}</span> : <span>0</span>} Hours</div>
                                <div className="time-entry minutes">{countdown.minutes ? <span>{countdown.minutes}</span> : <span>0</span>} Minutes</div>
                                <div className="time-entry seconds">{countdown.seconds ? <span>{countdown.seconds}</span> : <span>0</span>} Seconds</div>
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