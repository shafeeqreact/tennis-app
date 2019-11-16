import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PreLoader from '../common/preLoader';
import SectionHeader from '../common/sectionHeader';

const Team = (props) => {
    const { isLoading, error, players } = useSelector(state => state.players);

    return (
        <section id="team" className="section-padding text-center">
            <div className="container">
                <SectionHeader
                    name="Who's Playing?"
                    tagline1="World's Top Tennis Players"
                />
                {isLoading ? <PreLoader /> :
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
                                        <p>Rank - {player.id}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                }
                <Link to='/players' className="btn btn-common mt-30 wow fadeInUp" data-wow-delay="1.9s">All Players</Link>
            </div>
        </section>
    );
}

export default Team;