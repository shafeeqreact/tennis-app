import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSchedule } from '../../redux/schedule/thunkActions';
import PreLoader from '../common/preLoader';
import CommonHeader from '../common/commonHeader';
import ListGroup from '../common/listGroup';
import Card from '../common/card';

const Schedule = () => {
    const data = useSelector(state => state.schedule);
    const { isLoading, error, schedule } = data;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSchedule());
    }, [])

    return (
        <section id="schedules" className="schedule section-padding">
            <div className="container">
                <CommonHeader
                    name="Event Schedules"
                    tagline1="Lorem ipsum dolor sit amet, consectetur adipiscing"
                    tagline2="elit, sed do eiusmod tempor"
                />
                {isLoading ? <PreLoader /> :
                    <React.Fragment>
                        {(error) ? <div className="col-sm-12 col-md-12 col-lg-12">Something went wrong!! {error}</div> :
                            <div className="schedule-area row wow fadeInDown" data-wow-delay="0.3s">
                                <div className="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
                                    <div className="table-responsive">
                                        <ListGroup rounds={schedule} />
                                    </div>
                                </div>
                                <div className="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
                                    <div className="tab-content" id="myTabContent">
                                        {schedule.map(round =>
                                            <div key={round.round_id} className={round.show ? "tab-pane fade show active" : "tab-pane fade show"}
                                                id={round.round_id} role="tabpanel" aria-labelledby={`${round.round_id}-tab`}>
                                                <div id={`accordion${round.round_id}`}>
                                                    {round.matches.map(match => <Card key={match.match_id} round_id={round.round_id} match={match} />)}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>}
                    </React.Fragment>
                }
            </div>
        </section>
    );
}

export default Schedule;