import { useEffect, useState } from "react";
import SortBy from "./SortBy";
import { Input } from "semantic-ui-react";
import { getFilterProperties } from "../../db/jobFilter";

function JobFilter() {
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
        getFilterProperties().then((data) => {
            console.log(data);
            setMinSalary(data.min_salary);
            setMaxSalary(data.max_salary);
            setQualificationsFilterData(data.qualification_list);
            setJobTypeFilterData(data.job_types_list);
            setCategoryFilterData(data.category_list);
            setLoccationFilterData(data.location_list);
            setCompanyFilterData(data.company_list);
        });
    }, []);

    return (
        <div className="bg-white p-5 rounded-lg border shadow-sm w-full space-y-5 text-sm">
            <div>
                <div>
                    <span className="font-medium text-sm">
                        <i className="fa-solid fa-filter mr-2"></i>
                        Filter Jobs
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
                            categoryFilterData.map((category) => (
                                <div key={category.id} className="space-x-2">
                                    <input
                                        type="checkbox"
                                        id={category.post_id}
                                        name={category.post_title}
                                    />
                                    <label htmlFor={category.post_id}>
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
                            loccationFilterData.map((location) => (
                                <div key={location.id} className="space-x-2">
                                    <input
                                        type="checkbox"
                                        id={location.post_id}
                                        name={location.post_title}
                                    />
                                    <label htmlFor={location.post_id}>
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
                            companyFilterData.map((company) => (
                                <div key={company.id} className="space-x-2">
                                    <input
                                        type="checkbox"
                                        id={company.post_id}
                                        name={company.post_title}
                                    />
                                    <label htmlFor={company.post_id}>
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
                                    className="space-x-2"
                                >
                                    <input
                                        type="checkbox"
                                        id={qualification.post_id}
                                        name={qualification.post_title}
                                    />
                                    <label htmlFor={qualification.post_id}>
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
                                <div key={jobType.id} className="space-x-2">
                                    <input
                                        type="checkbox"
                                        id={jobType.post_id}
                                        name={jobType.post_title}
                                    />
                                    <label htmlFor={jobType.post_id}>
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
