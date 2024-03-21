function CategoryCard({ name, faicon, color, jobs}) {
    const jobsCount = jobs.toLocaleString();
    return (
        <div className="group py-6 rounded-lg w-60 m-auto hover:drop-shadow-2xl drop-shadow bg-white transition-all ease-linear">
            <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[${color}] group-hover:bg-[color:var(--primary-color)] group-hover:text-white text-4xl group-hover:text-2xl delay-75 transition-all ease-linear`}>
                <i className={`${faicon}`}></i>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-black">
                {name}
            </h3>
            <p className="text-sm text-gray-600">{jobsCount} Jobs Available</p>
        </div>
    );
}

export default CategoryCard;
