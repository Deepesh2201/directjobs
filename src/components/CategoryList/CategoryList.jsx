import { Link } from "react-router-dom";
import CenterTitle from "../SharedComponents/CenterTitle";
import Divider from "../SharedComponents/Divider";
import CategoryCard from "./CategoryCard";
// import { catogoryListItems } from "./category";
import proptypes from "prop-types";
import checkIsMobile from "../../utils/checkIsMobile";

function CategoryList({ categories, sectionId }) {
    const isMobile = checkIsMobile();
    const maxCount = isMobile ? 6 : 12;
    return (
        <div
            id={sectionId}
            className="max-w-7xl m-auto px-4 lg:px-8 my-8 md:my-36"
        >
            <div className="space-y-2 sm:space-y-4">
                <CenterTitle>
                    <h3 className="text-center font-medium text-lg text-[color:var(--primary-color)]">
                        Jobs by Category
                    </h3>
                    <h2 className="text-center font-medium text-3xl md:text-4xl lg:text-5xl text-black">
                        Trending Categories
                    </h2>
                </CenterTitle>
                <Divider />
            </div>
            <div className="mt-8">
                <div className="mx-auto">
                    <div className="grid grid-cols-1 gap-y-4 text-center sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                        {categories
                            .sort(
                                (cat1, cat2) =>
                                    cat2.total_jobs - cat1.total_jobs
                            )
                            .slice(0, maxCount)
                            .map((item, index) => {
                                return (
                                    <CategoryCard
                                        key={index}
                                        name={item.post_title}
                                        image={item.post_image}
                                        total_jobs={item.total_jobs}
                                        cat_id={item.post_id}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <Link to={"/categories"}>
                    <button className="">
                        Explore More Categories
                        <i className="fa-solid fa-angles-right animate-bounce-right ml-2"></i>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default CategoryList;

CategoryList.propTypes = {
    sectionId: proptypes.string,
    categories: proptypes.array.isRequired,
};
