import { useEffect } from "react";
import Banner from "./Banner";
import Cards from "./Cards";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <div >
                <Cards></Cards>
            </div>
        </div>
    );
};

export default Home;