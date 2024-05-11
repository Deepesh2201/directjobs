import { useEffect, useState } from "react";
import JobSearch from "../components/JobSearch/JobSearch";
import CenterTitle from "../components/SharedComponents/CenterTitle";
import { getLatestJobs } from "../db/latestjobs";
import { jobSearch } from "../db/jobSearch";
import { useQuery } from "../utils/queryParams";
import JobListingCard from "../components/JobListing/JobListingCard";
import JobCard from "../components/JobListing/JobCard";
import JobFilter from "../components/JobListing/JobFilter";
import {
    JobCardLoader,
    JobListingCardLoader,
} from "../components/SharedComponents/Loader";
import NoJobsCard from "../components/JobListing/NoJobsCard";
import { useNavigate } from "react-router-dom";
import PopupModal from "../components/SharedComponents/PopupModal";
import checkIsMobile from "../utils/checkIsMobile";

function Jobs() {
    const query = useQuery();
    const navigate = useNavigate();
    const isMobile = checkIsMobile();
    const mobileFilterButtonsData = [
        { name: "Sort By", icon: "fa-sort" },
        { name: "Salary", icon: "fa-salary" },
        { name: "Category", icon: "fa-category" },
        { name: "Location", icon: "fa-location" },
        { name: "Company", icon: "fa-company" },
        { name: "Qualification", icon: "fa-qualification" },
        { name: "Job Type", icon: "fa-job-type" },
    ];

    const [openMobileFilter, setOpenMobileFilter] = useState(false);
    const [openFilterName, setOpenFilterName] = useState("Sort By");

    const [jobData, setJobData] = useState([]);
    const [latestJobs, setLatestJobs] = useState([]);
    const [loadingSearchedJobs, setLoadingSearchedJobs] = useState(true);
    const [loadingLatestJobs, setLoadingLatestJobs] = useState(true);
    const [dataInParams, setDataInParams] = useState({
        search: query.get("search"),
        cats: query.get("cat")?.split(",").map(Number),
        locs: query.get("loc")?.split(",").map(Number),
        comps: query.get("comp")?.split(",").map(Number),
        job_types: query.get("job_type"),
    });

    const [dataToSendInParams, setDataToSendInParams] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Jobs | Direct Jobs";
        console.log(dataInParams);
    }, []);

    useEffect(() => {
        setLoadingSearchedJobs(true);
        const fetchJobs = async () => {
            const queryObj = {};
            if (query.get("search")) {
                queryObj.search_text = query.get("search");
            }
            if (query.get("cat")) {
                queryObj.cat_ids = query.get("cat");
            }
            if (query.get("loc")) {
                queryObj.location_ids = query.get("loc");
            }
            if (query.get("comp")) {
                queryObj.company_ids = query.get("comp");
            }
            if (query.get("job_type")) {
                queryObj.job_type = query.get("job_type");
            }

            if (queryObj) {
                const data = await jobSearch(queryObj);
                setJobData(data.data);
                setLoadingSearchedJobs(false);
            } else {
                const data = await jobSearch();
                setJobData(data.data);
                setLoadingSearchedJobs(false);
            }
        };

        fetchJobs();
        setDataInParams({
            search: query.get("search"),
            cats: query.get("cat")?.split(",").map(Number),
            locs: query.get("loc")?.split(",").map(Number),
            comps: query.get("comp")?.split(",").map(Number),
            job_types: query.get("job_type"),
        });
    }, [window.location.href]);

    useEffect(() => {
        setLoadingLatestJobs(true);
        const fetchLatestJobs = async () => {
            getLatestJobs().then((data) => {
                setLatestJobs(data.data);
                setLoadingLatestJobs(false);
            });
        };
        fetchLatestJobs();
    }, []);

    useEffect(() => {
        // stop scroll wehn popup is open
        if (isMobile) {
            if (openMobileFilter) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        }
    }, [openMobileFilter]);

    useEffect(() => {
        console.log("Data to send in params: ", dataToSendInParams);
        let urlparams = "";
        if (dataToSendInParams.cats) {
            urlparams += `&cat=${dataToSendInParams.cats.join(",")}`;
        }
        if (dataToSendInParams.locs) {
            urlparams += `&loc=${dataToSendInParams.locs.join(",")}`;
        }
        if (dataToSendInParams.comps) {
            urlparams += `&comp=${dataToSendInParams.comps.join(",")}`;
        }
        if (dataToSendInParams.job_types) {
            urlparams += `&job_type=${dataToSendInParams.job_types}`;
        }
        if (dataToSendInParams.search) {
            urlparams += `&search=${dataToSendInParams.search}`;
        }
        navigate(`/jobs?${urlparams}`);
    }, [dataToSendInParams]);

    const [sortJobs, setSortJobs] = useState("popular");

    return (
        <>
            <div className="max-w-7xl w-full pb-6 md:py-10 m-auto md:px-8 overflow-x-hidden md:space-y-4">
                <div className="bg-white py-6 lg:py-10 px-4 md:p-0 md:bg-transparent">
                    <CenterTitle
                        main="Find Your Dream Job"
                        subText="Search for job title, keywords, or company name"
                    />
                </div>
                <div className="bg-white py-1 px-5 rounded-md shadow-sm">
                    <JobSearch dataInParams={dataInParams} />
                </div>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 m-auto px-4 md:px-0">
                    <div>
                        <p className="md:hidden -mx-4">
                            <div className="relative bg-white py-3 ps-4 flex gap-2 w-screen">
                                <button>
                                    <i className="fas fa-filter"></i>
                                </button>
                                <span
                                    className="px-1 flex gap-2 overflow-auto no-scrollbar pe-8"
                                    // onClick={() => setOpenMobileFilter(true)}
                                >
                                    {mobileFilterButtonsData?.map((button) => (
                                        <button
                                            key={button.name}
                                            onClick={() => {
                                                setOpenMobileFilter(true);
                                                setOpenFilterName(button.name);
                                            }}
                                            className="border text-sm space-x-2 px-2 py-1 rounded whitespace-nowrap bg-gray-50"
                                        >
                                            <span>{button.name}</span>
                                            <i
                                                className={`${
                                                    button.name == "Sort By"
                                                        ? button.icon
                                                        : "fa-chevron-down"
                                                } fa-solid`}
                                            ></i>
                                        </button>
                                    ))}
                                </span>
                                <span className="absolute right-0 top-0 px-3 h-full bg-gradient-to-r to-white via-white from-[#ffffff7e]"></span>
                            </div>
                            <div>
                                {openMobileFilter && (
                                    <PopupModal
                                        closePopup={() =>
                                            setOpenMobileFilter(false)
                                        }
                                    >
                                        <JobFilter
                                            openFilterName={openFilterName}
                                            setOpenFilterName={
                                                setOpenFilterName
                                            }
                                            mobileFilter={true}
                                            closePopup={() =>
                                                setOpenMobileFilter(false)
                                            }
                                            setSortJobs={setSortJobs}
                                            dataInParams={dataInParams}
                                            setDataToSendInParams={
                                                setDataToSendInParams
                                            }
                                            mobileFilterButtonsData={
                                                mobileFilterButtonsData
                                            }
                                        />
                                    </PopupModal>
                                )}
                            </div>
                        </p>
                        <span className="md:block hidden">
                            <JobFilter
                                setSortJobs={setSortJobs}
                                dataInParams={dataInParams}
                                setDataToSendInParams={setDataToSendInParams}
                            />
                        </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:col-span-2 h-fit">
                        {!loadingSearchedJobs && (
                            <span className="-mb-3 ml-2 text-gray-500">
                                Showing {jobData?.length}{" "}
                                <>{jobData.length > 1 ? "jobs" : "job"}</>{" "}
                                {dataInParams.search && (
                                    <span>for {dataInParams.search}</span>
                                )}
                            </span>
                        )}
                        {!loadingSearchedJobs &&
                            jobData
                                ?.slice()
                                .sort((a, b) => {
                                    if (sortJobs === "high") {
                                        return b.salary - a.salary;
                                    } else if (sortJobs === "low") {
                                        return a.salary - b.salary;
                                    } else {
                                        return a - b;
                                    }
                                })
                                .map((job) => (
                                    <JobListingCard
                                        key={job.post_id}
                                        job={job}
                                    />
                                ))}
                        {loadingSearchedJobs &&
                            Array(4)
                                .fill(0)
                                .map((_, index) => (
                                    <JobListingCardLoader key={index} />
                                ))}

                        {!loadingSearchedJobs && jobData.length === 0 && (
                            <NoJobsCard
                                dataInParams={dataInParams}
                                setDataInParams={setDataInParams}
                            />
                        )}
                    </div>
                    <div>
                        <div className=" grid-cols-1 gap-4 hidden lg:grid bg-white p-5 rounded-lg border shadow-sm">
                            <span className="font-semibold">
                                <i className="fa-solid fa-arrow-trend-up mr-2"></i>
                                Latest Jobs
                            </span>

                            <span className="divide-y">
                                {!loadingLatestJobs &&
                                    latestJobs.length > 0 &&
                                    latestJobs.map((job) => (
                                        <JobCard key={job.post_id} job={job} />
                                    ))}
                                {loadingLatestJobs &&
                                    Array(4)
                                        .fill(0)
                                        .map((_, index) => (
                                            <JobCardLoader key={index} />
                                        ))}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Jobs;
