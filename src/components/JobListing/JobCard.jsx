import propType from "prop-types";
import formatAmount from "../../utils/formatAmount";
import { Link } from "react-router-dom";
function JobCard({ job, noImage = false }) {
    return (
        <Link to={`/jobs/details?job_id=${job.post_id}`} className="w-full cursor-pointer bg-transparent px-2 py-4">
            <div className="overflow-hidden">
                <div className="flex gap-2 items-center">
                    {!noImage && (
                        <div className="w-10 h-10 border rounded">
                            {job?.post_image && (
                                <img
                                    className="object-contain aspect-square"
                                    src={job?.post_image}
                                    alt={job?.company}
                                />
                            )}
                        </div>
                    )}
                    <div>
                        <h2 className="leading-tight text-base font-medium text-[color:var(--primary-color)]">
                            {job.post_title}
                        </h2>
                        <p className="leading-tight text-xs text-[color:var(--secondary-color)]">
                            {job.designation}
                        </p>
                    </div>
                </div>

                <p className="text-xs my-1 mx-0.5 space-y-1">
                    <span className="block w-fit text-ellipsis overflow-hidden whitespace-nowrap">
                        <i className="fa-solid fa-map-marker-alt mr-2"></i>
                        {job.location || job.address}
                    </span>
                    <span className="block w-fit">
                        <i className="fa-solid fa-indian-rupee-sign mr-2"></i>
                        {formatAmount(job.salary)}
                    </span>
                </p>
            </div>
        </Link>
    );
}

export default JobCard;

JobCard.propTypes = {
    job: propType.object.isRequired,
    activeJob: propType.number,
    noImage: propType.bool,
};
