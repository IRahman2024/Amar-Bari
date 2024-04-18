import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { auth } from "../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Login = () => {

    const { signInUser, setUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [showPass, setShowPass] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passwordRef.current.value;
        // console.log(pass, email);

        signInUser(email, pass)
            .then((result) => {
                console.log(result.user);
                // e.target.reset(); //to clear form after login
                // navigate('/'); //to automatically open home after login 
                toast("Login successful!")
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                console.log(error.message);
                toast.error('Wrong credentials try again');
            })
    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleAuth = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                // alert('google login successfull');
                setUser(loggedInUser);
                toast("Login successful!")
            })
            .catch(error => {
                console.log('error: ', error.message)
                toast.error('Wrong credentials try again');
            })
    }
    const handleGitHubAuth = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                // alert('google login successfull');
                setUser(loggedInUser);
                toast("Login successful!")
            })
            .catch(error => {
                console.log('error: ', error.message)
                toast.error('Wrong credentials try again');
            })
    }

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="flex items-center justify-between input input-bordered
                                ">
                                    <input
                                        type={
                                            showPass ?
                                                'text' : 'password'
                                        }
                                        placeholder="password" name='password'
                                        ref={passwordRef} className="" required />
                                    <button onClick={() => setShowPass(!showPass)}>
                                        {showPass ?
                                            <img className="w-6" src="/src/assets/hide.png" alt="" />
                                            :
                                            <img className="w-6" src="/src/assets/eyeOpen.png" alt="" />
                                    }
                                    </button>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button
                                onClick={handleLogin}
                                className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <h1 className="text-base">New here? <Link to='/register'><span className="hover:text-blue-500">Register now</span></Link></h1>
                            </div>
                        </form>
                    </div>
                    <div className="flex gap-2">
                        <h1 className="text-base">login with:</h1>
                        <button onClick={handleGoogleAuth}><img className="w-5" src="/src/assets/google.png" alt="" /></button>
                        <button onClick={handleGitHubAuth}><img className="w-5" src="/src/assets/github.png" alt="" /></button>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;