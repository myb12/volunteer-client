import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import googleIcon from '../../images/logo/google.png';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, setIsLoading, setName, setEmail, email, password, setPassword, setUserName, error, setError, registerNewUser, loginWithEmailAndPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(({ user }) => {
                history.push(location.state?.from || '/');
                setError('');
                window.scrollTo(0, 0);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div className="custom-container">
            <div className="container">
                <div className="text-center">
                    <Link to="/home">
                        <img src={logo} alt="logo" className="my-3" />
                        <br />
                        <Link to="/home">
                            <Button variant="primary">Go Back</Button>
                        </Link>
                    </Link>
                </div>
                <div className="login-box col-md-6 offset-md-3">
                    <h4 className="font-weight-bold text-center">Login With</h4>
                    <button className="my-3" onClick={handleGoogleSignIn}>
                        <img src={googleIcon} alt="google-icon" /> Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;