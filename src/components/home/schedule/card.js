import React from 'react';
import SetTable from './setTable';
import GameTable from './gameTable';

const Card = (props) => {
    const { round_id } = props;

    const { match_id, show, first_player_url, second_player_url, match_date, match_time, first_player_id, second_player_id,
        first_player_last_name, second_player_last_name, match_location, sets } = props.match;

    return (
        <div className="card">
            <div id={`heading${match_id}${round_id}`}>
                <div className="collapsed card-header" data-toggle="collapse" data-target={`#collapse${match_id}${round_id}`}
                    aria-expanded="false" aria-controls={`collapse${match_id}${round_id}`}>
                    <div className="row">
                        <div className="col-3">
                            <div className="images-box">
                                <img className="img-fluid" src={first_player_url} alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <h4 className="mt-2">{first_player_last_name} V/S {second_player_last_name}</h4>
                            <h5 className="name"><span>Date: </span>{match_date} <br /> <span>Time: </span>{match_time}</h5>
                        </div>
                        <div className="col-3">
                            <div className="images-box">
                                <img className="img-fluid" src={second_player_url} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={`collapse${match_id}${round_id}`} className={show ? "collapse show" : "collapse"}
                aria-labelledby={`heading${match_id}${round_id}`} data-parent={`#accordion${round_id}`}>
                <div className="card-body">
                    <div className="set-table">
                        <SetTable sets={sets} first_player_id={first_player_id} second_player_id={second_player_id} />
                    </div>
                    <div className="location">
                        <span>Location: </span>{match_location}
                        <span>Show Games</span>
                    </div>
                    <div className="game-table">
                        {sets.map(set =>
                            <div>
                                <h5 className="text-left">Set - {set.set_number}:</h5>
                                <GameTable games={set.games} first_player_id={first_player_id} second_player_id={second_player_id} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Card;