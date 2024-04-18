import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Root = () => {
    return (
        <div className="bg-white">
            <Navbar></Navbar>
            <div className="sm:mx-0 md:mx-12 lg:mx-24">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;