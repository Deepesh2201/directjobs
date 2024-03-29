import { useEffect } from "react";
import JobListing from "../components/JobListing/JobListing";
import JobSearch from "../components/JobSearch/JobSearch";
import CenterTitle from "../components/SharedComponents/CenterTitle";
import { jobData } from "./data/jobData";
function Jobs() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Jobs | Direct Jobs";
    }, []);

    return (
        <>
            <div className="max-w-7xl w-full py-6 md:py-10 m-auto px-4 md:px-8 md:h-screen flex flex-col">
                <CenterTitle
                    main="Find your dream job"
                    subText="Search for job title, keywords, or company name"
                />
                <JobSearch />
                <div className="h-full overflow-hidden">
                    <JobListing data={jobData} />
                </div>
            </div>
        </>
    );
}

export default Jobs;
