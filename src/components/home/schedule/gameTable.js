import React from 'react';

const GameTable = ({ games, players }) => {
    const { first_player_id, first_player_last_name, second_player_id, second_player_last_name } = players;

    return (
        <table className="table table-bordered">
            <tbody>
                <tr>
                    <th className="text-left">{first_player_last_name}</th>
                    {games.map(game =>
                        <td key={game.game_number}>
                            {game.winner_player_id === first_player_id ? <strong>{game.first_player_points}</strong> : game.first_player_points}
                        </td>
                    )}
                </tr>
                <tr>
                    <th className="text-left">{second_player_last_name}</th>
                    {games.map(game =>
                        <td key={game.game_number}>
                            {game.winner_player_id === second_player_id ? <strong>{game.second_player_points}</strong> : game.second_player_points}
                        </td>
                    )}
                </tr>
            </tbody>
        </table>
    );
}

export default GameTable;