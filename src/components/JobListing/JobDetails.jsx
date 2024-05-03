import { useEffect, useState } from "react";
import JobDetailsCard from "./JobDetailsCard";
import { getJobDetails } from "../../db/jobDetails";
import { useQuery } from "../../utils/queryParams";
import JobListingCard from "./JobListingCard";

function JobDetails() {
    // get job id from url params id
    const query = useQuery();
    const id = query.get("job_id");
    const [jobId, setJobId] = useState(id);
    const [jobDetails, setJobDetails] = useState();
    const [similarJobs, setSimilarJobs] = useState([]);
    const [href, setHref] = useState(window.location.href);

    useEffect(() => {
        getJobDetails(jobId).then((data) => {
            setJobDetails(data.data);
        });
        // scroll to top
        window.scrollTo(0, 0);

        // update href
        setHref(window.location.href);

        // update job id

        setJobId(query.get("job_id"));
    }, [href, jobId]);

    useEffect(() => {
        console.log("Job Details: ", jobDetails);
        if (jobDetails) {
            const similarJobs = jobDetails.similar_jobs;
            setSimilarJobs(similarJobs);
        }
    }, [jobDetails]);

    return (
        <div className="bg-white">
            <div className="p-5 max-w-7xl m-auto px-4 lg:px-8">
                {jobDetails && <JobDetailsCard jobDetails={jobDetails} />}
            </div>

            {jobDetails && jobDetails?.similar_jobs && (
                <div className="p-5 max-w-7xl m-auto px-4 lg:px-8">
                    <h2 className="text-lg font-medium">Similar Jobs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {similarJobs.map((job) => (
                            <div
                                key={job.post_id}
                                onClick={() => {
                                    window.location.href = `/jobs/details?job_id=${job.post_id}`;
                                }}
                            >
                                <JobListingCard job={job} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default JobDetails;
