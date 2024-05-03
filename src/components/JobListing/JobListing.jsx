import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import JobCard from "./JobCard";
import propType from "prop-types";
import { getJobDetails } from "../../db/jobDetails";
import JobDetailsCard from "./JobDetailsCard";
import { useQuery } from "../../utils/queryParams";
import notFound from "../../assets/abstracts/notfound.png";
import { getFilterProperties } from "../../db/jobFilter";

function JobListing({ data }) {
    const query = useQuery();
    const jobId = query.get("job_id");

    const [jobs, setJobs] = useState([]);
    const [selectedJobId, setSelectedJobId] = useState(jobId);
    const [jobsCount, setJobCount] = useState();
    const [jobDetails, setJobDetails] = useState();
    const [mobileView, setMobileView] = useState(false);
    const [loading, setLoading] = useState(false);
    const [filterCategories, setFilterCategories] = useState([]);
    const [filterLocations, setFilterLocations] = useState([]);
    const [filterCompanies, setFilterCompanies] = useState([]);
    const [filterJobTypes, setFilterJobTypes] = useState([]);
    const [openFilterDropdown, setOpenFilterDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState([]);
    const [selectedJobType, setSelectedJobType] = useState([]);
    let filterQuery = "";

    const navigate = useNavigate();

    const handleJobClick = (jobId) => {
        // navigate to job details page
        if (query.get("search")) {
            if (mobileView) {
                navigate(
                    `/jobs/details?search=${query.get("search")}&job_id=${jobId}`
                );
            } else {
                navigate(`/jobs?search=${query.get("search")}&job_id=${jobId}`);
            }
        } else {
            if (mobileView) {
                navigate(`/jobs/details?job_id=${jobId}`);
            } else {
                navigate(`/jobs?job_id=${jobId}`);
            }
        }

        // scroll only jobdetails section
        const jobDetailsSection = document.querySelector("#jobDetails");

        jobDetailsSection.scrollTo(0, 0);
    };

    useEffect(() => {
        getFilterProperties().then((data) => {
            setFilterCategories([...data.category_list]);
            setFilterLocations([...data.location_list]);
            setFilterCompanies([...data.company_list]);
            setFilterJobTypes([...data.job_types_list]);
        });
    }, []);

    useEffect(() => {
        if (query.get("job_id")) {
            setSelectedJobId(query.get("job_id"));
        } else {
            setSelectedJobId(null);
            setJobDetails(null);
        }
    }, [query]);

    const handleFilter = () => {
        setOpenFilterDropdown(!openFilterDropdown);
        if (selectedCategory.length) {
            filterQuery.length
                ? (filterQuery += `&cat=${selectedCategory
                      .map((category) => category.post_id)
                      .join(",")}`)
                : (filterQuery = `?cat=${selectedCategory
                      .map((category) => category.post_id)
                      .join(",")}`);
        }
        if (selectedLocation.length) {
            filterQuery.length
                ? (filterQuery += `&loc=${selectedLocation
                      .map((location) => location.post_id)
                      .join(",")}`)
                : (filterQuery = `?loc=${selectedLocation
                      .map((location) => location.post_id)
                      .join(",")}`);
        }
        if (selectedCompany.length) {
            filterQuery.length
                ? (filterQuery += `&comp=${selectedCompany
                      .map((company) => company.post_id)
                      .join(",")}`)
                : (filterQuery = `?comp=${selectedCompany
                      .map((company) => company.post_id)
                      .join(",")}`);
        }
        if (selectedJobType.length) {
            filterQuery.length
                ? (filterQuery += `&job_type=${selectedJobType
                      .map((jobType) => jobType.post_title)
                      .join(",")}`)
                : (filterQuery = `?job_type=${selectedJobType
                      .map((jobType) => jobType.post_title)
                      .join(",")}`);
        }
        navigate(`/jobs${filterQuery}`);
    };

    useEffect(() => {
        setJobs([...data]);
        setJobCount(data?.length);

        if (selectedJobId) {
            getJobDetails(selectedJobId).then((data) => {
                setJobDetails(data?.data);
                // if (selectedCategory)
            });
        }

        // scroll only jobdetails section
        const jobDetailsSection = document.querySelector("#jobDetails");
        jobDetailsSection.scrollTo(0, 0);

        // mobileView at 767px
        if (window.innerWidth <= 767) {
            setMobileView(true);
        } else {
            setMobileView(false);
        }
    }, [selectedJobId, mobileView, data]);

    // on window resize set mobileView state
    window.addEventListener("resize", () => {
        if (window.innerWidth <= 767) {
            setMobileView(true);
        } else {
            setMobileView(false);
        }
    });

    // sort jobs by latest or oldest function by comapring postedOn date with current date
    const sortJobs = (sortType) => {
        const sortedJobs = jobs.sort((a, b) => {
            const aDate = new Date(a.postedOn);
            const bDate = new Date(b.postedOn);
            if (sortType === "latest") {
                return bDate - aDate;
            } else {
                return aDate - bDate;
            }
        });
        setJobs([...sortedJobs]);
    };

    return (
        <div className="">
            <div className="md:col-span-6">
                <p className="text-gray-600 text-sm">
                    {query.get("search") ? (
                        <span>
                            showing results for{" "}
                            <span className="text-[color:var(--primary-color)]">
                                {query.get("search")}
                            </span>
                        </span>
                    ) : (
                        "Showing Latest Jobs"
                    )}
                </p>
            </div>

            <div className="relative flex items-center justify-between h-fit md:col-span-6">
                <div className="flex items-center gap-2">
                    <div className="relative flex items-center">
                        {
                            <p className="text-xs text-[color:var(--secondary-color)] font-medium">
                                <i className="fas fa-filter text-xs"></i>
                                <span>Filter</span>
                                <i
                                    className="fas fa-chevron-down text-xs cursor-pointer ml-1"
                                    onClick={() =>
                                        setOpenFilterDropdown(
                                            !openFilterDropdown
                                        )
                                    }
                                ></i>
                            </p>
                        }

                        {openFilterDropdown && (
                            <div className="h-[100vh] w-[100vw] fixed left-0 bottom-0 z-40 flex justify-center items-end pb-24 bg-white bg-opacity-80">
                                <div className="bottom-2 max-w-7xl w-[80%] left-2 z-10 bg-white p-2 border-2 border-[color:var(--primary-color)] rounded-md drop-shadow-lg h-[70vh] max-h-[70%] flex flex-col">
                                    <div className="relative overflow-y-auto flex-1">
                                        <div className="">
                                            <p className="text-[color:var(--primary-color)] font-semibold border-b-4 mb-3 pb-3">
                                                Categories
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {filterCategories
                                                    .filter(
                                                        (category) =>
                                                            !selectedCategory.some(
                                                                (selected) =>
                                                                    selected.post_id ===
                                                                    category.post_id
                                                            )
                                                    )
                                                    .map((category) => (
                                                        <button
                                                            onClick={() => {
                                                                setSelectedCategory(
                                                                    (prev) => [
                                                                        ...prev,
                                                                        {
                                                                            post_id:
                                                                                category.post_id,
                                                                            post_title:
                                                                                category.post_title,
                                                                        },
                                                                    ]
                                                                );
                                                            }}
                                                            key={
                                                                category.post_id
                                                            }
                                                            className="bg-gray-600 text-white px-2 py-1 rounded-md text-xs"
                                                        >
                                                            {
                                                                category.post_title
                                                            }
                                                        </button>
                                                    ))}

                                                {selectedCategory.map(
                                                    (category) => (
                                                        <button
                                                            onClick={() => {
                                                                setSelectedCategory(
                                                                    (prev) => {
                                                                        return prev.filter(
                                                                            (
                                                                                item
                                                                            ) =>
                                                                                item.post_id !==
                                                                                category.post_id
                                                                        );
                                                                    }
                                                                );
                                                            }}
                                                            key={
                                                                category.post_id
                                                            }
                                                            className="bg-[color:var(--primary-color)] text-white px-2 py-1 rounded-md text-xs"
                                                        >
                                                            {
                                                                category.post_title
                                                            }
                                                            <i className="fas fa-times ml-1"></i>
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-[color:var(--primary-color)] font-semibold border-b-4 mb-3 pb-3">
                                                Locations
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {filterLocations
                                                    .filter(
                                                        (location) =>
                                                            !selectedLocation.some(
                                                                (selected) =>
                                                                    selected.post_id ===
                                                                    location.post_id
                                                            )
                                                    )
                                                    .map((location) => (
                                                        <button
                                                            onClick={() => {
                                                                setSelectedLocation(
                                                                    (prev) => [
                                                                        ...prev,
                                                                        {
                                                                            post_id:
                                                                                location.post_id,
                                                                            post_title:
                                                                                location.post_title,
                                                                        },
                                                                    ]
                                                                );
                                                            }}
                                                            key={
                                                                location.post_id
                                                            }
                                                            className="bg-gray-600 text-white px-2 py-1 rounded-md text-xs"
                                                        >
                                                            {
                                                                location.post_title
                                                            }
                                                        </button>
                                                    ))}

                                                {selectedLocation.map(
                                                    (location) => (
                                                        <button
                                                            onClick={() => {
                                                                setSelectedLocation(
                                                                    (prev) => {
                                                                        return prev.filter(
                                                                            (
                                                                                item
                                                                            ) =>
                                                                                item.post_id !==
                                                                                location.post_id
                                                                        );
                                                                    }
                                                                );
                                                            }}
                                                            key={
                                                                location.post_id
                                                            }
                                                            className="bg-[color:var(--primary-color)] text-white px-2 py-1 rounded-md text-xs"
                                                        >
                                                            {
                                                                location.post_title
                                                            }
                                                            <i className="fas fa-times ml-1"></i>
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-[color:var(--primary-color)] font-semibold border-b-4 mb-3 pb-3">
                                                Companies
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {filterCompanies
                                                    .filter(
                                                        (company) =>
                                                            !selectedCompany.some(
                                                                (selected) =>
                                                                    selected.post_id ===
                                                                    company.post_id
                                                            )
                                                    )
                                                    .map((company) => (
                                                        <button
                                                            onClick={() => {
                                                                setSelectedCompany(
                                                                    (prev) => [
                                                                        ...prev,
                                                                        {
                                                                            post_id:
                                                                                company.post_id,
                                                                            post_title:
                                                                                company.post_title,
                                                                        },
                                                                    ]
                                                                );
                                                            }}
                                                            key={
                                                                company.post_id
                                                            }
                                                            className="bg-gray-600 text-white px-2 py-1 rounded-md text-xs"
                                                        >
                                                            {company.post_title}
                                                        </button>
                                                    ))}

                                                {selectedCompany.map(
                                                    (company) => (
                                                        <button
                                                            onClick={() => {
                                                                setSelectedCompany(
                                                                    (prev) => {
                                                                        return prev.filter(
                                                                            (
                                                                                item
                                                                            ) =>
                                                                                item.post_id !==
                                                                                company.post_id
                                                                        );
                                                                    }
                                                                );
                                                            }}
                                                            key={
                                                                company.post_id
                                                            }
                                                            className="bg-[color:var(--primary-color)] text-white px-2 py-1 rounded-md text-xs"
                                                        >
                                                            {company.post_title}
                                                            <i className="fas fa-times ml-1"></i>
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div className="my-4">
                                            <p className="text-[color:var(--primary-color)] font-semibold border-b-4 mb-3 pb-3">
                                                Job Types
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {filterJobTypes
                                                    .filter(
                                                        (category) =>
                                                            !selectedJobType.some(
                                                                (selected) =>
                                                                    selected.post_title ===
                                                                    category.post_title
                                                            )
                                                    )
                                                    .map((jobType, index) => (
                                                        <button
                                                            onClick={() => {
                                                                setSelectedJobType(
                                                                    (prev) => [
                                                                        ...prev,
                                                                        {
                                                                            post_title:
                                                                                jobType.post_title,
                                                                        },
                                                                    ]
                                                                );
                                                            }}
                                                            key={index}
                                                            className="bg-gray-600 text-white px-2 py-1 rounded-md text-xs"
                                                        >
                                                            {jobType.post_title}
                                                        </button>
                                                    ))}
                                                {selectedJobType.map(
                                                    (jobType, index) => (
                                                        <button
                                                            onClick={() => {
                                                                setSelectedJobType(
                                                                    (prev) => {
                                                                        return prev.filter(
                                                                            (
                                                                                item
                                                                            ) =>
                                                                                item.post_title !==
                                                                                jobType.post_title
                                                                        );
                                                                    }
                                                                );
                                                            }}
                                                            key={index}
                                                            className="bg-[color:var(--primary-color)] text-white px-2 py-1 rounded-md text-xs"
                                                        >
                                                            {jobType.post_title}
                                                            <i className="fas fa-times ml-1"></i>
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-center my-1 mr-5">
                                        <button
                                            onClick={() => {
                                                setSelectedCategory([]);
                                                setSelectedLocation([]);
                                                setSelectedCompany([]);
                                                setSelectedJobType([]);
                                            }}
                                            className="bg-gray-600 text-white px-2 py-1 rounded-md text-xs mr-2"
                                        >
                                            Clear All
                                        </button>
                                        <button
                                            onClick={handleFilter}
                                            className="bg-[color:var(--primary-color)] text-white px-2 py-1 rounded-md text-xs"
                                        >
                                            Apply Filters
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <p className="text-sm font-medium text-[color:var(--primary-color)]">
                    {jobsCount === 0
                        ? "No Jobs Found!"
                        : `${jobsCount} Jobs Found`}
                </p>
            </div>
            <div className="grid grid-cols-4 w-full col-span-6 gap-2">
                {!loading &&
                    Boolean(jobsCount) &&
                    jobs?.map((job, index) => (
                        <div key={index} className="py-2">
                            {
                                <Link
                                    className="w-full"
                                    onClick={() => {
                                        handleJobClick(job.post_id);
                                    }}
                                >
                                    <JobCard
                                        job={job}
                                        activeJob={Number(selectedJobId)}
                                    />
                                </Link>
                            }
                        </div>
                    ))}

                {!loading && !jobsCount && (
                    <div className="w-full h-full flex md:flex-row flex-col items-center justify-center gap-2">
                        <img src={notFound} className="max-w-40 m-10" alt="" />
                        <div className="text-[color:var(--primary-color)]">
                            <p className="text-3xl">
                                {query.get("search") ? (
                                    <span>
                                        Oops, no jobs found for{" "}
                                        <span className="text-[color:var(--primary-color)]">
                                            {query.get("search")}
                                        </span>
                                    </span>
                                ) : (
                                    "Oops, no jobs found!"
                                )}
                            </p>
                            <p>
                                Kindly try with different search keyword, or
                                check back later.
                            </p>
                            <p className="text-sm text-gray-700">
                                <i className="fas fa-search mr-2"></i>
                                we are constantly updating our job listings.
                            </p>
                        </div>
                    </div>
                )}

                {loading && (
                    <div className="w-full h-full flex items-center justify-center gap-2 p-10 col-span-4">
                        <div className="animate-spin rounded-full h-10 w-10 border-2 border-b-0 border-l-0 border-[color:var(--primary-color)]"></div>
                        <p className="text-[color:var(--primary-color)] text-lg ml-3">
                            Fetching Data...
                        </p>
                    </div>
                )}
            </div>
            {/* job details */}
            <div
                id="jobDetails"
                className={
                    selectedJobId
                        ? "hidden md:block col-span-4 py-2 px-8 w-full overflow-scroll border-2 scroll-smooth"
                        : "hidden"
                }
            >
                {jobDetails && <JobDetailsCard jobDetails={jobDetails} />}

                {!jobDetails && selectedJobId && (
                    <div className="w-full h-full flex items-center justify-center gap-2">
                        <img src={notFound} alt="" />
                        <p className="text-lg text-[color:var(--primary-color)]">
                            Oops, no job details found!
                        </p>
                    </div>
                )}

                {!jobDetails && !selectedJobId && (
                    <div className="w-full h-full flex items-center justify-center gap-2">
                        <p className="text-lg text-[color:var(--primary-color)]">
                            Hey there, kindly select a job to view details
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default JobListing;

JobListing.propTypes = {
    data: propType.array.isRequired,
};
