import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    console.log('came from', location.state?.from);
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='login-form'>
            <div >
                <h2>Login</h2>
                <form action="">
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='password' />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john? <Link to='/register'>Create Account</Link></p>
                <div>----------------------</div>
                <button onClick={handleGoogleLogIn} className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;