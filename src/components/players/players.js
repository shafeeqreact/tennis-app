import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPlayers } from '../../redux';
import PreLoader from '../home/preLoader';

const Players = (props) => {
    const players = useSelector(state => state.players);
    const isLoading = useSelector(state => state.isLoading);
    const error = useSelector(state => state.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPlayers());
    }, []);

    if (isLoading)
        return <PreLoader />

    return (
        <section id="team" className="section-padding text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-header text-center">
                            <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Who's Playing?</h1>
                            <p className="wow fadeInDown" data-wow-delay="0.2s">World's Top Tennis Players</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {(error) ? <div className="col-sm-12 col-md-12 col-lg-12">Something went wrong!! {error}</div> : ''}
                    {players.map(player =>
                        <div onClick={() => props.history.push(`/players/${player.id}`)} key={player.id} className="col-sm-6 col-md-6 col-lg-4">
                            <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="team-img">
                                    <img className="img-fluid" style={{ height: 333 }} src={player.avatar} alt={player.first_name} />
                                    <div className="team-overlay">
                                        <div className="overlay-social-icon text-center">
                                            <ul className="social-icons">
                                                {player.facebook_link && <li><a href={player.facebook_link}><i className="lni-facebook-filled" aria-hidden="true"></i></a></li>}
                                                {player.twitter_link && <li><a href={player.twitter_link}><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>}
                                                {player.linkedin_link && <li><a href={player.linkedin_link}><i className="lni-linkedin-filled" aria-hidden="true"></i></a></li>}
                                                {player.behance_link && <li><a href={player.behance_link}><i className="lni-behance" aria-hidden="true"></i></a></li>}
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