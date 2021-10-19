import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container my-5">
            <h1 className="text-center pt-5">Our Services</h1>
            <div className="row d-flex justify-content-center align-items-center flex-column flex-lg-row flex-md-row">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;