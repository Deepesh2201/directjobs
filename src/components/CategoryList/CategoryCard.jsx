import proptypes from "prop-types";

function CategoryCard({ name, faicon, color, jobs }) {
    const jobsCount = jobs.toLocaleString();
    return (
        <div className="flex gap-4 w-full sm:block group p-4 sm:py-6 rounded-lg sm:w-60 m-auto hover:drop-shadow-2xl drop-shadow bg-white transition-all ease-linear">
            <div
                className={`sm:mx-auto flex h-12 w-12 sm:h-20 sm:w-20 aspect-square items-center justify-center rounded-full bg-[${color}] group-hover:bg-[color:var(--primary-color)] group-hover:text-white text-2xl sm:text-4xl group-hover:text-2xl delay-75 transition-all ease-linear`}
            >
                <i className={`${faicon}`}></i>
            </div>
            <div className="text-justify sm:text-center">
                <h3 className="sm:mt-3 text-lg font-semibold text-black">
                    {name}
                </h3>
                <p className="text-sm text-gray-600">
                    {jobsCount} Jobs Available
                </p>
            </div>
        </div>
    );
}

export default CategoryCard;

CategoryCard.propTypes = {
    name: proptypes.string.isRequired,
    faicon: proptypes.string.isRequired,
    color: proptypes.string.isRequired,
    jobs: proptypes.number.isRequired,
};
