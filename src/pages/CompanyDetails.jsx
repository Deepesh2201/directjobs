import { useEffect, useState } from "react";
import { getCompanyDetails, getCompanyJobs } from "../db/company";
import { Link, useParams } from "react-router-dom";
import logo from "../assets/images/darkLogo.png";
import { getUnsplashImage } from "../utils/UnsplashImage";
import JobCard from "../components/JobListing/JobCard";
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
            <div className="max-w-7xl md:pt-10 m-auto px-4 md:px-8">
                <div className="relative flex gap-4 mb-4 bg-cover bg-bottom h-52 items-center justify-between p-10">
                    <img
                        src={bannerImage?.urls?.regular}
                        className="absolute object-cover h-full rounded-md w-full z-0 opacity-30 object-center -ml-10"
                        alt=""
                    />

                    <div className="z-10 flex gap-6 items-center">
                        <span
                            className="block w-28 h-28 bg-contain bg-center rounded-full bg-no-repeat overflow-hidden"
                            style={{ backgroundImage: `url(${logo})` }}
                        >
                            <img
                                src={tempLogo?.urls?.small}
                                className="object-cover w-full h-full"
                                alt=""
                            />
                        </span>
                        <span>
                            <h1 className="text-4xl font-medium">
                                {CompanyDetails?.company_name}
                            </h1>
                            <p className="text-base font-medium text-zinc-800 flex gap-2 mt-1">
                                <span>{CompanyDetails?.company_email}</span>
                                <span>|</span>

                                <Link
                                    to={CompanyDetails?.company_website}
                                    target="_blank"
                                    className="bg-blue-500 px-3 flex items-center text-white rounded text-xs hover:bg-blue-600 transition duration-300 ease-in-out"
                                >
                                    visit website
                                </Link>
                            </p>
                        </span>
                    </div>

                    <div className="z-10">
                        <div className="bg-white h-28 w-28 border shadow-sm px-4 py-2 rounded-md flex flex-col justify-center items-center">
                            <span>
                                <span className="text-4xl font-medium text-zinc-800">
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
