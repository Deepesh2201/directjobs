import defaultAvatar from "../../assets/images/defaultAvatar.png";
import PropTypes from "prop-types";

function JobCard({ job }) {
    return (
        <div className="bg-red-5 w-full h-full max-w-sm p-5 rounded-lg shadow-md hover:shadow-2xl transition-all ease-linear border-[1px] m-auto cursor-pointer">
            <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full border-[1px] overflow-hidden">
                    <img src={job?.avatar || defaultAvatar} alt="" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-medium text-[color:var(--primary-color)]">
                        {job?.title}
                    </h3>
                    <p className="text-sm font-medium">{job?.company}</p>
                </div>
            </div>
            <div className="flex gap-2 mt-4">
                <p className="text-sm text-gray-700">{job?.location}</p>
                <p className="text-sm text-gray-700">•</p>
                <p className="text-sm text-gray-700">{job?.type}</p>
            </div>
            <div className="mt-1 flex justify-between">
                <p className="text-sm text-green-500">{job?.posted}</p>
                {job?.new && (
                    <p className="text-sm text-white bg-green-500 px-3 py-1 rounded">
                        New
                    </p>
                )}
            </div>
        </div>
    );
}

export default JobCard;

JobCard.propTypes = {
    job: PropTypes.object,
};
