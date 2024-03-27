import propType from "prop-types";
function JobListCard({ job, activeJob }) {

    return (
        <div
            className={`flex w-full text-left items-center gap-4 p-4 rounded-md cursor-pointer ${
                job.id === activeJob?
                "bg-purple-200 text-[color:var(--primary-color)]": "hover:bg-gray-100"
            }`}
        >
            <div className="w-16 h-16">
                {job?.logo && <img src={job?.logo} alt={job?.company} />}
            </div>
            <div>
                <h2 className="text-lg font-medium text-[color:var(--primary-color)]">
                    {job.title}
                </h2>
                <p className="text-sm text-[color:var(--secondary-color)]">
                    {job.company}
                </p>
                <p className="text-sm text-[color:var(--secondary-color)]">
                    {job.location}
                </p>
            </div>
        </div>
    );
}

export default JobListCard;

JobListCard.propTypes = {
    job: propType.object.isRequired,
    activeJob: propType.number.isRequired,
};
