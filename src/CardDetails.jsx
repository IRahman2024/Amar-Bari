import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {

    const houses = useLoaderData();
    const { idm } = useParams();

    const house = houses.find(house => house.id == idm)

    const { description, id, image_url, location, price, status, total_area, estate_title } = house;


    return (
        <div>
            <Helmet>
                <title>Property Details</title>
            </Helmet>
            <div className="flex lg:flex-row md:flex-col flex-col items-center lg:justify-around my-14">
                <div className="lg:w-1/2 md:w-3/4 sm:w-[200px] lg:mb-0 mb-8">
                    <img className="rounded-2xl" src={image_url} alt="" />
                </div>
                <div className="grid text-left sm:gap-1 gap-5">
                    <h1 className="text-3xl font-bold">{estate_title}</h1>
                    <p className="text-gray-500">Location: {location}</p>
                    <p className="border-y-2 py-2 text-red-400"><span className="font-semibold">{status}</span></p>
                    <p className="sm:w-[200px] lg:w-[550px]"><span className="font-bold">Description : </span>{description}</p>
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
        </div>
    );
};

export default CardDetails;