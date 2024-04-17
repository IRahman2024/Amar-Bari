import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { AuthContext } from "./Login/AuthProvider";

const Cards = () => {

    const { loader, setLoader } = useContext(AuthContext);

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('RealState.json')
            .then(res => res.json())
            .then(data => {
                setCards(data);
                setLoader(false)
            })
    })

    if (loader) {
        return <div className="flex justify-center items-center h-[800px]">
            <span className="loading loading-spinner size-40
        "></span>
        </div>
    }

    // console.log(cards);

    return (
        <div className="my-5 text-center">
            <h1 className="text-3xl font-semibold">New Properties</h1>
            <div className="grid grid-cols-3 gap-5 mt-6">
                {
                    cards.map((card, idx) => <Card key={idx} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;