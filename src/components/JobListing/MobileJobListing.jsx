import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JobDetailsCard from "./JobDetailsCard";
import { getJobDetails } from "../../db/jobDetails";

function MobileJobListing() {
    // get job id from url params id
    const { id } = useParams();
    const [jobId] = useState(id);
    const [jobDetails, setJobDetails] = useState();

    const navigate = useNavigate();
    const backToJobListing = () => {
        console.log(navigate(-1));
        // if(navigate(-1)){
        //     navigate("/jobs");
        // }
    };

    useEffect(() => {
        getJobDetails(jobId).then((data) => {
            setJobDetails(data.data);
        });
        console.log(jobDetails);
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
