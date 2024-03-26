import { useEffect, useState } from "react";
import { jobs as jobsData } from "./JobList";
import { getJobDetails } from "./JobList";
import PrimaryButton from "../SharedComponents/PrimaryButton";
import { Link } from "react-router-dom";

function JobListing() {
    const [jobs, setJobs] = useState(jobsData);
    const [jobId, setJibId] = useState(jobs[0].id);
    const [jobsCount] = useState(jobs.length);
    const [jobDetails, setJobDetails] = useState();

    useEffect(() => {
        setJobDetails(getJobDetails(jobId));
    }, [jobId]);

    // sort jobs by latest or oldest function by comapring postedOn date with current date
    const sortJobs = (sortType) => {
        const sortedJobs = jobs.sort((a, b) => {
            const aDate = new Date(a.postedOn);
            const bDate = new Date(b.postedOn);
            if (sortType === "latest") {
                return bDate - aDate;
            } else {
                return aDate - bDate;
            }
        });
        setJobs([...sortedJobs]);
    };

    return (
        <div className="grid md:grid-cols-6 h-full gap-1">
            {/* jobs counts */}
            <div className="flex items-center justify-between h-fit md:col-span-6">
                <p className="text-sm font-medium text-[color:var(--primary-color)]">
                    {jobsCount} Jobs Found
                </p>
                <div className="flex items-center gap-2">
                    <p className="text-sm text-[color:var(--secondary-color)] font-medium">
                        Sort by:
                    </p>
                    <select
                        className="text-sm py-1 outline-none"
                        onChange={(e) => sortJobs(e.target.value)}
                        defaultValue="latest"
                        required={true}
                    >
                        <option value={undefined} selected>
                            select
                        </option>
                        <option value="latest">Newly added</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>
            <div className="md:col-span-2 overflow-scroll md:border-2 px-2 divide-y-2">
                {jobs?.map((job, index) => (
                    <div key={index} className="py-2">
                        {/* for desktop */}
                        <button
                            onClick={() => setJibId(job.id)}
                            className={`hidden md:flex w-full text-left items-center gap-4 p-4 rounded-md cursor-pointer ${
                                job.id === jobId
                                    ? "bg-slate-200 !text-white"
                                    : "hover:bg-gray-100 hover:text-[color:var(--primary-color)]"
                            }`}
                        >
                            <div className="w-16 h-16">
                                {job?.logo && (
                                    <img src={job?.logo} alt={job?.company} />
                                )}
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
                        </button>
                        {/* for mobile */}
                        <Link
                            to={`/m/jobs/${job.id}`}
                            className={`md:hidden flex w-full text-left items-center gap-4 p-4 rounded-md cursor-pointer ${
                                job.id === jobId
                                    ? "bg-slate-200 !text-white"
                                    : "hover:bg-gray-100 hover:text-[color:var(--primary-color)]"
                            }`}
                        >
                            <div className="w-16 h-16">
                                {job?.logo && (
                                    <img src={job?.logo} alt={job?.company} />
                                )}
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
                        </Link>
                    </div>
                ))}
            </div>
            {/* job details */}
            <div className="hidden md:block col-span-4 py-2 px-8 w-full overflow-scroll border-2">
                {jobDetails && (
                    <>
                        <div className="flex items-center gap-4 my-4">
                            <div className="w-full flex gap-4 items-center">
                                <div className="w-16 h-16">
                                    {jobDetails?.logo && (
                                        <img
                                            src={jobDetails?.logo}
                                            alt={jobDetails?.company}
                                        />
                                    )}
                                </div>
                                <div>
                                    <h2 className="text-lg font-medium text-[color:var(--primary-color)]">
                                        {jobDetails?.title}
                                    </h2>
                                    <p className="text-sm text-[color:var(--secondary-color)]">
                                        {jobDetails?.company}
                                    </p>
                                    <p className="text-sm text-[color:var(--secondary-color)]">
                                        {jobDetails?.location}
                                    </p>
                                </div>
                            </div>
                            <div className="text-center my-5 flex flex-col items-center justify-center">
                                <PrimaryButton
                                    to={jobDetails?.applyLink}
                                    target="_blank"
                                    className="w-fit py-2 bg-[color:var(--primary-color)] text-white rounded-md"
                                >
                                    Apply
                                </PrimaryButton>
                                <span className="text-xs whitespace-nowrap mt-1 font-medium">
                                    100+ already applied
                                </span>
                            </div>
                        </div>
                        <div className="flex my-4 gap-4">
                            {jobDetails?.type && (
                                <p className="text-sm text-[color:var(--secondary-color)]">
                                    <span className="font-medium">Type:</span>{" "}
                                    {jobDetails?.type}
                                </p>
                            )}
                            {jobDetails?.salary && (
                                <p className="text-sm text-[color:var(--secondary-color)]">
                                    <span className="font-medium">
                                        Salary/Stipend:
                                    </span>{" "}
                                    {jobDetails?.salary}
                                </p>
                            )}
                            {jobDetails?.duration && (
                                <p className="text-sm text-[color:var(--secondary-color)]">
                                    <span className="font-medium">
                                        Duration:
                                    </span>{" "}
                                    {jobDetails?.duration}
                                </p>
                            )}
                            {jobDetails?.postedOn && (
                                <p className="text-sm text-[color:var(--secondary-color)]">
                                    <span className="font-medium">
                                        Posted On:
                                    </span>{" "}
                                    {jobDetails?.postedOn}
                                </p>
                            )}
                        </div>
                        <div>
                            {jobDetails?.details?.map((detail, index) => (
                                <div key={index} className="my-4">
                                    <h3 className="text-lg font-medium text-[color:var(--primary-color)]">
                                        {detail.detailLabel}
                                    </h3>
                                    {detail.type === "Array" ? (
                                        <ul className="list-disc ml-5">
                                            {detail.detail.map(
                                                (item, index) => (
                                                    <li
                                                        key={index}
                                                        className="text-sm"
                                                    >
                                                        {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    ) : (
                                        <p className="text-sm">
                                            {detail.detail}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {!jobDetails && (
                    <div className="w-full h-full flex items-center justify-center gap-2">
                        <i className="text-lg text-[color:var(--primary-color)] fas fa-exclamation-circle"></i>
                        <p className="text-lg text-[color:var(--primary-color)]">
                            Oops, no job details found!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default JobListing;
