import { useEffect, useState } from "react";
import JobDetailsCard from "./JobDetailsCard";
import { getJobDetails } from "../../db/jobDetails";
import { useQuery } from "../../utils/queryParams";

function MobileJobListing() {
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
        <div className="p-5 max-w-7xl m-auto">
            {jobDetails && <JobDetailsCard jobDetails={jobDetails} />}
        </div>
    );
}

export default MobileJobListing;
