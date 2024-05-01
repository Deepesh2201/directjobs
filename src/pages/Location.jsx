import { Dropdown, Input } from "semantic-ui-react";
import PrimaryButton from "../components/SharedComponents/PrimaryButton";
import CenterTitle from "../components/SharedComponents/CenterTitle";
import { useEffect, useState } from "react";
import { getFilterProperties } from "../db/jobFilter";
import LocationCard from "../components/Location/LocationCard";
import { LocationCardLoader } from "../components/SharedComponents/Loader";

function Location() {
    // getUnsplashImage("office").then((data) => console.log(data));

    const [locationsData, setLocationsData] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("asc");
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // scroll to top
        window.scrollTo(0, 0);

        getFilterProperties()
            .then((data) => setLocationsData([...data.location_list]))
            .catch((error) => console.error(error));

        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    useEffect(() => {
        setFilteredLocations(
            locationsData.filter((item) =>
                item.post_title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, locationsData]);

    const sortFunc = (a, b) => {
        if (sort === "asc") {
            return a.post_title.localeCompare(b.post_title);
        } else if (sort === "desc") {
            return b.post_title.localeCompare(a.post_title);
        } else if (sort === "more") {
            return b.total_jobs - a.total_jobs;
        }
        return a.total_jobs - b.total_jobs;
    };

    return (
        <div className="max-w-7xl m-auto lg:px-8 px-4 py-14">
            <CenterTitle>
                <h2 className="text-center font-medium text-3xl md:text-4xl lg:text-5xl text-black">
                    Jobs by Location
                </h2>
            </CenterTitle>

            <div>
                <p className="text-center">
                    Find jobs in your location. Search by cities.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 mt-10 items-center">
                <div className="flex gap-2 w-full">
                    <Input
                        type="text"
                        placeholder="Type to search location"
                        className="w-full outline-none"
                        value={search}
                        onChange={(e, { value }) => setSearch(value)}
                    />

                    <PrimaryButton className={"px-3 lg:!px-4"} hidden>
                        <i className="fas fa-search text-sm "></i>
                    </PrimaryButton>
                </div>

                <div className="w-full lg:w-fit text-right">
                    <Dropdown
                        placeholder="Sort by"
                        selection
                        options={[
                            {
                                key: "asc",
                                value: "asc",
                                text: "A-Z",
                            },
                            {
                                key: "desc",
                                value: "desc",
                                text: "Z-A",
                            },
                            {
                                key: "more",
                                value: "more",
                                text: "More Jobs First",
                            },
                            {
                                key: "less",
                                value: "less",
                                text: "Less Jobs First",
                            },
                        ]}
                        className="m-auto w-fit lg:w-1/3 right-0"
                        onChange={(e, { value }) => setSort(value)}

                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between mt-10">
                {!loading &&
                    filteredLocations.length > 0 &&
                    filteredLocations
                        .sort((a, b) => sortFunc(a, b))
                        .map((item, index) => {
                            return (
                                <div key={index} className="w-full">
                                    <LocationCard
                                        name={item.post_title}
                                        loc_id={item.post_id}
                                    />
                                </div>
                            );
                        })}

                {!filteredLocations.length && !loading && (
                    <div className="text-center w-full col-span-3 my-14">
                        <i className="fas fa-exclamation-triangle text-3xl text-red-500"></i>
                        <p>No categories found for {search}</p>
                    </div>
                )}

                {loading &&
                    [...Array(6).keys()].map((item, index) => (
                        <div key={index} className="w-full">
                            <LocationCardLoader />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Location;
