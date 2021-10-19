import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInUsingEmailPassword } = useAuth();


    return (
        <div className='mt-5 py-5 text-center'>
            <h2>Please Login</h2>
            <form onSubmit={signInUsingEmailPassword}>
                <input type="email" placeholder="email" />
                <br /> <br />
                <input type="password" placeholder="password" />
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