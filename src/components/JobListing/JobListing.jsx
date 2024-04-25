import { useEffect, useState } from "react";
// import { getJobDetails } from "./JobList";
import PrimaryButton from "../SharedComponents/PrimaryButton";
import { Link, useParams } from "react-router-dom";
import JobListCard from "./JobListCard";
import propType from "prop-types";
import { getJobDetails } from "../../db/jobDetails";
import JobDetailsCard from "./JobDetailsCard";

function JobListing({ data }) {
    const jobId = useParams().id;

    const [jobs, setJobs] = useState([]);
    const [selectedJobId, setSelectedJobId] = useState(jobId);
    const [jobsCount, setJobCount] = useState();
    const [jobDetails, setJobDetails] = useState();
    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        setJobs([...data]);
        setJobCount(data.length);
        // setJobDetails(getJobDetails(selectedJobId));

        if (selectedJobId) {
            getJobDetails(selectedJobId).then((data) => {
                console.log(data.data);
                setJobDetails(data.data);
            });
        }

        // scroll only jobdetails section
        const jobDetailsSection = document.querySelector("#jobDetails");
        jobDetailsSection.scrollTo(0, 0);

        // mobileView at 767px
        if (window.innerWidth <= 767) {
            setMobileView(true);
        } else {
            setMobileView(false);
        }
    }, [selectedJobId, mobileView, data]);

    // on window resize set mobileView state
    window.addEventListener("resize", () => {
        if (window.innerWidth <= 767) {
            setMobileView(true);
        } else {
            setMobileView(false);
        }
    });

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
                        {!mobileView && (
                            <Link
                                className="w-full"
                                to={`/jobs/${job.post_id}`}
                                onClick={() => setSelectedJobId(job.post_id)}
                            >
                                <JobListCard
                                    job={job}
                                    activeJob={selectedJobId}
                                />
                            </Link>
                        )}
                        {/* for mobile */}
                        {mobileView && (
                            <Link
                                className="w-full"
                                to={`/m/jobs/${job.post_id}`}
                            >
                                <JobListCard job={job} />
                            </Link>
                        )}
                    </div>
                ))}
            </div>
            {/* job details */}
            <div
                id="jobDetails"
                className="hidden md:block col-span-4 py-2 px-8 w-full overflow-scroll border-2 scroll-smooth"
            >
                {jobDetails && <JobDetailsCard jobDetails={jobDetails} />}

                {!jobDetails && selectedJobId && (
                    <div className="w-full h-full flex items-center justify-center gap-2">
                        <i className="text-lg text-[color:var(--primary-color)] fas fa-exclamation-circle"></i>
                        <p className="text-lg text-[color:var(--primary-color)]">
                            Oops, no job details found!
                        </p>
                    </div>
                )}

                {!jobDetails && !selectedJobId && (
                    <div className="w-full h-full flex items-center justify-center gap-2">
                        <p className="text-lg text-[color:var(--primary-color)]">
                            Hey there, kindly select a job to view details
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default JobListing;

JobListing.propTypes = {
    jobs: propType.array.isRequired,

    data: propType.array.isRequired,
};
