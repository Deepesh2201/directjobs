import axios from "axios";

const getCompanyDetails = async (companyId) => {
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://directjobs.in/partner/api/web/company_details",
        headers: {
            user_id: companyId,
            user_type: "Company",
        },
    };

    return axios
        .request(config)
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            return error.message;
        });
};

const getCompanyList = async () => {
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://directjobs.in/partner/api/web/company_list",
        headers: {},
    };

    axios
        .request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

const getCompanyJobs = async (companyId) => {
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://directjobs.in/partner/api/web/jobs_by_company",
        headers: {
            company_id: companyId,
        },
    };

    return axios
        .request(config)
        .then((response) => {
            console.log(response.data);
            return response.data.data;
        })
        .catch((error) => {
            return error.message;
        });
};

export { getCompanyDetails, getCompanyList, getCompanyJobs };
