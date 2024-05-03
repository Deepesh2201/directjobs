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


// import axios from "axios";
// import { baseUrl } from "./config";

// class ApiClient {
//     constructor() {
//         this.baseUrl = baseUrl;
//     }

//     async getCompanies() {
//         const apiEndpoint = "/api/web/company_list";
//         try {
//             const response = await axios.get(`${this.baseUrl}${apiEndpoint}`);
//             return response.data;
//         } catch (error) {
//             console.error(error);
//             throw new Error("An error occurred while fetching companies");
//         }
//     }

//     async getCategories() {
//         const apiEndpoint = "/api/web/category";
//         try {
//             const response = await axios.get(`${this.baseUrl}${apiEndpoint}`);
//             return response.data;
//         } catch (error) {
//             console.error(error);
//             throw new Error("An error occurred while fetching categories");
//         }
//     }

//     async getFilterProperties(data) {
//         const apiEndpoint = "/api/web/cat_loc_comp_list";
//         try {
//             const response = await axios.get(`${this.baseUrl}${apiEndpoint}`, data);
//             return response.data;
//         } catch (error) {
//             console.error(error);
//             throw new Error("An error occurred while fetching filter properties");
//         }
//     }
// }

// export default ApiClient;

// const apiClient = new ApiClient();

// console.log(apiClient);

// export const { getCompanies, getCategories, getFilterProperties } = apiClient;