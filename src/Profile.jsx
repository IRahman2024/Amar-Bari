import { useContext } from "react";
import { AuthContext } from "./Login/AuthProvider";
import 'animate.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = () => {

    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col animate__animated animate__backInUp">
                    <img 
                    className="w-24 rounded-full"
                    src={user?.photoURL} alt="" />
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">{user?.displayName}</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input readOnly value={user?.displayName} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input readOnly value={user?.photoURL} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input readOnly value={user?.email} className="input input-bordered" required />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Profile;