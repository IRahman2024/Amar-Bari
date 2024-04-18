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
            <div className="text-center my-5 grid gap-2 lg:gap-5">
                <p className="text-4xl font-bold">Our testimonials</p>
            </div>
            <div className="m-8 grid gap-4 grid-cols-1 lg:grid-cols-2">
                <p>
                    <h1 className="text-black font-bold text-3xl">Outstanding Service!</h1>
                    <p className="text-gray-500 lg:w-1/2">I recently bought my first home with <span className="text-xl">Amar Bari</span>, and I couldn't be more thrilled with the entire process. From the initial consultation to the closing, the team was incredibly supportive and knowledgeable. They helped me find the perfect home within my budget and made the whole experience stress-free. I highly recommend them to anyone looking to buy a home!</p>
                </p>
                <p>
                    <h1 className="text-black font-bold text-3xl">Professional and Reliable!</h1>
                    <p className="text-gray-500 lg:w-1/2">Buying a house can be overwhelming, but the team at <span className="text-xl">Amar Bari</span> made it so easy for us. They were always available to answer our questions and provided us with expert advice. We found the perfect property and couldn't be happier with our purchase. Thank you, [Your Company Name], for your professionalism and reliability!</p>
                </p>
                <p>
                    <h1 className="text-black font-bold text-3xl">A Seamless Experience!</h1>
                    <p className="text-gray-500 lg:w-1/2">Our experience with <span clas
                    text-xl>Amar Bari</span> was absolutely fantastic. They listened to our needs and preferences and presented us with great options. When we found the right home, they handled everything with precision and care. The process was seamless, and we couldn't be more pleased. Thank you for helping us find our dream home!</p>
                </p>
                <p>
                    <h1 className="text-black font-bold text-3xl">A Dream Come True!</h1>
                    <p className="text-gray-500 lg:w-1/2">Working with <span className="text-xl">Amar Bari</span> was a dream come true! Their team was so patient and helpful throughout the entire buying process. They made sure we understood every step and were always available to answer our questions. Thanks to them, we found our forever home, and we couldn't be happier!</p>
                </p>
                
            </div>
            <div >
                <Cards></Cards>
            </div>
        </div>
    );
};

export default Home;