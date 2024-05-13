import { useEffect, useState } from "react";
import SortBy from "./SortBy";
import { getFilterProperties } from "../../db/jobFilter";
import PropTypes from "prop-types";
import SecondaryButton from "../SharedComponents/SecondaryButton";
import PrimaryButton from "../SharedComponents/PrimaryButton";

function JobFilter({
    dataInParams,
    setDataToSendInParams,
    setSortJobs,
    mobileFilter = false,
    closePopup,
    openFilterName,
    setOpenFilterName,
    mobileFilterButtonsData,
}) {
    const [selectedSort, setSelectedSort] = useState({});
    const [loccationFilterData, setLoccationFilterData] = useState([]);
    const [companyFilterData, setCompanyFilterData] = useState([]);
    const [minSalary, setMinSalary] = useState(0);
    const [maxSalary, setMaxSalary] = useState(100000);
    const [qualificationsFilterData, setQualificationsFilterData] = useState(
        []
    );
    const [jobTypeFilterData, setJobTypeFilterData] = useState([]);
    const [categoryFilterData, setCategoryFilterData] = useState([]);
    const tags = [
        { id: "relevant", label: "Most Relevant", color: "#000" },
        { id: "high", label: "Highest Salary", color: "#000" },
        { id: "low", label: "Lowest Salary", color: "#000" },
    ];

    const handleInput = (e) => {
        // set_minValue(e.minValue);
        // set_maxValue(e.maxValue);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [dataInParams]);

    useEffect(() => {
        setSortJobs(selectedSort?.id);
    }, [selectedSort]);

    const handleCategoryFilter = (e) => {
        const id = Number(e.target.id);
        console.log(id, typeof id);
        if (!dataInParams?.cats) {
            console.log("no cats");
            setDataToSendInParams({
                ...dataInParams,
                cats: [Number(id)],
            });
        } else if (dataInParams?.cats?.includes(id)) {
            console.log("there were cats");
            setDataToSendInParams({
                ...dataInParams,
                cats: dataInParams?.cats?.filter((cat) => cat !== id),
            });
        } else {
            console.log("there were no cats");
            setDataToSendInParams({
                ...dataInParams,
                cats: [...dataInParams.cats, Number(id)],
            });
        }
    };

    const handleLocationFilter = (e) => {
        const id = Number(e.target.id);
        if (!dataInParams?.locs) {
            setDataToSendInParams({
                ...dataInParams,
                locs: [Number(id)],
            });
        } else if (dataInParams?.locs?.includes(id)) {
            setDataToSendInParams({
                ...dataInParams,
                locs: dataInParams?.locs?.filter((loc) => loc !== id),
            });
        } else {
            setDataToSendInParams({
                ...dataInParams,
                locs: [...dataInParams.locs, Number(id)],
            });
        }
    };

    const handleCompanyFilter = (e) => {
        const id = Number(e.target.id);
        if (!dataInParams?.comps) {
            setDataToSendInParams({
                ...dataInParams,
                comps: [Number(id)],
            });
        } else if (dataInParams?.comps?.includes(id)) {
            setDataToSendInParams({
                ...dataInParams,
                comps: dataInParams?.comps?.filter((comp) => comp !== id),
            });
        } else {
            setDataToSendInParams({
                ...dataInParams,
                comps: [...dataInParams.comps, Number(id)],
            });
        }
    };

    const handleQualificationFilter = (e) => {
        const id = Number(e.target.id);
        if (!dataInParams?.quals) {
            setDataToSendInParams({
                ...dataInParams,
                quals: [Number(id)],
            });
        } else if (dataInParams?.quals?.includes(id)) {
            setDataToSendInParams({
                ...dataInParams,
                quals: dataInParams?.quals?.filter((qual) => qual !== id),
            });
        } else {
            setDataToSendInParams({
                ...dataInParams,

                quals: [...dataInParams.quals, Number(id)],
            });
        }
    };

    const handleJobTypeFilter = (e) => {
        const id = Number(e.target.id);
        if (!dataInParams?.job_types) {
            setDataToSendInParams({
                ...dataInParams,
                job_types: [Number(id)],
            });
        } else if (dataInParams?.job_types?.includes(id)) {
            setDataToSendInParams({
                ...dataInParams,
                job_types: dataInParams?.job_types?.filter(
                    (job_type) => job_type !== id
                ),
            });
        } else {
            setDataToSendInParams({
                ...dataInParams,
                job_types: [...dataInParams.job_types, Number(id)],
            });
        }
    };

    const handleClearAllFilters = () => {
        setDataToSendInParams({});
    };

    useEffect(() => {
        getFilterProperties().then((data) => {
            setMinSalary(data.min_salary);
            setMaxSalary(data.max_salary);
            setQualificationsFilterData(
                data.qualification_list.map((qualification) => ({
                    post_id: qualification.post_id,
                    post_title: qualification.post_title,
                    selected: dataInParams?.quals?.includes(
                        qualification.post_id
                    )
                        ? true
                        : false,
                }))
            );
            setJobTypeFilterData(data.job_types_list);
            setCategoryFilterData(
                data?.category_list?.map((category) => ({
                    post_id: category.post_id,
                    post_title: category.post_title,
                    selected: dataInParams?.cats?.includes(category.post_id)
                        ? true
                        : false,
                }))
            );
            setLoccationFilterData(
                data.location_list?.map((location) => ({
                    post_id: location.post_id,
                    post_title: location.post_title,
                    selected: dataInParams?.locs?.includes(location.post_id)
                        ? true
                        : false,
                }))
            );
            setCompanyFilterData(
                data.company_list.map((company) => ({
                    post_id: company.post_id,
                    post_title: company.post_title,
                    selected: dataInParams?.comps?.includes(company.post_id)
                        ? true
                        : false,
                }))
            );
        });
    }, [dataInParams]);

    if (mobileFilter) {
        return (
            <div className="h-full flex flex-col text-sm">
                <div>
                    <span className="font-medium text-sm flex justify-between">
                        <p>
                            <i className="fa-solid fa-filter mr-2"></i>
                            Filter Jobs
                        </p>

                        {Boolean(
                            dataInParams.cats ||
                                dataInParams.job_types ||
                                dataInParams.locs ||
                                dataInParams.comps ||
                                dataInParams.qualifications
                        ) && (
                            <button
                                onClick={handleClearAllFilters}
                                className="space-x-1 text-[color:var(--primary-color)]"
                            >
                                <i className="fa-solid fa-times"></i>
                                <span>Clear All</span>
                            </button>
                        )}
                    </span>
                    <hr className="my-3" />
                </div>
                <div className="flex-1 flex overflow-hidden">
                    <div className="w-[40%]">
                        {mobileFilterButtonsData?.map((button) => (
                            <button
                                key={button?.name}
                                onClick={() => setOpenFilterName(button?.name)}
                                className={`w-full text-left p-2 ${
                                    openFilterName === button?.name
                                        ? "bg-[color:var(--primary-color)] text-white"
                                        : ""
                                }`}
                            >
                                <i className={`fa-solid fa-${button.icon}`}></i>
                                <span>{button.name}</span>
                            </button>
                        ))}
                    </div>
                    <div className="w-full overflow-auto border rounded p-4">
                        <div className="space-y-3">
                            {openFilterName === "Sort By" && (
                                <div className="flex items-center gap-2">
                                    <SortBy
                                        selectedSort={selectedSort}
                                        setSelectedSort={setSelectedSort}
                                        tags={tags}
                                        // handleSort={handleSort}
                                    />
                                </div>
                            )}
                            {openFilterName === "Salary" && (
                                <div className="space-y-1">
                                    <p className="font-medium">Salary</p>
                                    <input
                                        type="range"
                                        min={minSalary}
                                        max={maxSalary}
                                        onChange={(e) =>
                                            handleInput(e.target.value)
                                        }
                                        className="w-full bg-[color:var(--primary-color)]"
                                    />
                                </div>
                            )}

                            {openFilterName === "Category" && (
                                <div className="space-y-1">
                                    <p className="font-medium">Category</p>
                                    <input
                                        icon="search"
                                        placeholder="Search..."
                                        className="w-full !py-1 !text-sm outline-none bg-transparent"
                                    />

                                    <div className="">
                                        {categoryFilterData &&
                                            categoryFilterData
                                                .sort(
                                                    (a, b) =>
                                                        b.selected - a.selected
                                                )
                                                .map((category) => (
                                                    <div
                                                        key={category.id}
                                                        className="gap-2 flex"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            id={
                                                                category.post_id
                                                            }
                                                            name={
                                                                category.post_title
                                                            }
                                                            checked={
                                                                category.selected
                                                            }
                                                            onChange={
                                                                handleCategoryFilter
                                                            }
                                                        />
                                                        <label
                                                            className="line-clamp-1"
                                                            htmlFor={
                                                                category.post_id
                                                            }
                                                        >
                                                            {
                                                                category.post_title
                                                            }
                                                        </label>
                                                    </div>
                                                ))}
                                    </div>
                                </div>
                            )}

                            {openFilterName === "Location" && (
                                <div className="space-y-1">
                                    <p className="font-medium">Location</p>
                                    <input
                                        icon="search"
                                        placeholder="Search..."
                                        className="w-full !py-1 !text-sm outline-none bg-transparent"
                                    />

                                    <div className="h-fit overflow-y-scroll">
                                        {loccationFilterData &&
                                            loccationFilterData
                                                .sort(
                                                    (a, b) =>
                                                        b.selected - a.selected
                                                )
                                                .map((location) => (
                                                    <div
                                                        key={location.id}
                                                        className="gap-2 flex"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            id={
                                                                location.post_id
                                                            }
                                                            name={
                                                                location.post_title
                                                            }
                                                            checked={
                                                                location.selected
                                                            }
                                                            onChange={
                                                                handleLocationFilter
                                                            }
                                                        />
                                                        <label
                                                            className="line-clamp-1"
                                                            htmlFor={
                                                                location.post_id
                                                            }
                                                        >
                                                            {
                                                                location.post_title
                                                            }
                                                        </label>
                                                    </div>
                                                ))}
                                    </div>
                                </div>
                            )}

                            {openFilterName === "Company" && (
                                <div className="space-y-1">
                                    <p className="font-medium">Company</p>
                                    <input
                                        icon="search"
                                        placeholder="Search..."
                                        className="w-full !py-1 !text-sm outline-none bg-transparent"
                                    />
                                    <div className="overflow-y-scroll">
                                        {companyFilterData &&
                                            companyFilterData
                                                .sort(
                                                    (a, b) =>
                                                        b.selected - a.selected
                                                )
                                                .map((company) => (
                                                    <div
                                                        key={company.id}
                                                        className="gap-2 flex"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            id={company.post_id}
                                                            name={
                                                                company.post_title
                                                            }
                                                            checked={
                                                                company.selected
                                                            }
                                                            onChange={
                                                                handleCompanyFilter
                                                            }
                                                        />
                                                        <label
                                                            className="line-clamp-1"
                                                            htmlFor={
                                                                company.post_id
                                                            }
                                                        >
                                                            {company.post_title}
                                                        </label>
                                                    </div>
                                                ))}
                                    </div>
                                </div>
                            )}

                            {openFilterName === "Qualification" && (
                                <div className="space-y-1">
                                    <p className="font-medium">Qualification</p>
                                    <input
                                        icon="search"
                                        placeholder="Search..."
                                        className="w-full !py-1 !text-sm outline-none bg-transparent"
                                    />

                                    <div className=" overflow-y-scroll">
                                        {qualificationsFilterData &&
                                            qualificationsFilterData.map(
                                                (qualification) => (
                                                    <div
                                                        key={qualification.id}
                                                        className="flex gap-2"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            id={
                                                                qualification.post_id
                                                            }
                                                            name={
                                                                qualification.post_title
                                                            }
                                                            onChange={
                                                                handleQualificationFilter
                                                            }
                                                            checked={
                                                                qualification.selected
                                                            }
                                                        />
                                                        <label
                                                            className="line-clamp-1"
                                                            htmlFor={
                                                                qualification.post_id
                                                            }
                                                        >
                                                            {
                                                                qualification.post_title
                                                            }
                                                        </label>
                                                    </div>
                                                )
                                            )}
                                    </div>
                                </div>
                            )}

                            {openFilterName === "Job Type" && (
                                <div className="space-y-1">
                                    <p className="font-medium">Job Type</p>
                                    <input
                                        icon="search"
                                        placeholder="Search..."
                                        className="w-full !py-1 !text-sm outline-none bg-transparent"
                                    />

                                    <div className="overflow-y-scroll">
                                        {jobTypeFilterData &&
                                            jobTypeFilterData.map((jobType) => (
                                                <div
                                                    key={jobType.id}
                                                    className="gap-2 flex"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id={jobType.post_id}
                                                        name={
                                                            jobType.post_title
                                                        }
                                                    />
                                                    <label
                                                        className="line-clamp-1"
                                                        htmlFor={
                                                            jobType.post_id
                                                        }
                                                    >
                                                        {jobType.post_title}
                                                    </label>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 pt-2 mt-2 border-t border-black justify-between">
                    <SecondaryButton
                        onClick={handleClearAllFilters}
                        className="text-xs flex items-center border-none"
                    ></SecondaryButton>

                    <PrimaryButton onClick={closePopup}>
                        Apply Filters
                    </PrimaryButton>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-5 rounded-lg border shadow-sm w-full space-y-5 text-sm">
            <div>
                <div>
                    <span className="font-medium text-sm flex justify-between">
                        <p>
                            <i className="fa-solid fa-filter mr-2"></i>
                            Filter Jobs
                        </p>

                        {Boolean(
                            dataInParams.cats ||
                                dataInParams.job_types ||
                                dataInParams.locs ||
                                dataInParams.comps ||
                                dataInParams.qualifications
                        ) && (
                            <button
                                onClick={handleClearAllFilters}
                                className="space-x-1 text-[color:var(--primary-color)]"
                            >
                                <i className="fa-solid fa-times"></i>
                                <span>Clear All</span>
                            </button>
                        )}
                    </span>
                    <hr className="my-3" />
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <SortBy
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
                        tags={tags}
                        // handleSort={handleSort}
                    />
                </div>
            </div>
            <div className="space-y-3">
                <div className="space-y-1">
                    <p className="font-medium">Salary</p>
                    <input
                        type="range"
                        min={minSalary}
                        max={maxSalary}
                        onChange={(e) => handleInput(e.target.value)}
                        className="w-full bg-[color:var(--primary-color)]"
                    />
                </div>

                <div className="space-y-1 p-3 border rounded-md">
                    <p className="font-medium">Category</p>
                    <input
                        icon="search"
                        placeholder="Search..."
                        className="w-full !py-1 !text-sm outline-none bg-transparent"
                    />

                    <div className="max-h-44 overflow-y-scroll">
                        {categoryFilterData &&
                            categoryFilterData
                                .sort((a, b) => b.selected - a.selected)
                                .map((category) => (
                                    <div
                                        key={category.id}
                                        className="gap-2 flex"
                                    >
                                        <input
                                            type="checkbox"
                                            id={category.post_id}
                                            name={category.post_title}
                                            checked={category.selected}
                                            onChange={handleCategoryFilter}
                                        />
                                        <label
                                            className="line-clamp-1"
                                            htmlFor={category.post_id}
                                        >
                                            {category.post_title}
                                        </label>
                                    </div>
                                ))}
                    </div>
                </div>
                <div className="space-y-1 p-3 border rounded-md">
                    <p className="font-medium">Location</p>
                    <input
                        icon="search"
                        placeholder="Search..."
                        className="w-full !py-1 !text-sm outline-none bg-transparent"
                    />

                    <div className="max-h-44 h-fit overflow-y-scroll">
                        {loccationFilterData &&
                            loccationFilterData
                                .sort((a, b) => b.selected - a.selected)
                                .map((location) => (
                                    <div
                                        key={location.id}
                                        className="gap-2 flex"
                                    >
                                        <input
                                            type="checkbox"
                                            id={location.post_id}
                                            name={location.post_title}
                                            checked={location.selected}
                                            onChange={handleLocationFilter}
                                        />
                                        <label
                                            className="line-clamp-1"
                                            htmlFor={location.post_id}
                                        >
                                            {location.post_title}
                                        </label>
                                    </div>
                                ))}
                    </div>
                </div>
                <div className="space-y-1 p-3 border rounded-md">
                    <p className="font-medium">Company</p>
                    <input
                        icon="search"
                        placeholder="Search..."
                        className="w-full !py-1 !text-sm outline-none bg-transparent"
                    />
                    <div className="max-h-44 overflow-y-scroll">
                        {companyFilterData &&
                            companyFilterData
                                .sort((a, b) => b.selected - a.selected)
                                .map((company) => (
                                    <div
                                        key={company.id}
                                        className="gap-2 flex"
                                    >
                                        <input
                                            type="checkbox"
                                            id={company.post_id}
                                            name={company.post_title}
                                            checked={company.selected}
                                            onChange={handleCompanyFilter}
                                        />
                                        <label
                                            className="line-clamp-1"
                                            htmlFor={company.post_id}
                                        >
                                            {company.post_title}
                                        </label>
                                    </div>
                                ))}
                    </div>
                </div>

                <div className="space-y-1 p-3 border rounded-md">
                    <p className="font-medium">Qualification</p>
                    <input
                        icon="search"
                        placeholder="Search..."
                        className="w-full !py-1 !text-sm outline-none bg-transparent"
                    />

                    <div className="max-h-44 overflow-y-scroll">
                        {qualificationsFilterData &&
                            qualificationsFilterData.map((qualification) => (
                                <div
                                    key={qualification.id}
                                    className="flex gap-2"
                                >
                                    <input
                                        type="checkbox"
                                        id={qualification.post_id}
                                        name={qualification.post_title}
                                        onChange={handleQualificationFilter}
                                        checked={qualification.selected}
                                    />
                                    <label
                                        className="line-clamp-1"
                                        htmlFor={qualification.post_id}
                                    >
                                        {qualification.post_title}
                                    </label>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="space-y-1 p-3 border rounded-md">
                    <p className="font-medium">Job Type</p>
                    <input
                        icon="search"
                        placeholder="Search..."
                        className="w-full !py-1 !text-sm outline-none bg-transparent"
                    />

                    <div className="max-h-44 overflow-y-scroll">
                        {jobTypeFilterData &&
                            jobTypeFilterData.map((jobType) => (
                                <div key={jobType.id} className="gap-2 flex">
                                    <input
                                        type="checkbox"
                                        id={jobType.post_id}
                                        name={jobType.post_title}
                                    />
                                    <label
                                        className="line-clamp-1"
                                        htmlFor={jobType.post_id}
                                    >
                                        {jobType.post_title}
                                    </label>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobFilter;

JobFilter.propTypes = {
    dataInParams: PropTypes.object,
    setDataToSendInParams: PropTypes.func,
    setSortJobs: PropTypes.func,
    mobileFilter: PropTypes.bool,
    closePopup: PropTypes.func,
    openFilterName: PropTypes.string,
    setOpenFilterName: PropTypes.func,
    mobileFilterButtonsData: PropTypes.array,
};
