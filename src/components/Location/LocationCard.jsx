import { useEffect, useState } from "react";
import { getUnsplashImage } from "../../utils/UnsplashImage";
import PrimaryButton from "../SharedComponents/PrimaryButton";
import defaultImage from "../../assets/images/location_card_default.png";
import PropTypes from "prop-types";

function LocationCard({ name, total_jobs, loc_id }) {
    const [image, setImage] = useState(defaultImage);

    useEffect(() => {
        getUnsplashImage(name).then((data) => {
            setImage(data?.urls?.small || defaultImage);
        });
        console.log(image);
    }, [name, image]);

    return (
        <div>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover object-center"
                />
                <div className="p-4 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold">
                            Jobs in {name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {total_jobs || 0} Jobs available
                        </p>
                    </div>
                    <PrimaryButton
                        to={`/jobs?loc=${loc_id}`}
                        className="bg-primary px-4 py-2 rounded-md"
                    >
                        Explore
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}

export default LocationCard;

LocationCard.propTypes = {
    name: PropTypes.string,
    total_jobs: PropTypes.number,
    loc_id: PropTypes.number,
};
