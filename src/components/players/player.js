import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPlayer } from '../../redux';

import PreLoader from '../common/preLoader';

const Player = (props) => {
    const { isLoading, error, player } = useSelector(state => state.players);

    const dispatch = useDispatch();

    useEffect(() => {
        const id = parseInt(props.match.params.id);
        dispatch(getPlayer(id));
    }, []);

    console.log('isLoading - ', isLoading)

    if (isLoading)
        return <PreLoader />

    if (error)
        return <div className="col-sm-12 col-md-12 col-lg-12">Something went wrong!! {error}</div>

    // This is to avoid the first time loading error
    if (!player.avatar && !player.first_name && !player.social_networks)
        return null

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
                            {player.social_networks.map(sn =>
                                sn.link && <li key={sn._id} ><a href={sn.link}><i className={`lni-${sn.type}-filled`} aria-hidden="true"></i></a></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Player;