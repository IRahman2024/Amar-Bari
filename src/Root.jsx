import { Outlet } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
            <h1>ready?</h1>
            <Home></Home>
            {/* <Outlet></Outlet> */}
            <Footer></Footer>
        </div>
    );
};

export default Root;