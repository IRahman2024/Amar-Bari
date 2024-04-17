import { updateProfile } from "firebase/auth";
import { useContext, useRef } from "react";
import { auth } from "./Firebase/firebase.config";
import { AuthContext } from "./Login/AuthProvider";


const Update = () => {

    const {user} = useContext(AuthContext);

    const nameRef = useRef(null);
    const imageRef = useRef(null);

    console.log(user.displayName)
    console.log(user.photoURL)

    const handleSubmit = e => {
        e.preventDefault();

        const url = imageRef.current.value;
        const name = nameRef.current.value;

        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        })
            .then(() => {
                alert('photo succsefull');
            })
            .catch((error) => {
                alert(error.message)
            })
        alert('profile created');

    }



    return (
        <div className="my-14">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Update You Profile</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' ref={nameRef} placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='image' ref={imageRef} placeholder="Image url" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Update;