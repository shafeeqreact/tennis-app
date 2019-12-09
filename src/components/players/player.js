import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getPlayer } from '../../redux';

import PreLoader from '../common/preLoader';
import SectionHeader from '../common/sectionHeader';

const Player = (props) => {
    const { isLoading, error, player } = useSelector(state => state.players);

    const dispatch = useDispatch();

    useEffect(() => {
        const id = parseInt(props.match.params.id);
        dispatch(getPlayer(id));
    }, []);

    if (isLoading)
        return <PreLoader />

    if (error)
        return <div className="col-sm-12 col-md-12 col-lg-12">Something went wrong!! {error}</div>

    // This is to avoid the first time loading error
    if (!player.avatar && !player.first_name && !player.social_networks)
        return null

    return (
        <section id="team" className="section-padding">
            <div className="container">
                <SectionHeader
                    name={`${player.first_name} ${player.last_name}`}
                />
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="team-img">
                            <img className="img-fluid" style={{ height: 500 }} src={player.avatar} alt={player.first_name} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 text-left">
                        <div className="location">
                            <span>Name : </span>{`${player.first_name} ${player.last_name}`}<br />
                            <span>Date : </span>testing<br />
                            <span>Time : </span>testing<br />
                            <span>Location : </span>testing<br />
                        </div>
                        <ul className="social-icons">
                            {player.social_networks.map(sn =>
                                sn.link && <li key={sn._id} ><a href={sn.link}><i className={`lni-${sn.type}-filled`} aria-hidden="true"></i></a></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <Link to='/players' className="btn btn-common mt-30 wow fadeInUp" data-wow-delay="1.9s">All Players</Link>
        </section>
    );
}

export default Player;