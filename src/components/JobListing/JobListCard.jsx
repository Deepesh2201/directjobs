import propType from "prop-types";
import { useEffect, useState } from "react";
function JobListCard({ job, activeJob }) {
    // create a use effect for featured banner like, new, 2hrs ago, 2 days ago, etc. based on postedOn
    const [featuredLabel, setFeaturedLabel] = useState("");
    useEffect(() => {
        const postedOn = new Date(job.postedOn);
        const currentDate = new Date();
        const diffTime = Math.abs(currentDate - postedOn);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays === 0) {
            setFeaturedLabel("New");
        } else if (diffDays === 1) {
            setFeaturedLabel("1 day ago");
        } else {
            setFeaturedLabel(`${diffDays} days ago`);
        }
    }, [job.postedOn]);

    return (
        <div
            className={`flex w-full text-left items-center gap-4 p-4 rounded-md cursor-pointer ${
                job.id === activeJob
                    ? "bg-purple-200 text-[color:var(--primary-color)]"
                    : "hover:bg-gray-100"
            }`}
        >
            <div className="w-16 h-16">
                {job?.logo && <img className="w-16 h-16 object-contain" src={job?.logo} alt={job?.company} />}
            </div>
            <div className="w-full">
                <h2 className="text-base font-medium text-[color:var(--primary-color)]">
                    {job.title}
                </h2>
                <p className="text-sm text-[color:var(--secondary-color)] font-medium">
                    {job.company}
                </p>
                <p className="text-xs text-[color:var(--secondary-color)]">
                    {job.location}
                    <span>
                        <span className="mx-1">&bull; {job.type}</span>
                    </span>
                </p>
                <p className="text-xs text-green-500">{featuredLabel}</p>
            </div>
        </div>
    );
}

export default JobListCard;

JobListCard.propTypes = {
    job: propType.object.isRequired,
    activeJob: propType.number.isRequired,
};
