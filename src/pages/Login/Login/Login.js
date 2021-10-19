import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const auth = getAuth();
    const { signInUsingGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';
    console.log('came from', location.state?.from);

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleLogin = e => {
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password, error)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                setError(error.message);
            })
        e.preventDefault()
    }


    return (
        <div className='mt-5 py-5 text-center'>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin}>
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
            <button onClick={handleGoogleLogIn} className="service-btn">Google Sign In</button>
        </div>
    );
};

export default Login;