import { baseUrl } from "./config";
import axios from "axios";

const apiEndpointUserProfile = "/api/web/profile";

const getUserProfile = async (userId) => {
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${baseUrl}${apiEndpointUserProfile}`,
        headers: {
            user_id: userId,
        },
    };

    return axios
        .request(config)
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export { getUserProfile };
