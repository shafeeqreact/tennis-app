import React from 'react';
import { useSelector } from 'react-redux';

import PreLoader from '../common/preLoader';
import SectionHeader from '../common/sectionHeader';
import ListGroup from './schedule/listGroup';
import Card from './schedule/card';

const Schedule = () => {
    const { isLoading, error, tournament } = useSelector(state => state.schedule);
    const { tourney_name, rounds } = tournament;

    if (isLoading)
        return <PreLoader />

    if (error)
        return <div className="col-sm-12 col-md-12 col-lg-12">Something went wrong!! {error}</div>

    return (
        <section id="schedules" className="schedule section-padding">
            <div className="container">
                <SectionHeader
                    name="Event Schedules"
                    tagline1={`Complete Schedule of the ${tourney_name} Tournament`}
                    tagline2="Don't Miss The Matches"
                />
                <div className="schedule-area row wow fadeInDown" data-wow-delay="0.3s">
                    <div className="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
                        <div className="table-responsive">
                            <ListGroup rounds={rounds} />
                        </div>
                    </div>
                    <div className="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
                        <div className="tab-content" id="myTabContent">
                            {rounds.map(round =>
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
                </div>
            </div>
        </section>
    );
}

export default Schedule;