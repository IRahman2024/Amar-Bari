import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Login/AuthProvider";

const Card = ({ card }) => {

    const { descriptions, id, image_url, location, price, status, total_area, estate_title } = card;
    const { user } = useContext(AuthContext);

    return (
        <div className="my-3">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="max-h-3/4"><img src={image_url} /></figure>
                <div className="card-body text-start">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{location}</p>
                    <p>{status}</p>
                    <p>{total_area} sq foot</p>
                    <div className="card-actions justify-end">
                        {
                            user ?
                                <Link to={`/card/${id}`}>
                                    <button className="btn btn-primary">View details</button>
                                </Link> :
                                <Link to={'login'}>
                                    <button className="btn btn-primary">View details</button>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;