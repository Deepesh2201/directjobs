import { useNavigate } from "react-router-dom";
import PrimaryButton from "../SharedComponents/PrimaryButton";
import { useEffect, useState } from "react";
import { useQuery } from "../../utils/queryParams";
import { getFilterProperties } from "../../db/jobFilter";

function JobSearch() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState([]);
    const [location, setLocation] = useState([]);
    const query = useQuery();

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (query.entries) {
            console.log(query.keys().next().value);
        }

        navigate(`/jobs?search=${search.trim().replace(/\s/g, "+")}`);
    };

    useEffect(() => {
        getFilterProperties()
            .then((data) => {
                setCategory([...data.category_list]);
                setLocation([...data.location_list]);
            })
            .catch((error) => console.error(error));
    }, []);
    return (
        <form
            className="flex flex-col md:flex-row justify-center items-center gap-2 my-4"
            onSubmit={handleSearch}
        >
            <div className="relative flex items-center justify-center w-full">
                <i className="absolute left-3 text-gray-400 fas fa-search -mr-7 z-10"></i>
                <input
                    type="text"
                    placeholder="Search for job title/keywords"
                    className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="relative flex items-center justify-center w-full">
                <i className="absolute left-3 text-gray-400 fas fa-table -mr-7 z-10"></i>
                <select className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md bg-white">
                    <option value="">Select Category</option>
                    {category.map((cat) => (
                        <option key={cat.post_id} value={cat.id}>
                            {cat.post_title}
                        </option>
                    ))}
                </select>
            </div>
            <div className="relative flex items-center justify-center w-full">
                <i className="absolute left-3 text-gray-400 fas fa-map-marker-alt -mr-7 z-10"></i>
                <select className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md bg-white">
                    <option value="">Select Location</option>
                    {location.map((loc) => (
                        <option key={loc.post_id} value={loc.id}>
                            {loc.post_title}
                        </option>
                    ))}
                </select>
            </div>
            <PrimaryButton onClick={handleSearch}>Search</PrimaryButton>
        </form>
    );
}

export default JobSearch;
