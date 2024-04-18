import { useEffect } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import { Helmet } from "react-helmet-async";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Amar Bari | Home</title>
            </Helmet>
            <Banner></Banner>
            <div >
                <Cards></Cards>
            </div>
        </div>
    );
};

export default Home;