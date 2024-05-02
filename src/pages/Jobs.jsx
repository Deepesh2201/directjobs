import { useEffect, useState } from "react";
import JobSearch from "../components/JobSearch/JobSearch";
import CenterTitle from "../components/SharedComponents/CenterTitle";
import { getLatestJobs } from "../db/latestjobs";
import { jobSearch } from "../db/jobSearch";
import { useQuery } from "../utils/queryParams";
import JobListingCard from "../components/JobListing/JobListingCard";
import JobCard from "../components/JobListing/JobCard";
import JobFilter from "../components/JobListing/JobFilter";
import { JobListingCardLoader } from "../components/SharedComponents/Loader";

function Jobs() {
    const [url, setUrl] = useState(window.location.href);
    const query = useQuery();

    const [jobData, setJobData] = useState([]);
    const [latestJobs, setLatestJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Jobs | Direct Jobs";
    }, []);

    useEffect(() => {
        const fetchJobs = async () => {
            const queryObj = {};
            if (query.get("search")) {
                queryObj.search_text = query.get("search");
            }
            if (query.get("cat")) {
                queryObj.cat_ids = query.get("cat");
            }
            if (query.get("loc")) {
                queryObj.location_ids = query.get("loc");
            }
            if (query.get("comp")) {
                queryObj.company_ids = query.get("comp");
            }
            if (query.get("job_type")) {
                queryObj.job_type = query.get("job_type");
            }

            if (queryObj) {
                const data = await jobSearch(queryObj);
                setJobData(data.data);
            } else {
                const data = await jobSearch();
                setJobData(data.data);
            }
        };

        fetchJobs();
    }, [window.location.href]);

    useEffect(() => {
        const fetchLatestJobs = async () => {
            getLatestJobs().then((data) => {
                setLatestJobs(data.data);
                setLoading(false);
            });
        };
        fetchLatestJobs();
    }, []);

    return (
        <>
            <div className="max-w-7xl w-full py-6 md:py-10 m-auto px-4 md:px-8 space-y-5">
                <CenterTitle
                    main="Find Your Dream Job"
                    subText="Search for job title, keywords, or company name"
                />
                <div className="bg-white py-1 px-5 rounded-md shadow-sm">
                    <JobSearch />
                </div>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 m-auto">
                    <div>
                        <p className="md:hidden">
                            TODO: Mobile Filter is under construction
                        </p>
                        <span className="md:block hidden">
                            <JobFilter />
                        </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:col-span-2 h-fit">
                        {!loading &&
                            jobData.map((job) => (
                                <JobListingCard key={job.post_id} job={job} />
                            ))}
                        {loading &&
                            Array(4)
                                .fill(0)
                                .map((_, index) => (
                                    <JobListingCardLoader key={index} />
                                ))}
                    </div>
                    <div>
                        <div className=" grid-cols-1 gap-4 hidden lg:grid bg-white p-5 rounded-lg border shadow-sm">
                            <span className="font-semibold">
                                <i className="fa-solid fa-arrow-trend-up mr-2"></i>
                                Latest Jobs
                            </span>

                            <span className="divide-y">
                                {latestJobs.map((job) => (
                                    <JobCard key={job.post_id} job={job} />
                                ))}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Jobs;
