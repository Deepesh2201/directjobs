import { useNavigate } from "react-router-dom";
import PrimaryButton from "../SharedComponents/PrimaryButton";
import { useEffect, useState } from "react";
import { getFilterProperties } from "../../db/jobFilter";
import SearchableDropdown from "../SharedComponents/SearchableDropdown";
import { Input } from "semantic-ui-react";
import "semantic-ui-css/components/dropdown.min.css";
import "semantic-ui-css/components/transition.min.css";
import "semantic-ui-css/components/input.min.css";

function JobSearch() {
    const [search, setSearch] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const [locationValue, setLocationValue] = useState("");
    const [category, setCategory] = useState([]);
    const [location, setLocation] = useState([]);

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
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
        <form
            className="flex flex-col md:flex-row justify-center items-center gap-2 my-4"
            onSubmit={handleSearch}
        >
            <div className="flex items-center justify-between w-full rounded-md p-0.5 lg:p-[2.5px]">
                <div className="text-black w-10 flex justify-center items-center h-full">
                    <i className={`fas fa-search text-sm `}></i>
                </div>

                <Input
                    type="text"
                    placeholder="Search for job title/keywords"
                    className="w-full outline-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="relative flex items-center justify-center w-full">
                <SearchableDropdown
                    placeholder={"Select Category"}
                    options={category}
                    icon="fas fa-table"
                    value={categoryValue}
                    setValue={setCategoryValue}
                />
            </div>
            <div className="relative flex items-center justify-center w-full">
                <SearchableDropdown
                    placeholder={"Select Location"}
                    options={location}
                    icon="fas fa-map-marker-alt"
                    value={locationValue}
                    setValue={setLocationValue}
                />
            </div>
            <PrimaryButton
                className={"!text-lg w-full lg:w-fit"}
                onClick={handleSearch}
            >
                <i className="fas fa-search mr-2 text-base"></i>
                Search
            </PrimaryButton>
        </form>
    );
}

export default JobSearch;
