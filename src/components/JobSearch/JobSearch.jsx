import { useNavigate } from "react-router-dom";
import PrimaryButton from "../SharedComponents/PrimaryButton";
import { useEffect, useState } from "react";
import { getFilterProperties } from "../../db/jobFilter";
import SearchableDropdown from "../SharedComponents/SearchableDropdown";
import { Input } from "semantic-ui-react";
import "semantic-ui-css/components/dropdown.min.css";
import "semantic-ui-css/components/transition.min.css";
import "semantic-ui-css/components/input.min.css";
import checkIsMobile from "../../utils/checkIsMobile";
import PropTypes from "prop-types";

function JobSearch({ compact = false, iconOnLeft = true }) {
    const [search, setSearch] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const [locationValue, setLocationValue] = useState("");
    const [category, setCategory] = useState([]);
    const [location, setLocation] = useState([]);
    const [error, setError] = useState(null);
    const isMobile = checkIsMobile();

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        // if (!categoryValue && !locationValue && !search) {
        //     setError(
        //         "Please select a category, location, or enter a search term."
        //     );
        //     setTimeout(() => setError(null), 5000);
        //     return;
        // }
        let urlparams = "";
        if (categoryValue) {
            urlparams += `&cat=${categoryValue}`;
        }
        if (locationValue) {
            urlparams += `&loc=${locationValue}`;
        }
        if (search) {
            urlparams += `&search=${search.trim().replace(/\s/g, "+")}`;
        }
        navigate(`/jobs?${urlparams}`);
    };

    useEffect(() => {
        getFilterProperties()
            .then((data) => {
                data.category_list.forEach((cat) => {
                    cat.key = cat.post_id;
                    cat.value = cat.post_id;
                    cat.text = cat.post_title;
                    delete cat.post_id;
                    delete cat.post_title;
                });
                data.location_list.forEach((loc) => {
                    loc.key = loc.post_id;
                    loc.value = loc.post_id;
                    loc.text = loc.post_title;
                    delete loc.post_id;
                    delete loc.post_title;
                });

                setCategory([
                    { key: "none", text: "Select Category", value: "" },
                    ...data.category_list,
                ]);
                setLocation([
                    { key: "none", text: "Select Location", value: "" },
                    ...data.location_list,
                ]);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <form
                className="flex flex-col md:flex-row justify-center items-center gap-2 my-4"
                onSubmit={handleSearch}
            >
                <div className="flex items-center justify-between w-full rounded-md p-0.5 lg:p-[2.5px] overflow-clip">
                    <div
                        className={`text-black min-w-6 justify-center flex items-center h-full ${
                            iconOnLeft ? "block" : "hidden"
                        }`}
                    >
                        <i className={`fas fa-search text-base mr-2`}></i>
                    </div>

                    <div className="relative flex-1 w-[70%]">
                        <Input
                            type="text"
                            placeholder="Type a job title or keyword"
                            value={search}
                            compact={compact}
                            className="w-[100%]"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {search && (
                            <button
                                className="absolute right-1 top-0 h-full p-2"
                                onClick={() => setSearch("")}
                            >
                                <i className="fas fa-times text-gray-500"></i>
                            </button>
                        )}
                    </div>
                </div>
                <div
                    className={`relative flex items-center justify-center w-full ${
                        compact ? "hidden" : ""
                    }`}
                >
                    <SearchableDropdown
                        placeholder={"Select Category"}
                        options={category}
                        icon="fas fa-table"
                        value={categoryValue}
                        setValue={setCategoryValue}
                    />
                </div>
                <div
                    className={`relative flex items-center justify-center w-full ${
                        compact ? "hidden" : ""
                    }`}
                >
                    <SearchableDropdown
                        placeholder={"Select Location"}
                        options={location}
                        icon="fas fa-map-marker-alt"
                        value={locationValue}
                        setValue={setLocationValue}
                        compact={isMobile ? true : false}
                    />
                </div>
                <PrimaryButton
                    className={`text-base flex gap-2 ${
                        compact ? "hidden !px-3" : "!px-4 !py-1.5"
                    }`}
                    onClick={handleSearch}
                >
                    <i className="fas fa-search text-base hidden md:inline"></i>
                    <span hidden={compact}>Find Jobs</span>
                    <i className="md:hidden fas fa-angle-right"></i>
                </PrimaryButton>
            </form>
            {error && (
                <div className="w-full mb-4">
                    <h2 className="text-sm text-red-600 text-center">
                        {error}
                    </h2>
                </div>
            )}
        </>
    );
}

export default JobSearch;

JobSearch.propTypes = {
    compact: PropTypes.bool,
    iconOnLeft: PropTypes.bool,
};
