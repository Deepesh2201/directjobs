import { baseUrl } from "./config";
import axios from "axios";

const apiEndpoint = "/api/web/category";

const getCategories = async () => {
    try {
        const response = await axios.get(`${baseUrl}${apiEndpoint}`);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return Error("An error occurred while fetching the categories");
    }
};

export { getCategories };
