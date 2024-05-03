import PropTypes from "prop-types";
import formatAmount from "../../utils/formatAmount";
import { Link } from "react-router-dom";

function JobListingCard({ job }) {
    return (
        <Link
            to={`/jobs/details?job_id=${job.post_id}`}
            className="flex w-full h-full gap-4 p-3 md:p-5 rounded-md cursor-pointer bg-white border shadow-sm hover:shadow-md transition-all ease-in-out"
        >
            <div className="overflow-clip w-full">
                <div className="flex justify-between">
                    <div className="flex gap-4 mb-4">
                        <div className="w-10 flex justify-between items-center rounded-md overflow-hidden border">
                            {job.post_image && (
                                <img
                                    className="object-contain aspect-square"
                                    src={job.post_image}
                                    alt={job.post_title}
                                />
                            )}
                        </div>
                        <div className="leading-tight">
                            <h2 className="leading-tight text-base font-medium text-[color:var(--primary-color)]">
                                {job.post_title}
                            </h2>
                            <p className="leading-tight text-sm text-[color:var(--secondary-color-gray)]">
                                {job.designation}
                            </p>
                        </div>
                    </div>
                    <div className="text-green-500 px-1.5 rounded py-0.5 text-xs flex items-center h-fit gap-1">
                        <i className="fa-solid fa-arrow-trend-up"></i>0.5 K
                    </div>
                </div>
                <div className="space-y-[3px] w-full md:ml-2 text-xs md:text-sm">
                    {job.location && (
                        <div className="text-sm text-[color:var(--secondary-color-gray)] flex items-center font-medium">
                            <p>
                                <i className="fa-solid fa-city mr-2 text-xs"></i>
                                {job.location}
                            </p>
                        </div>
                    )}
                    {job.address && (
                        <div className="text-sm text-[color:var(--secondary-color-gray)] flex items-center">
                            <p className="w-5 mr-1 flex justify-center">
                                <i className="fa-solid fa-map-marker-alt mr-2 text-xs"></i>
                            </p>
                            <p>
                                <span className="font-medium">
                                    Job Location:
                                </span>{" "}
                                {job.address}
                            </p>
                        </div>
                    )}
                    {job.salary && (
                        <p className="text-sm text-[color:var(--secondary-color-gray)] flex items-center">
                            <span className="w-5 mr-1 flex justify-center">
                                <i className="fa-solid fa-money-bill-wave mr-2 text-xs"></i>
                            </span>
                            <span>
                                <span className="font-medium">
                                    Avg. Salary:
                                </span>{" "}
                                {formatAmount(job.salary)}
                            </span>
                        </p>
                    )}
                    {
                        <p className="text-sm text-[color:var(--secondary-color-gray)] flex items-center">
                            <span className="w-5 mr-1 flex justify-center">
                                <i className="fa-solid fa-money-bills mr-2 text-xs"></i>
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="font-medium">
                                    Salary Range:
                                </span>{" "}
                                {job.minsalary && job.maxsalary && (
                                    <span>
                                        {" "}
                                        {formatAmount(job.minsalary)} -{" "}
                                        {formatAmount(job.maxsalary)}
                                    </span>
                                )}
                            </span>
                        </p>
                    }
                    {job.skills && (
                        <p className="text-sm text-[color:var(--secondary-color-gray)] flex items-center w-full ">
                            <span className="w-5 mr-1 flex justify-center">
                                <i className="fa-solid fa-tools mr-2 text-xs"></i>
                            </span>
                            <span className="w-full line-clamp-1 whitespace-nowrap">
                                {job.skills.split(",").map((skill, index) => (
                                    <span
                                        key={index}
                                        className="font-medium bg-slate-100 py-1 px-3 rounded-xl text-xs overflow-clip mr-1"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}

export default JobListingCard;

JobListingCard.propTypes = {
    job: PropTypes.object.isRequired,
};
