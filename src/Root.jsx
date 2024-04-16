import { Outlet } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";

const Root = () => {
    return (
        <div className="mx-24">
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;