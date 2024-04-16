import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
// import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoader(true);
        return signOut(auth)
            .then(() => {
                console.log('current user: ', user.email);
            })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
            // console.log('observing current user inside useEffect Auth provider: ', currentUser.photoURL);

        })
        return () => {
            unSubscribe();
            // setLoader(false);
        }
    }, [user])

    // const githubProvider = new GithubAuthProvider();

    const handleGoogleAuth = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo =
    {
        user,
        setUser,
        createUser,
        signInUser,
        logOut,
        handleGoogleAuth,
        loader
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;