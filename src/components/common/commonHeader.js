import React from 'react';

const CommonHeader = ({ name, tagline1, tagline2 }) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="section-title-header text-center">
                    <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">{name}</h1>
                    <p className="wow fadeInDown" data-wow-delay="0.2s">{tagline1}<br />{tagline2}</p>
                </div>
            </div>
        </div>
    );
}

export default CommonHeader;