import { useEffect, useState } from "react";
import SortBy from "./SortBy";
import { getFilterProperties } from "../../db/jobFilter";
import PropTypes from "prop-types";

function JobFilter({ dataInParams }) {
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

    const handleInput = (e) => {
        // set_minValue(e.minValue);
        // set_maxValue(e.maxValue);
    };

    useEffect(() => {
        getFilterProperties()
            .then((data) => {
                setMinSalary(data.min_salary);
                setMaxSalary(data.max_salary);
                setQualificationsFilterData(data.qualification_list);
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
            })
            .then(() => {
                console.log("Filter properties fetched successfully");
                console.log(dataInParams);
                console.log(categoryFilterData);
            });
    }, [dataInParams]);

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
                            <button className="space-x-1 text-[color:var(--primary-color)]">
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
                    />
                </div>
            </div>
            <div className="space-y-3">
                <div className="space-y-1 p-3 border rounded-md">
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
};
