import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-health fixed-top">
        <div className="container">
          <img className='logo' src={logo} alt="" />
          <Link to='/' className="navbar-brand text-white"><b>SF <span className='highlight'>Health</span>care</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/home' className="nav-link active text-white" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/services' className="nav-link active text-white" aria-current="page">Services</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link active text-white" aria-current="page">Contact Us</Link>
              </li>
              {
                user.email ?
                  <div className="mt-2 ms-5 text-white"> <img className='profile' src={user.photoURL} alt="" /> Welcome <span>{user.displayName}</span> <button className="logout-btn" onClick={logout}>Logout</button>
                  </div>
                  :
                  <li className="nav-item">
                    <Link to='/login' className="nav-link active text-white" aria-current="page">Login</Link>
                  </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;