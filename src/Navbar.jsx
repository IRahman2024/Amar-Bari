import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Login/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const links = <>
        <li><Link to='/'>Home</Link></li>
        {user &&
            (
                <>
                    <li><Link to='/profile'>Profile</Link></li> <li><Link to='/Update'>Update Profile</Link></li>
                </>
            )
        }
    </>

    const handleSignOut = () => {
        return logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Amar Bari</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {user ?
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div title={user.displayName} className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                        : <div></div>
                    }
                    {user ? <button onClick={handleSignOut} className="btn btn-primary btn-sm">Signout</button> : <Link to='/login'><button className="btn btm-sm">Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;