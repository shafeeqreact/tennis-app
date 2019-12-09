import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllPlayers } from '../../redux';

import PreLoader from '../common/preLoader';
import SectionHeader from '../common/sectionHeader';

const Players = (props) => {
    const { isLoading, error, players } = useSelector(state => state.players);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPlayers());
    }, [dispatch]);

    if (isLoading)
        return <PreLoader />

    if (error)
        return <div className="col-sm-12 col-md-12 col-lg-12">Something went wrong!! {error}</div>

    return (
        <section id="team" className="section-padding text-center">
            <div className="container">
                <SectionHeader
                    name="Who's Playing?"
                    tagline1="World's Top Tennis Players"
                />
                <div className="row">
                    {players.map(player =>
                        <div onClick={() => props.history.push(`/players/${player.id}`)} key={player.id} className="col-sm-6 col-md-6 col-lg-4">
                            <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="team-img">
                                    <img className="img-fluid" style={{ height: 333 }} src={player.avatar} alt={player.first_name} />
                                    <div className="team-overlay">
                                        <div className="overlay-social-icon text-center">
                                            <ul className="social-icons">
                                                {player.social_networks.map(sn =>
                                                    <li key={sn._id} ><a href={sn.link}><i className={`lni-${sn.type}-filled`} aria-hidden="true"></i></a></li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-text">
                                    <h3>{player.first_name}</h3>
                                    <p>Current Rank - {player.id}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Players;