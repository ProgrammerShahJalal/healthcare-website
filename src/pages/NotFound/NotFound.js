import React from 'react';
import { Link } from 'react-router-dom';
import notfoundImg from '../../images/404.svg';

const NotFound = () => {
    return (
        <div className="text-center pt-5 mt-5">
            <h2>Oops! Page Not Found.</h2>
            <img className='perfect-img' src={notfoundImg} alt="" /> <br />
            <Link to="/">
                <button className='btn-grad'>Return Home</button>
            </Link>
        </div>
    );
};

export default NotFound;