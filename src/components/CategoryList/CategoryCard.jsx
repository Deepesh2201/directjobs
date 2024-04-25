import proptypes from "prop-types";

function CategoryCard({ name, image, total_jobs }) {
    return (
        <div className="flex gap-4 w-full h-full sm:block group p-4 sm:py-6 rounded-lg sm:w- m-auto hover:drop-shadow-2xl drop-shadow bg-white transition-all ease-linear">
            <div
                className={`sm:mx-auto flex h-12 w-12 sm:h-20 sm:w-20 aspect-square items-center justify-center rounded-full group-hover:text-white text-2xl sm:text-4xl group-hover:text-2xl delay-75 transition-all ease-linear`}
            >
                <img src={image} alt="" />
            </div>
            <div className="text-justify sm:text-center">
                <h3 className="sm:mt-3 text-sm font-semibold text-black text-wrap line-clamp-2">
                    {name}
                </h3>
                <p className="text-xs text-gray-600">
                    {Boolean(total_jobs) && (
                        <span>
                            {total_jobs > 1
                                ? `${total_jobs} Jobs Available`
                                : `${total_jobs} Job Available`}
                        </span>
                    )}

                    {Boolean(!total_jobs) && (
                        <span>
                            Jobs Posting Soon
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
}

export default CategoryCard;

CategoryCard.propTypes = {
    name: proptypes.string.isRequired,
    image: proptypes.string.isRequired,
    total_jobs: proptypes.number.isRequired,
};
