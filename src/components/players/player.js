import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPlayer } from '../../redux';

import PreLoader from '../common/preLoader';

const Player = (props) => {
    const { isLoading, error, player } = useSelector(state => state.players);

    const social_networks = [
        { type: 'facebook', link: 'https://www.facebook.com' },
        { type: 'twitter', link: 'https://www.twitter.com' },
        { type: 'linkedin', link: 'https://www.linkedin.com' },
        { type: 'behance', link: 'https://www.behance.com' }
    ]

    const { avatar, first_name } = player;

    const dispatch = useDispatch();

    useEffect(() => {
        const id = parseInt(props.match.params.id);
        dispatch(getPlayer(id));
    }, []);

    if (isLoading)
        return <PreLoader />

    if (error)
        return <div className="col-sm-12 col-md-12 col-lg-12">Something went wrong!! {error}</div>

    return (
        <section id="team" className="section-padding text-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="team-img">
                            <img className="img-fluid" style={{ height: 500 }} src={avatar} alt={first_name} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <ul className="social-icons">
                            {social_networks.map(sn =>
                                sn.link && <li><a href={sn.link}><i className={`lni-${sn.type}-filled`} aria-hidden="true"></i></a></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Player;