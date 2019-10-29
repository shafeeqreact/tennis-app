import React from 'react';
import ListItem from './listItem';

const ListGroup = ({ rounds }) => {
    return (
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            {rounds.map(round => <ListItem key={round.round_id} round={round} />)}
        </ul>
    );
}

export default ListGroup;