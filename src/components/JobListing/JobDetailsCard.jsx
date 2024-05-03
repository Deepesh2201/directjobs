import parse from "html-react-parser";
import PropTypes from "prop-types";
import { getPostViews } from "../../db/postviews";
import { useEffect, useState } from "react";
import formatAmount from "../../utils/formatAmount";
import { useQuery } from "../../utils/queryParams";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../SharedComponents/SecondaryButton";

function JobDetailsCard({ jobDetails }) {
    const [views, setViews] = useState(0);
    const query = useQuery();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            getPostViews(jobDetails?.post_id).then((data) => {
                setViews(data.views);
            });
        } catch (error) {
            console.log(error);
        }
    }, [jobDetails?.post_id]);

    // handle go back, if back url is of same domain then go back else go to jobs page
    const goBack = () => {
        if (query.get("search")) {
            navigate(`/jobs?search=${query.get("search")}`);
        }
        window.history.back();
    };

    return (
        <>
            <div className="my-4 space-y-3">
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
                        <h2 className="text-lg font-medium text-[color:var(--primary-color)] flex items-center gap-2">
                            {jobDetails?.post_title}
                            <span className="text-xs whitespace-nowrap font-medium text-green-600">
                                <i className="fa-solid fa-arrow-trend-up mr-1"></i>
                                {views === 0
                                    ? "Be the first to apply"
                                    : `${views}`}{" "}
                            </span>
                        </h2>
                        <p className="text-sm text-[color:var(--secondary-color)]">
                            <strong>{jobDetails?.company_name}</strong> |{" "}
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
            <div className="flex flex-wrap text-sm gap-2 items-center w-fit">
                <SecondaryButton
                    to={jobDetails?.applyLink}
                    target="_blank"
                    className="!px-2.5 !py-1"
                >
                    <i className="fa-solid fa-arrow-right mr-1 text-xs"></i>
                    <span>Apply Now</span>
                </SecondaryButton>
                <SecondaryButton className="!px-2.5 !py-1">
                    <i className="fa-solid fa-phone mr-1 text-xs"></i>
                    <span>Call HR</span>
                </SecondaryButton>
                <SecondaryButton className="!px-2.5 !py-1">
                    <i className="fa-brands fa-whatsapp mr-1 text-xs"></i>
                    <span>WhatsApp</span>
                </SecondaryButton>
            </div>
            <div className="text-right mt-10 text-xs font-medium">
                {jobDetails?.date && (
                    <p className="text-[color:var(--primary-color)]">
                        <span className="">Job Posted On:</span>{" "}
                        {jobDetails?.date}
                    </p>
                )}
            </div>
        </>
    );
}

export default JobDetailsCard;

JobDetailsCard.propTypes = {
    jobDetails: PropTypes.object.isRequired,
};
