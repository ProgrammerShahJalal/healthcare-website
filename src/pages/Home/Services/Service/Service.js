import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, description, id } = service;
    return (
        <div className='col col-lg-4 col-md-6 col-sm-12'>
            <img className="img-fluid mt-5" src={img} alt="" />
            <h3 className='service-title'>{name}</h3>
            <p className='service-paragraph'>{description}</p>
            <div className="text-center">
                <Link to={`/servicedetails/${id}`}>
                    <button className="service-btn">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;