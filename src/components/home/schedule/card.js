import React, { useState } from 'react';
import SetTable from './setTable';
import GameTable from './gameTable';

const Card = ({ round_id, match }) => {
    const { match_id, show, first_player_url, second_player_url, match_date, match_time, first_player_id, second_player_id,
        first_player_last_name, second_player_last_name, match_location, sets, match_has_started } = match;

    const players = { first_player_id, first_player_last_name, second_player_id, second_player_last_name };

    const [showGames, setShowGames] = useState(false);

    const handleClick = () => {
        setShowGames(!showGames);
    }

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
                            <h5 className="name"><span>Round: </span>{round_id} <span style={{ marginLeft: "20px" }}>Match: </span>{match_id}</h5>
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
                    <div className="location">
                        <span>Date: </span>{match_date}
                        <span style={{ marginLeft: "20px" }} >Time: </span>{match_time}<br />
                        <span>Location: </span>{match_location}
                    </div>
                    <div className={match_has_started ? "collapse show" : "collapse"}>
                        <div className="set-table">
                            <hr />
                            <SetTable sets={sets} players={players} />
                        </div>
                        <button onClick={() => handleClick()} className="btn btn-common btn-rm">
                            {showGames ? 'Hide Games' : 'Show Games'}
                        </button>
                        <div className={showGames ? "game-table collapse show" : "game-table collapse"}>
                            <hr />
                            {sets.map(set =>
                                <div key={set.set_number} >
                                    <h5 className="text-left">Set - {set.set_number}:</h5>
                                    <GameTable games={set.games} players={players} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Card;