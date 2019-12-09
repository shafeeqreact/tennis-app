import React from 'react';
import { useSelector } from 'react-redux';
import PreLoader from '../common/preLoader';

const Counter = () => {
    const data = useSelector(state => state.schedule);
    const { isLoading, error, tournament } = data;
    const { tourney_name, tourney_location, tourney_start_date, tourney_end_date } = tournament;

    if (isLoading)
        return <PreLoader />

    if (error)
        return null;

    return (
        <section className="counter-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="0.3s">
                            <div className="icon"><i className="lni-map"></i></div>
                            <p>{tourney_name}</p>
                            <span>{tourney_location}</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="0.6s">
                            <div className="icon"><i className="lni-timer"></i></div>
                            <p>{tourney_start_date} - {tourney_end_date}</p>
                            <span>Players decide the time</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="0.9s">
                            <div className="icon"><i className="lni-users"></i></div>
                            <p>spectators welcome</p>
                            <span>hurry up! come with your friends</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
                        <div className="counter wow fadeInRight" data-wow-delay="1.2s">
                            <div className="icon"><i className="lni-coffee-cup"></i></div>
                            <p>Lunch & Snacks</p>
                            <span>Bring your own food</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Counter;