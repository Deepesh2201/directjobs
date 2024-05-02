import { useEffect, useState } from "react";
import JobDetailsCard from "./JobDetailsCard";
import { getJobDetails } from "../../db/jobDetails";
import { useQuery } from "../../utils/queryParams";

function JobDetails() {
    // get job id from url params id
    const query = useQuery();
    const id = query.get("job_id");
    const [jobId] = useState(id);
    const [jobDetails, setJobDetails] = useState();

    useEffect(() => {
        getJobDetails(jobId).then((data) => {
            setJobDetails(data.data);
        });
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <div className="p-5 max-w-7xl m-auto px-4 lg:px-8">
                {jobDetails && <JobDetailsCard jobDetails={jobDetails} />}
            </div>
        </div>
    );
}

export default JobDetails;
