import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import JobListCard from "./JobListCard";
import propType from "prop-types";
import { getJobDetails } from "../../db/jobDetails";
import JobDetailsCard from "./JobDetailsCard";
import useQuery from "../../utils/queryParams";

function JobListing({ data }) {
    const query = useQuery();
    const jobId = query.get("job_id");

    const [jobs, setJobs] = useState([]);
    const [selectedJobId, setSelectedJobId] = useState(jobId);
    const [jobsCount, setJobCount] = useState();
    const [jobDetails, setJobDetails] = useState();
    const [mobileView, setMobileView] = useState(false);

    const navigate = useNavigate();

    const handleJobClick = (jobId) => {
        // navigate to job details page
        if (query.get("search")) {
            if (mobileView) {
                navigate(
                    `/m/jobs?search=${query.get("search")}&job_id=${jobId}`
                );
            } else {
                navigate(`/jobs?search=${query.get("search")}&job_id=${jobId}`);
            }
        } else {
            if (mobileView) {
                navigate(`/m/jobs?job_id=${jobId}`);
            } else {
                navigate(`/jobs?job_id=${jobId}`);
            }
        }

        // scroll only jobdetails section
        const jobDetailsSection = document.querySelector("#jobDetails");

        jobDetailsSection.scrollTo(0, 0);
    };

    useEffect(() => {
        if (query.get("job_id")) {
            setSelectedJobId(query.get("job_id"));
        } else {
            setSelectedJobId(null);
            setJobDetails(null);
        }
    }, [query]);

    useEffect(() => {
        setJobs([...data]);
        setJobCount(data.length);

        if (selectedJobId) {
            getJobDetails(selectedJobId).then((data) => {
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
                        <option value="latest">Newly added</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>
            <div
                className={
                    (!selectedJobId && !mobileView)
                        ? "md:col-span-12 grid grid-cols-4 gap-2 overflow-scroll md:border-2 px-2"
                        : "md:col-span-2 overflow-scroll md:border-2 px-2 divide-y-2"
                }
            >
                {jobs?.map((job, index) => (
                    <div key={index} className="py-2">
                        {/* for desktop */}
                        {!mobileView && (
                            <Link
                                className="w-full"
                                onClick={() => {
                                    handleJobClick(job.post_id);
                                }}
                            >
                                <JobListCard
                                    job={job}
                                    activeJob={Number(selectedJobId)}
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
                className={
                    selectedJobId
                        ? "hidden md:block col-span-4 py-2 px-8 w-full overflow-scroll border-2 scroll-smooth"
                        : "hidden"
                }
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
    data: propType.array.isRequired,
};
