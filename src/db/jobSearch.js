import { baseUrl } from "./config";
import axios from "axios";

const apiEndpoint = "/api/web/jobs_filter";
const urlParams = new URLSearchParams(window.location.search);

const jobSearch = async (headerObj) => {
    try {
        const response = await axios.get(`${baseUrl}${apiEndpoint}`, {
            headers: headerObj,
        });
        
        return response.data;
    } catch (error) {
        console.error(error);
        return Error("An error occurred while searching for jobs");
    }
};

export { jobSearch };
