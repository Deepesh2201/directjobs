import { baseUrl } from "./config";
import axios from "axios";

const apiEndpoint = "/api/web/jobs_search";

const jobSearch = async (search_text) => {
    try {
        const response = await axios.get(`${baseUrl}${apiEndpoint}`, {
            headers: {
                search_text: search_text,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return Error("An error occurred while searching for jobs");
    }
};

export { jobSearch };
