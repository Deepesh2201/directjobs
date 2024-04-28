import { useEffect, useState } from "react";
import JobListing from "../components/JobListing/JobListing";
import JobSearch from "../components/JobSearch/JobSearch";
import CenterTitle from "../components/SharedComponents/CenterTitle";
import { getLatestJobs } from "../db/latestjobs";
import { jobSearch } from "../db/jobSearch";
import { useQuery } from "../utils/queryParams";

function Jobs() {
    const [url, setUrl] = useState(window.location.href);
    const query = useQuery();

    const [jobData, setJobData] = useState([]);
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
                console.log(queryObj);
            }
            if (query.get("loc")) {
                queryObj.location_ids = query.get("loc");
            }
            if (query.get("comp")) {
                queryObj.company_ids = query.get("comp");
            }
            if(query.get("job_type")) {
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

        console.log(fetchJobs(), "fetchJobs");
    }, [window.location.href]);

    return (
        <>
            <div className="max-w-7xl w-full py-6 md:py-10 m-auto px-4 md:px-8 md:h-screen max-h-fit flex flex-col">
                <CenterTitle
                    main="Find your dream job"
                    subText="Search for job title, keywords, or company name"
                />
                <JobSearch />
                <div className="overflow-hidden">
                    <JobListing data={jobData} />
                </div>
            </div>
        </>
    );
}

export default Jobs;
