import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTournament } from '../../redux/schedule/thunkActions';

import PreLoader from '../common/preLoader';
import SectionHeader from '../common/sectionHeader';
import ListGroup from './schedule/listGroup';
import Card from './schedule/card';

const Schedule = () => {
    const data = useSelector(state => state.schedule);
    const { isLoading, error, tournament } = data;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTournament());
    }, [])

    return (
        <section id="schedules" className="schedule section-padding">
            <div className="container">
                <SectionHeader
                    name="Event Schedules"
                    tagline1={`Complete Schedule of the ${isLoading ? '' : tournament.tourney_name} Tournament`}
                    tagline2="Do Not Miss The Matches"
                />
                {isLoading ? <PreLoader /> :
                    <React.Fragment>
                        {(error) ? <div className="col-sm-12 col-md-12 col-lg-12">Something went wrong!! {error}</div> :
                            <div className="schedule-area row wow fadeInDown" data-wow-delay="0.3s">
                                <div className="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
                                    <div className="table-responsive">
                                        <ListGroup rounds={tournament.rounds} />
                                    </div>
                                </div>
                                <div className="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
                                    <div className="tab-content" id="myTabContent">
                                        {tournament.rounds.map(round =>
                                            <div key={round.round_id} className={round.show ? "tab-pane fade show active" : "tab-pane fade show"}
                                                id={round.round_id} role="tabpanel" aria-labelledby={`${round.round_id}-tab`}>
                                                <div id={`accordion${round.round_id}`}>
                                                    {round.matches.map(match =>
                                                        <Card key={match.match_id} round_id={round.round_id} match={match} />
                                                    )}
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