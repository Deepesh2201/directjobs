import { baseUrl } from "./config";
import axios from "axios";

const getCompanies = async () => {
    const apiEndpoint = "/api/web/company_list";
    try {
        const response = await axios.get(`${baseUrl}${apiEndpoint}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return Error("An error occurred while fetching companies");
    }
};

const getCategories = async () => {
    const apiEndpoint = "/api/web/category";
    try {
        const response = await axios.get(`${baseUrl}${apiEndpoint}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return Error("An error occurred while fetching categories");
    }
};

const getFilterProperties = async (data) => {
    const apiEndpoint = "/api/web/cat_loc_comp_list";
    try {
        const response = await axios.get(`${baseUrl}${apiEndpoint}`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        return Error("An error occurred while fetching categories");
    }
};
export { getCompanies, getCategories, getFilterProperties };
