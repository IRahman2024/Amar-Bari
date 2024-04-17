import { useContext } from "react";
import { AuthContext } from "../Login/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { child } from "firebase/database";

const PvtRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center h-[800px]">
            <span className="loading loading-spinner size-40
            "></span>
        </div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to={location}></Navigate>
        
};

export default PvtRoute;