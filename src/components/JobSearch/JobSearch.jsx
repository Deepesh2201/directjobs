import { useNavigate } from "react-router-dom";
import PrimaryButton from "../SharedComponents/PrimaryButton";
import { useState } from "react";

function JobSearch() {
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        navigate(`/jobs?search=${search.trim().replace(/\s/g, "+")}`);
    };
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
            {/* <div className="relative flex items-center justify-center w-full">
                <i className="absolute left-3 text-gray-400 fas fa-map-marker-alt -mr-7 z-10"></i>
                <input
                    type="text"
                    placeholder="Location"
                    className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md"
                />
            </div> */}
            <PrimaryButton onClick={handleSearch}>
                Search
            </PrimaryButton>
        </form>
    );
}

export default JobSearch;
