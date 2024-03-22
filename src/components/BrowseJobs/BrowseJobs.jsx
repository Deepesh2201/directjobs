import PrimaryButton from "../SharedComponents/PrimaryButton";
import JobCard from "./JobCard";
import PropTypes from "prop-types";
function BrowseJobs({ jobs }) {
    return (
        <div className="px-8 max-w-7xl m-auto  py-8 sm:py-14 ">
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
                    <PrimaryButton className={"py-4"}>
                        Browse All Jobs
                    </PrimaryButton>
                </div>
            </div>
            <div className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {jobs?.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </div>
            </div>
            <a className="block mt-8 text-center px-8 space-x-2">
                <span className="text-center">Expore 10K+ Jobs</span>
                <i className="fa-solid fa-angles-right"></i>
            </a>
        </div>
    );
}

export default BrowseJobs;

BrowseJobs.propTypes = {
    jobs: PropTypes.array,
};
