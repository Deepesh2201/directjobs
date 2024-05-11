import { useEffect, useState } from "react";
import { getCompanyDetails, getCompanyJobs } from "../db/company";
import { Link, useParams } from "react-router-dom";
import logo from "../assets/images/darkLogo.png";
import { getUnsplashImage } from "../utils/UnsplashImage";
import JobListingCard from "../components/JobListing/JobListingCard";

function CompanyDetails() {
    const [CompanyDetails, setCompanyDetails] = useState([]);
    const companyId = Number(useParams().id);
    const [bannerImage, setBannerImage] = useState("");
    const [tempLogo, setTempLogo] = useState("");
    const [JobList, setJobList] = useState([]);

    useEffect(() => {
        getUnsplashImage(`${CompanyDetails?.company_name} team`).then(
            (data) => {
                setBannerImage(data);
            }
        );

        getUnsplashImage(`${CompanyDetails?.company_name} icon`).then(
            (data) => {
                setTempLogo(data);
            }
        );

        document.title = `  ${CompanyDetails?.company_name} | DirectJobs`;
    }, [companyId, CompanyDetails?.company_name]);

    useEffect(() => {
        getCompanyDetails(companyId).then((data) => {
            setCompanyDetails(data);
        });

        getCompanyJobs(companyId).then((data) => {
            setJobList(data);
        });
    }, [companyId]);

    useEffect(() => {
        console.log(JobList);
    }, [JobList]);

    return (
        <div className="bg-white">
            <div className="max-w-7xl pt-10 m-auto px-4 md:px-8">
                <div className="relative md:flex gap-2 md:gap-4 mb-4 bg-cover bg-bottom md:h-52 items-center justify-between md:p-10">
                    <img
                        src={bannerImage?.urls?.regular}
                        className="hidden md:block absolute object-cover h-full rounded-md w-full z-0 opacity-30 object-center md:-ml-10"
                        alt=""
                    />

                    <div className="z-10 flex gap-3 md:gap-6 items-center">
                        <span className="relative block w-16 h-16 md:w-28 md:h-28 border-blue-500 border-2 rounded-md md:rounded-full overflow-hidden">
                            <img
                                // src={tempLogo?.urls?.small}
                                src={CompanyDetails?.company_logo}
                                className="object-contain w-full h-full"
                                alt=""
                            />
                            <span className="h-full w-full absolute left-0 top-0 p-4 opacity-55">
                                <img src={logo} className="h-full w-full object-contain" alt="" />
                            </span>
                        </span>
                        <span className="leading-none">
                            <h1 className="text-2xl md:text-4xl font-medium leading-none">
                                {CompanyDetails?.company_name}
                            </h1>
                            <p className="text-sm font-medium text-zinc-800 flex md:items-center flex-col md:flex-row gap-2 md:mt-1 leading-none">
                                <span>{CompanyDetails?.company_email}</span>
                                <span className="hidden md:block">|</span>

                                <a
                                    href={
                                        CompanyDetails?.company_website?.startsWith(
                                            "http"
                                        )
                                            ? CompanyDetails?.company_website
                                            : `https://${CompanyDetails?.company_website}`
                                    }
                                    target="_blank"
                                    className="md:bg-blue-500 -my-2 md:my-0 text-blue-500 w-fit md:px-3 py-1 flex items-center md:text-white rounded text-xs md:hover:bg-blue-600 transition duration-300 ease-in-out"
                                >
                                    visit website
                                </a>
                            </p>
                        </span>
                    </div>

                    <div className="z-10">
                        <div className="bg-white flex-row gap-2 text-xs md:h-28 md:w-28 w-fit border mt-5 md:mt-0 shadow-sm px-4 py-2 rounded-md flex md:flex-col justify-center items-center">
                            <span>
                                <span className="md:text-4xl font-medium text-zinc-800">
                                    {JobList.length}
                                </span>
                            </span>
                            <p className="text-xs font-medium">
                                {JobList.length > 1
                                    ? "Jobs Available"
                                    : "Job Available"}
                            </p>
                        </div>
                    </div>
                </div>

                {CompanyDetails?.company_info && (
                    <div>
                        <h2 className="text-3xl font-medium text-zinc-800 my-2">
                            Quick Overview of {CompanyDetails?.company_name}
                        </h2>
                        <p className="text-zinc-800 text-sm text-justify leading-snug">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: CompanyDetails?.company_info,
                                }}
                            />
                        </p>
                    </div>
                )}
            </div>

            {JobList.length > 0 && (
                <div className="max-w-7xl m-auto px-4 md:px-8 py-8">
                    <h2 className="text-3xl font-medium text-zinc-800">
                        Jobs at {CompanyDetails?.company_name}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {JobList.map((job) => (
                            <JobListingCard key={job.post_id} job={job} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CompanyDetails;
