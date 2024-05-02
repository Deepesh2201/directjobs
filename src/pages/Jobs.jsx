import { useEffect, useState } from "react";
import JobSearch from "../components/JobSearch/JobSearch";
import CenterTitle from "../components/SharedComponents/CenterTitle";
import { getLatestJobs } from "../db/latestjobs";
import { jobSearch } from "../db/jobSearch";
import { useQuery } from "../utils/queryParams";
import JobListingCard from "../components/JobListing/JobListingCard";
import JobCard from "../components/JobListing/JobCard";
import JobFilter from "../components/JobListing/JobFilter";
import {
    JobCardLoader,
    JobListingCardLoader,
} from "../components/SharedComponents/Loader";
import NoJobsCard from "../components/JobListing/NoJobsCard";

function Jobs() {
    const [url, setUrl] = useState(window.location.href);
    const query = useQuery();

    const [jobData, setJobData] = useState([]);
    const [latestJobs, setLatestJobs] = useState([]);
    const [loadingSearchedJobs, setLoadingSearchedJobs] = useState(true);
    const [loadingLatestJobs, setLoadingLatestJobs] = useState(true);
    const [dataInParams, setDataInParams] = useState({
        search: query.get("search"),
        cats: query.get("cat")?.split(",").map(Number),
        locs: query.get("loc")?.split(",").map(Number),
        comps: query.get("comp")?.split(",").map(Number),
        job_types: query.get("job_type"),
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Jobs | Direct Jobs";
        console.log(dataInParams);
    }, []);

    useEffect(() => {
        setLoadingSearchedJobs(true);
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
                setLoadingSearchedJobs(false);
            } else {
                const data = await jobSearch();
                setJobData(data.data);
                setLoadingSearchedJobs(false);
            }
        };

        fetchJobs();
        setDataInParams({
            search: query.get("search"),
            cats: query.get("cat")?.split(",").map(Number),
            locs: query.get("loc")?.split(",").map(Number),
            comps: query.get("comp")?.split(",").map(Number),
            job_types: query.get("job_type"),
        });
    }, [window.location.href]);

    useEffect(() => {
        setLoadingLatestJobs(true);
        const fetchLatestJobs = async () => {
            getLatestJobs().then((data) => {
                setLatestJobs(data.data);
                setLoadingLatestJobs(false);
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
                    <JobSearch dataInParams={dataInParams} />
                </div>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 m-auto">
                    <div>
                        <p className="md:hidden">
                            TODO: Mobile Filter is under construction
                        </p>
                        <span className="md:block hidden">
                            <JobFilter dataInParams={dataInParams} />
                        </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:col-span-2 h-fit">
                        {!loadingSearchedJobs && (
                            <span className="-mb-3 ml-2 text-gray-500">
                                Showing {jobData.length}{" "}
                                <>{jobData.length > 1 ? "jobs" : "job"}</>{" "}
                                {dataInParams.search && (
                                    <span>for {dataInParams.search}</span>
                                )}
                            </span>
                        )}
                        {!loadingSearchedJobs &&
                            jobData?.map((job) => (
                                <JobListingCard key={job.post_id} job={job} />
                            ))}
                        {loadingSearchedJobs &&
                            Array(4)
                                .fill(0)
                                .map((_, index) => (
                                    <JobListingCardLoader key={index} />
                                ))}

                        {!loadingSearchedJobs && jobData.length === 0 && (
                            <NoJobsCard
                                dataInParams={dataInParams}
                                setDataInParams={setDataInParams}
                            />
                        )}
                    </div>
                    <div>
                        <div className=" grid-cols-1 gap-4 hidden lg:grid bg-white p-5 rounded-lg border shadow-sm">
                            <span className="font-semibold">
                                <i className="fa-solid fa-arrow-trend-up mr-2"></i>
                                Latest Jobs
                            </span>

                            <span className="divide-y">
                                {!loadingLatestJobs &&
                                    latestJobs.length > 0 &&
                                    latestJobs.map((job) => (
                                        <JobCard key={job.post_id} job={job} />
                                    ))}
                                {loadingLatestJobs &&
                                    Array(4)
                                        .fill(0)
                                        .map((_, index) => (
                                            <JobCardLoader key={index} />
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
