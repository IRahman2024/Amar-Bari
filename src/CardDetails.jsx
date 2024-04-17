import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {

    const houses = useLoaderData();
    const { idm } = useParams(); 

    const house = houses.find(house => house.id == idm)

    const { description, id, image_url, location, price, status, total_area, estate_title } = house;
    

    return (
        <div className="flex justify-around my-14">
            <div className="w-1/2">
                <img className="rounded-2xl" src={image_url} alt="" />
            </div>
            <div className="grid text-left gap-5">
                <h1 className="text-3xl font-bold">{estate_title}</h1>
                <p className="text-gray-500">Location: {location}</p>
                <p className="border-y-2 py-2">{status}</p>
                <p className="w-[550px]"><span className="font-bold">Description : </span>{description}</p>
                <hr className="w-full my-2 border-2" />
                <div>
                    <div className="flex gap-3">
                        <p className="text-gray-500">Total Area:</p>
                        <p className="text-black font-bold">{total_area} sq foot</p>
                    </div>
                    <div className="flex gap-3">
                        <p className="text-gray-500">Price:</p>
                        <p className="text-black font-bold">{price}$</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;