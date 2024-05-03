import { useEffect, useState } from "react";
import CenterTitle from "../components/SharedComponents/CenterTitle";
import { getCategories } from "../db/categories";
import CategoryCard from "../components/CategoryList/CategoryCard";
import { Dropdown, Input } from "semantic-ui-react";
import PrimaryButton from "../components/SharedComponents/PrimaryButton";
import { CategoriesLoader } from "../components/SharedComponents/Loader";
import abstract from "../assets/images/category.png";

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
        <div className="max-w-7xl m-auto lg:px-8 px-4 py-10 lg:py-14">
            <div className="flex gap-4 items-center justify-around">
                <div className="space-y-3 w-full max-w-[600px]">
                    <div>
                        <CenterTitle>
                            <h2 className="text-center md:text-left font-medium text-3xl md:text-4xl lg:text-5xl text-black">
                                Jobs by Categories
                            </h2>
                        </CenterTitle>

                        <div>
                            <p className="text-center md:text-left">
                                Find jobs by categories. Browse through the
                                categories and find the job you are looking for.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center mt-5 w-full">
                        <Input
                            type="text"
                            placeholder="Type to search categories"
                            className="w-full outline-none h-fit"
                            value={search}
                            onChange={(e, { value }) => setSearch(value)}
                        />

                        <Dropdown
                            placeholder="Sort by"
                            selection
                            compact
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
                            className="m-auto w-full max-w-[200px]"
                            value={sort}
                            onChange={(e, { value }) => {
                                setSort(value);
                            }}
                        />
                    </div>
                </div>

                <div className="hidden bg-red-5 md:flex justify-center">
                    <img className="h-72 xl:h-96" src={abstract} alt="" />
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
