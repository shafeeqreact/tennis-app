import React from 'react';

const ListItem = ({ round }) => {
    const { round_id, round_name, round_number, show } = round;

    return (
        <li className="nav-item">
            <a className={show ? "nav-link active" : "nav-link"} id={'${round_id}-tab'} data-toggle="tab"
                href={`#${round_id}`} role="tab" aria-controls={`${round_id}`} aria-expanded="true">
                <div className="item-text">
                    <h4>{round_name}</h4>
                    <h5>Round No - {round_number}</h5>
                </div>
            </a>
        </li>
    );
}

export default ListItem;