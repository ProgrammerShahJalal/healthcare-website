import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row d-flex justify-content-around align-items-center">
                    <div className="col-md-3">
                        <div className="text-center">
                            <img className='w-25' src={logo} alt="" />
                            <h3>About SF Healthcare</h3>
                        </div>
                        <p className='footer-paragraph'>Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people.
                        </p>
                    </div>
                    <div className="col-md-2">
                        <h3>Quick Link</h3>
                        <div className="row">
                            <Link className="text-decoration-none text-white" to="/home">Home</Link>
                            <Link className="text-decoration-none text-white" to="/services">Services</Link>
                            <Link className="text-decoration-none text-white" to="/contact">Contact Us</Link>
                            <Link className="text-decoration-none text-white" to="/team">Our Team</Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Contact Details</h3>
                        <div className="row">
                            <Link className="text-decoration-none text-white" to="/contact#location"><i className="fas fa-map-marker-alt"></i> 789 Main rd, CA 12345 USA</Link>
                            <Link className="text-decoration-none text-white" to="/contact"><i className="fas fa-phone"></i> + 888 456-7890</Link>
                            <Link className="text-decoration-none text-white" to="/contact"><i className="fas fa-envelope"></i> sfhealthcare@gmail.com</Link>
                            <Link className="text-decoration-none text-white" to="/contact"><i className="fas fa-globe-asia"></i> www.sfhealthcare.com</Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Follow Us</h3>
                        <div className="footer-icon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-google-plus-g"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center last-footer'>
                <small>© 2022 All Rights Reserved by <span id="special">Shah Jalal</span></small>
            </div>
        </div>
    );
};

export default Footer;