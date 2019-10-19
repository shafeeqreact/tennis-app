import React from 'react';
import { Link } from 'react-router-dom';

const GoToTop = () => {
    return (
        <Link to='/' className="back-to-top">
            <i className="lni-chevron-up"></i>
        </Link>
    );
}

export default GoToTop;