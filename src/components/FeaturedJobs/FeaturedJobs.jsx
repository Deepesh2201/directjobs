import PrimaryButton from "../SharedComponents/PrimaryButton";
import JobListCard from "../JobListing/JobListCard";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import checkIsMobile from "../../utils/checkIsMobile";
function FeaturedJobs({ jobs, sectionId }) {
    const isMobile = checkIsMobile();
    const maxCount = isMobile ? 4 : 9;
    return (
        <div
            className="px-4 lg:px-8 max-w-7xl m-auto my-16 md:my-36"
            id={sectionId}
        >
            <div className="flex gap-5 justify-between">
                <div className="space-y-2 sm:space-y-4 max-w-2xl">
                    <h3 className="text-center sm:text-left font-medium text-lg text-[color:var(--primary-color)]">
                        10K+ Jobs Available
                    </h3>
                    <h2 className="text-center sm:text-left font-medium text-3xl md:text-4xl lg:text-5xl">
                        Find Your Career You Love on{" "}
                        <span className="text-[color:var(--primary-color)]">
                            {" "}
                            Direct Jobs
                        </span>
                    </h2>
                </div>
                <div className="sm:flex justify-between items-center whitespace-nowrap hidden">
                    <PrimaryButton to={"/jobs"} className={"py-4"}>
                        Browse All Jobs
                    </PrimaryButton>
                </div>
            </div>
            <div className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {jobs?.slice(0, maxCount).map((job) => (
                        <Link
                            key={job.post_id}
                            to={`jobs/${job.post_id}`}
                            className="rounded-lg overflow-hidden bg-slate-100"
                        >
                            <JobListCard job={job} />
                        </Link>
                    ))}
                </div>
            </div>
            <Link
                to={"/jobs"}
                className="block mt-8 text-center px-8 space-x-2"
            >
                <span className="text-center">Explore 10K+ Jobs</span>
                <i className="fa-solid fa-angles-right animate-bounce"></i>
            </Link>
        </div>
    );
}

export default FeaturedJobs;

FeaturedJobs.propTypes = {
    jobs: PropTypes.array,
    sectionId: PropTypes.string,
};
