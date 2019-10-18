import React, { useState, useEffect } from 'react';

const Players = (props) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        let players = [
            { "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" },
            { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg" },
            { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg" },
            { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg" },
            { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg" },
            { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg" },
            { "id": 7, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg", "facebook_link": "https://facebook.com" },
            { "id": 8, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg", "twitter_link": "https://twitter.com" },
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