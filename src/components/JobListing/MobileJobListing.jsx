import { useEffect, useState } from "react";
import { getJobDetails } from "./JobList";
import PrimaryButton from "../SharedComponents/PrimaryButton";
import { useParams } from "react-router-dom";

function MobileJobListing() {
    // get job id from url params id
    const { id } = useParams();
    const [jobId] = useState(id);
    const [jobDetails, setJobDetails] = useState();

    useEffect(() => {
        setJobDetails(getJobDetails(jobId));
    }, [jobId]);

    return (
        <div className="block -mt-8 md:mt-0 col-span-4 py-2 px-8 w-full overflow-scroll max-w-7xl m-auto">
            {/* Back button */}
            <button
                className="flex gap-2 my-4 items-center text-[color:var(--primary-color)]"
                onClick={() => window.history.back()}
            >
                <i className="text-lg text-[color:var(--primary-color)] fas fa-arrow-left"></i>
                <span className="text-lg text-[color:var(--primary-color)]">
                    Back to job listing
                </span>
            </button>
            {jobDetails && (
                <>
                    <div className="">
                        <div className="w-full flex gap-4 items-center">
                            <div className="w-16 h-16">
                                {jobDetails?.logo && (
                                    <img
                                        src={jobDetails?.logo}
                                        alt={jobDetails?.company}
                                    />
                                )}
                            </div>
                            <div>
                                <h2 className="text-lg font-medium text-[color:var(--primary-color)]">
                                    {jobDetails?.title}
                                </h2>
                                <p className="text-sm text-[color:var(--secondary-color)]">
                                    {jobDetails?.company}
                                </p>
                                <p className="text-sm text-[color:var(--secondary-color)]">
                                    {jobDetails?.location}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex my-4 gap-4">
                        {jobDetails?.type && (
                            <p className="text-sm text-[color:var(--secondary-color)]">
                                <span className="font-medium">Type:</span>{" "}
                                {jobDetails?.type}
                            </p>
                        )}
                        {jobDetails?.salary && (
                            <p className="text-sm text-[color:var(--secondary-color)]">
                                <span className="font-medium">
                                    Salary/Stipend:
                                </span>{" "}
                                {jobDetails?.salary}
                            </p>
                        )}
                        {jobDetails?.duration && (
                            <p className="text-sm text-[color:var(--secondary-color)]">
                                <span className="font-medium">Duration:</span>{" "}
                                {jobDetails?.duration}
                            </p>
                        )}
                        {jobDetails?.postedOn && (
                            <p className="text-sm text-[color:var(--secondary-color)]">
                                <span className="font-medium">Posted On:</span>{" "}
                                {jobDetails?.postedOn}
                            </p>
                        )}
                    </div>
                    <div>
                        {jobDetails?.details?.map((detail, index) => (
                            <div key={index} className="my-4">
                                <h3 className="text-lg font-medium text-[color:var(--primary-color)]">
                                    {detail.detailLabel}
                                </h3>
                                {detail.type === "Array" ? (
                                    <ul className="list-disc ml-5">
                                        {detail.detail.map((item, index) => (
                                            <li key={index} className="text-sm">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm">{detail.detail}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center my-8 flex flex-col items-center justify-center">
                        <PrimaryButton
                            to={jobDetails?.applyLink}
                            target="_blank"
                            className="w-fit py-2 bg-[color:var(--primary-color)] text-white rounded-md"
                        >
                            Apply
                        </PrimaryButton>
                        <span className="text-xs whitespace-nowrap mt-1 font-medium">
                            100+ already applied
                        </span>
                    </div>
                </>
            )}

            {!jobDetails && (
                <div className="w-full h-[30vh] flex items-center justify-center gap-2">
                    <i className="text-lg text-[color:var(--primary-color)] fas fa-exclamation-circle"></i>
                    <p className="text-lg text-[color:var(--primary-color)]">
                        Oops, no job details found!
                    </p>
                </div>
            )}
        </div>
    );
}

export default MobileJobListing;
