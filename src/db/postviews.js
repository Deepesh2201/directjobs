import { baseUrl } from "./config";
import axios from "axios";

const apiEndpoint = "/api/web/post_view";

const getPostViews = async (post_id, post_type = "Jobs" ) => {
    try {
        const response = await axios.get(`${baseUrl}${apiEndpoint}`, {
            headers: {
                post_id: post_id,
                post_type: post_type
            },
        });
        return response.data.data;
    } catch (error) {
        console.error(error);
        return Error("An error occurred while fetching the latest jobs");
    }
};

export { getPostViews };
