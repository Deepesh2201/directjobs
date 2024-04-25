import { baseUrl } from "./config";
import axios from "axios";

const apiEndpoint = "/api/web/latest_jobs";

const getLatestJobs = async () => {
    try {
        const response = await axios.get(`${baseUrl}${apiEndpoint}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return Error("An error occurred while fetching the latest jobs");
    }
};

export { getLatestJobs };
