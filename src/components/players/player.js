import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PreLoader from '../home/preLoader';
import { getPlayer } from '../../redux';

const Player = (props) => {
    const player = useSelector(state => state.player);
    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlayer(props.match.params.id))
    }, []);

    if (isLoading)
        return <PreLoader />

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