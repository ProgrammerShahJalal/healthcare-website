import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const auth = getAuth();
    const { signInUsingGoogle } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        console.log(email, password, error);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                setError(error.message)
            })
        e.preventDefault()
    }
    return (
        <div className="text-center mt-5 py-5">
            <div>
                <h2>Please Register</h2>
                <form onSubmit={handleRegistration}>
                    <input type="text" placeholder="your name" />
                    <br /> <br />
                    <input onBlur={handleEmailChange} type="email" placeholder='your email' required />
                    <br /> <br />
                    <input onBlur={handlePasswordChange} type="password" placeholder="create an password" required />
                    <br /> <br />
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
                <p>Already have an account?</p>
                <Link to='/login'>Login</Link>
                <br />
                <br />
                Or,
                <br />
                <br />
                <button onClick={signInUsingGoogle} className="service-btn">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;