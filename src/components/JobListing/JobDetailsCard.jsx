import PrimaryButton from "../SharedComponents/PrimaryButton";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { getPostViews } from "../../db/postviews";
import { useEffect, useState } from "react";
import formatAmount from "../../utils/formatAmount";

function JobDetailsCard({ jobDetails }) {
    const [views, setViews] = useState(0);

    useEffect(() => {
        getPostViews(jobDetails?.post_id).then((data) => {
            setViews(data.views);
        });

        console.log(views);
    }, [jobDetails?.post_id]);

    // handle go back, if back url is of same domain then go back else go to jobs page
    const goBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "/jobs";
        }
    };

    return (
        <>
            <div className="md:hidden text-[color:var(--primary-color)] cursor-pointer font-medium mb-4 block" onClick={goBack}>
                <i className="fa-solid fa-arrow-left mr-2"></i>
                <span>Go Back</span>
            </div>
            <div className="md:flex items-center gap-4 my-4">
                <div className="w-full flex gap-4 items-center">
                    <div className="w-16 h-16 border-2 border-[color:var(--primary-color)] rounded-full overflow-hidden">
                        {jobDetails?.post_image && (
                            <img
                                src={jobDetails?.post_image}
                                alt={jobDetails?.company_name}
                            />
                        )}
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-[color:var(--primary-color)]">
                            {jobDetails?.post_title}
                        </h2>
                        <p className="text-sm text-[color:var(--secondary-color)]">
                            {jobDetails?.company_name} |{" "}
                            {jobDetails?.designation}
                        </p>
                        {jobDetails?.location && (
                            <p className="text-sm text-[color:var(--secondary-color)]">
                                <i className="fa-solid fa-map-marker-alt mr-1 text-[color:var(--primary-color)] text-xs"></i>
                                {jobDetails?.location}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex text-center my-5 gap-3 md:gap-1 md:flex-col items-center md:justify-center">
                    <PrimaryButton
                        to={jobDetails?.applyLink}
                        target="_blank"
                        className="w-fit py-2 bg-[color:var(--primary-color)] text-white rounded-md"
                    >
                        <span>Apply Now</span>
                    </PrimaryButton>
                    <span className="text-xs whitespace-nowrap mt-1 font-medium text-green-600">
                        <i className="fa-solid fa-arrow-trend-up mr-1"></i>
                        {views === 0
                            ? "Be the first to apply"
                            : `${views}`}{" "}
                    </span>
                </div>
            </div>

            <div className="flex my-4 gap-4 flex-wrap">
                {jobDetails?.experience && (
                    <p className="text-sm text-[color:var(--secondary-color)]">
                        <span className="font-medium">Min. Experience:</span>{" "}
                        {jobDetails?.experience}
                    </p>
                )}

                {jobDetails?.qualification && (
                    <p className="text-sm text-[color:var(--secondary-color)]">
                        <span className="font-medium">Qualification:</span>{" "}
                        {jobDetails?.qualification}
                    </p>
                )}

                {jobDetails?.skills && (
                    <p className="text-sm text-[color:var(--secondary-color)]">
                        <span className="font-medium">Skills:</span>{" "}
                        {jobDetails?.skills}
                    </p>
                )}
            </div>
            <div className="flex my-4 gap-4 flex-wrap">
                {jobDetails?.job_type && (
                    <p className="text-sm text-[color:var(--secondary-color)]">
                        <span className="font-medium">Type:</span>{" "}
                        {jobDetails?.job_type}
                    </p>
                )}
                {jobDetails?.salary && (
                    <p className="text-sm text-[color:var(--secondary-color)]">
                        <span className="font-medium">Salary/Stipend:</span>{" "}
                        {formatAmount(Number(jobDetails?.salary))}
                    </p>
                )}
                {jobDetails?.job_work_days && (
                    <p className="text-sm text-[color:var(--secondary-color)]">
                        <span className="font-medium">
                            <i className="fa-solid fa-calendar-day mr-1"></i>
                        </span>{" "}
                        {jobDetails?.job_work_days}
                    </p>
                )}
                {jobDetails?.job_work_time && (
                    <p className="text-sm text-[color:var(--secondary-color)]">
                        <span className="font-medium">
                            <i className="fa-solid fa-clock mr-1"></i>
                        </span>{" "}
                        {jobDetails?.job_work_time}
                    </p>
                )}
            </div>

            <div className="my-4">
                <h3 className="text-lg font-medium text-[color:var(--primary-color)]">
                    Job Description
                </h3>
                <div className="text-sm">{parse(jobDetails?.description)}</div>
            </div>
            <div className="text-right mt-10 text-xs font-medium">
                {jobDetails?.date && (
                    <p className="text-[color:var(--primary-color)]">
                        <span className="">Job Posted On:</span>{" "}
                        {jobDetails?.date}
                    </p>
                )}
            </div>
            {/* <div>
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
            </div> */}
        </>
    );
}

export default JobDetailsCard;

JobDetailsCard.propTypes = {
    jobDetails: PropTypes.object.isRequired,
};
