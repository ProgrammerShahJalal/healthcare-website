import React from 'react';

const image = ({ image }) => {
    const { img } = image;
    return (
        <div className="col col-lg-4 col-md-6 col-sm-12">
            <img className="img-fluid mt-3 border border-success rounded" src={img} alt="" />
        </div>
    );
};

export default image;