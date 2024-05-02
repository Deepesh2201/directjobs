import { useEffect, useState } from "react";
import CenterTitle from "../components/SharedComponents/CenterTitle";
import { getCategories } from "../db/categories";
import CategoryCard from "../components/CategoryList/CategoryCard";
import { Dropdown, Input } from "semantic-ui-react";
import PrimaryButton from "../components/SharedComponents/PrimaryButton";
import { CategoriesLoader } from "../components/SharedComponents/Loader";

function Categories() {
    const [categoriesData, setCategoriesData] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("asc");
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // scroll to top
        window.scrollTo(0, 0);

        getCategories()
            .then((data) => {
                setCategoriesData(data);

                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        setFilteredCategories(
            categoriesData.filter((item) =>
                item.post_title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, categoriesData]);

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
                    Job Categories
                </h2>
            </CenterTitle>

            <div>
                <p className="text-center">
                    Explore jobs by category and find the perfect job for you.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 mt-10 items-center">
                <div className="flex gap-2 w-full">
                    <Input
                        type="text"
                        placeholder="Type to search categories"
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
                        value={sort}
                        onChange={(e, { value }) => {
                            setSort(value);
                        }}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between mt-10">
                {!loading &&
                    filteredCategories
                        .sort((a, b) => sortFunc(a, b))
                        .map((item, index) => {
                            return (
                                <div key={index} className="w-full">
                                    <CategoryCard
                                        name={item.post_title}
                                        image={item.post_image}
                                        total_jobs={item.total_jobs}
                                        cat_id={item.post_id}
                                    />
                                </div>
                            );
                        })}

                {!filteredCategories.length && !loading && (
                    <div className="text-center w-full col-span-3 my-14">
                        <i className="fas fa-exclamation-triangle text-3xl text-red-500"></i>
                        <p>No categories found for {search}</p>
                    </div>
                )}

                {loading &&
                    [...Array(6).keys()].map((item, index) => (
                        <div key={index} className="w-full">
                            <CategoriesLoader />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Categories;
