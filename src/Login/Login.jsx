import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {

    const { signInUser } = useContext(AuthContext);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

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
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className="my-14">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                                <input type="password" placeholder="password" name='password' ref={passwordRef} className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <h1 className="text-base">New here? <Link to='/register'><span className="hover:text-blue-500">Register now</span></Link></h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;