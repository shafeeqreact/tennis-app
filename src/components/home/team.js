import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        let players = [
            { "id": 7, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg" },
            { "id": 8, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg" },
            { "id": 9, "email": "tobias.funke@reqres.in", "first_name": "Tobias", "last_name": "Funke", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg" },
            { "id": 10, "email": "byron.fields@reqres.in", "first_name": "Byron", "last_name": "Fields", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg" },
            { "id": 11, "email": "george.edwards@reqres.in", "first_name": "George", "last_name": "Edwards", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg" },
            { "id": 12, "email": "rachel.howell@reqres.in", "first_name": "Rachel", "last_name": "Howell", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg" }
        ];
        setPlayers(players);
    }, []);

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
                    {players.map(player =>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="team-img">
                                    <img className="img-fluid" style={{ height: 333 }} src={player.avatar} alt={player.first_name} />
                                    <div className="team-overlay">
                                        <div className="overlay-social-icon text-center">
                                            <ul className="social-icons">
                                                <li><Link to={player.facebook_link}><i className="lni-facebook-filled" aria-hidden="true"></i></Link></li>
                                                <li><Link to={player.twitter_link}><i className="lni-twitter-filled" aria-hidden="true"></i></Link></li>
                                                <li><Link to={player.linkedin_link}><i className="lni-linkedin-filled" aria-hidden="true"></i></Link></li>
                                                <li><Link to={player.behance_link}><i className="lni-behance" aria-hidden="true"></i></Link></li>
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
                <Link to='/players' className="btn btn-common mt-30 wow fadeInUp" data-wow-delay="1.9s">All Players</Link>
            </div>
        </section>
    );
}

export default Team;