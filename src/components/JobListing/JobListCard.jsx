import propType from "prop-types";
import { useEffect, useState } from "react";
function JobListCard({ job, activeJob, noImage = false }) {
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
            className={`flex w-full text-left items-center gap-4 p-3 rounded-md cursor-pointer bg-transparent ${
                job.post_id === activeJob
                    ? "!bg-purple-100 text-[color:var(--primary-color)]"
                    : "hover:bg-gray-100"
            }`}
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
                    <span>
                        {/* <span className="mx-1">&bull; {job.skills}</span> */}
                    </span>
                </p>
                {/* <p className="text-xs text-green-500">{featuredLabel}</p> */}

                <p className="text-xs text-green-500 my-1">
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
    activeJob: propType.number.isRequired,
    noImage: propType.bool,
};
