import propType from "prop-types";
function JobListCard({ job, activeJob, noImage = false }) {
    return (
        <div
            className={`flex w-full text-left items-center gap-4 p-3 rounded-md cursor-pointer bg-transparent ${
                activeJob ? "" : "border-2"
            } ${
                job.post_id === activeJob
                    ? "!bg-purple-100 text-[color:var(--primary-color)]"
                    : "hover:bg-gray-50"
            } `}
        >
            {!noImage && (
                <div className="w-2/12 flex justify-between items-center">
                    {job?.post_image && (
                        <img
                            className="object-contain rounded-full aspect-square"
                            src={job?.post_image}
                            alt={job?.company}
                        />
                    )}
                </div>
            )}
            <div className="w-10/12 overflow-hidden">
                <h2 className="text-base font-medium text-[color:var(--primary-color)]">
                    {job.post_title}
                </h2>
                <p className="text-sm text-[color:var(--secondary-color)] font-medium">
                    {job.company}
                </p>
                <p className="text-xs text-[color:var(--secondary-color)]">
                    {job.designation}
                </p>

                <p className="text-xs my-1">
                    <span className="block w-fit text-ellipsis overflow-hidden whitespace-nowrap">
                        <i className="fa-solid fa-map-marker-alt mr-2"></i>
                        {job.address}
                    </span>
                    <span className="block w-fit">
                        <i className="fa-solid fa-indian-rupee-sign mr-2"></i>
                        {`${job.minsalary} - ${job.maxsalary}`}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default JobListCard;

JobListCard.propTypes = {
    job: propType.object.isRequired,
    activeJob: propType.number,
    noImage: propType.bool,
};
