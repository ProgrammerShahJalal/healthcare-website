import React from 'react';
import './Home.css';
import Bannar from '../Bannar/Bannar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mt-5'>
            <Bannar></Bannar>
            <Services></Services>
        </div>
    );
};

export default Home;