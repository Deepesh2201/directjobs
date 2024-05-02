import PropTypes from "prop-types";
import SecondaryButton from "../SharedComponents/SecondaryButton";
function NoJobsCard({ dataInParams, setDataInParams }) {
    return (
        <div className="flex flex-col items-center justify-center h-96">
            <div className="text-3xl text-gray-500">
                <i className="fa-solid fa-binoculars"></i>
            </div>
            <div className="text-xl text-gray-500">No Related jobs found</div>

            {Boolean(
                dataInParams?.cats ||
                    dataInParams?.locs ||
                    dataInParams?.comps ||
                    dataInParams?.job_types
            ) && (
                <>
                    <p>Filters are applied, clear to see all jobs</p>
                    {/* <SecondaryButton
                        className="mt-4 !py-0 border-none"
                        onClick={() => {
                            // setDataInParams({});
                        }}
                    >
                        Clear Filters
                    </SecondaryButton> */}
                </>
            )}

            {Boolean(dataInParams?.search) && (
                <>
                    <p className="mt-2 max-w-sm text-center">
                        Oops! No jobs found for{" "}
                        <span className="font-semibold">
                            {dataInParams?.search}
                        </span>
                        . Try searching with different keywords.
                    </p>
                </>
            )}
        </div>
    );
}

export default NoJobsCard;

NoJobsCard.propTypes = {
    dataInParams: PropTypes.object,
};
