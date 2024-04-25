import { baseUrl } from "./config";
import axios from "axios";

const apiEndpoint = "/api/web/jobs_details";

const getJobDetails = async (job_id) => {
    try {
        const response = await axios.get(`${baseUrl}${apiEndpoint}`, 
        {
            headers: {
                "job_id": job_id,
            },
        }
    );
        return response.data;
    } catch (error) {
        console.error(error);
        return Error("An error occurred while fetching the latest jobs");
    }
};

export { getJobDetails };
