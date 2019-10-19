import React, { useState, useEffect } from 'react';

const Player = (props) => {
    const [player, setPlayer] = useState([]);
    console.log(props)
    useEffect(() => {
        let player =
        {
            "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
            "facebook_link": "https://www.facebook.com"
        };
        setPlayer(player);
    }, []);

    return (
        <section id="team" className="section-padding text-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="team-img">
                            <img className="img-fluid" style={{ height: 500 }} src={player.avatar} alt={player.first_name} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <ul className="social-icons">
                            {player.facebook_link && <li><a href={player.facebook_link}><i className="lni-facebook-filled" aria-hidden="true"></i></a></li>}
                            {player.twitter_link && <li><a href={player.twitter_link}><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>}
                            {player.linkedin_link && <li><a href={player.linkedin_link}><i className="lni-linkedin-filled" aria-hidden="true"></i></a></li>}
                            {player.behance_link && <li><a href={player.behance_link}><i className="lni-behance" aria-hidden="true"></i></a></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Player;