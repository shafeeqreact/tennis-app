import React from 'react';

const SetTable = ({ sets, first_player_id, second_player_id }) => {
    return (
        <table className="table table-bordered">
            <tbody>
                <tr>
                    <th className="text-left">Federer</th>
                    {sets.map(set =>
                        <td key={set.set_number}>
                            {set.winner_player_id === first_player_id ? <strong>{set.first_player_games_won}</strong> : set.first_player_games_won}
                            {set.is_tiebreak ? <sup>{set.first_player_tiebreakers_won}</sup> : null}
                        </td>
                    )}
                </tr>
                <tr>
                    <th className="text-left">Nadal</th>
                    {sets.map(set =>
                        <td key={set.set_number}>
                            {set.winner_player_id === second_player_id ? <strong>{set.second_player_games_won}</strong> : set.second_player_games_won}
                            {set.is_tiebreak ? <sup>{set.second_player_tiebreakers_won}</sup> : null}
                        </td>
                    )}
                </tr>
            </tbody>
        </table>

    );
}

export default SetTable;