import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleLogIn = e => {
        e.preventDefault()
        console.log(email, password);
    }
    return (
        <div className='mt-5 py-5 text-center'>
            <h2>Please Login</h2>
            <form onSubmit={handleLogIn}>
                <input onBlur={handleEmailChange} type="email" placeholder="email" />
                <br /> <br />
                <input onBlur={handlePasswordChange} type="password" placeholder="password" />
                <br /> <br />
                <input className="submit-btn" type="submit" value="Submit" />
            </form>
            <br />
            <p>New to SF Healthcare?</p>
            <Link to='/register'>Create An Account.</Link>
            <br />
            <br />
            Or,
            <br />
            <br />
            <button onClick={signInUsingGoogle} className="service-btn">Google Sign In</button>
        </div>
    );
};

export default Login;