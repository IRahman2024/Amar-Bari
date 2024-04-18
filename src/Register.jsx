import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Login/AuthProvider";
import { updateProfile } from "firebase/auth";
// import { auth } from "./Firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const nameRef = useRef(null);
    const imageRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();

        const email = emailRef.current.value;
        const pass = passwordRef.current.value;
        const url = imageRef.current.value;
        const name = nameRef.current.value;

        if(pass.length<6){
            return toast.error('password must be 6 characters long!');
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(pass)){
            return toast.error('there must be at least 1 uppercase, 1 lowercase in the password');
        }


        createUser(email, pass)
            .then((result) => {
                console.log(result.user)
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: url
                })
                    .then(() => {
                        console.log('photo succsefull');
                    })
                    .catch((error) => {
                        console.log(error.message)
                    })
                toast('profile created');
            })
            .catch((error) => {
                toast.error('something went wrong try again');
            })
    }

    return (
        <div className="bg-white">
            <Helmet>
                <title>Register New Account</title>
            </Helmet>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Registration form!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body bg-white">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' ref={nameRef} placeholder="Name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='image' ref={imageRef} placeholder="Image url" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    name='email' ref={emailRef} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' ref={passwordRef} className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <h1 className="text-base">Already have an account?
                                    <Link to='/login'><span className="hover:text-blue-500"> Login here</span></Link>
                                </h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
            position="top-center"
            />
        </div>
    );
};

export default Register;