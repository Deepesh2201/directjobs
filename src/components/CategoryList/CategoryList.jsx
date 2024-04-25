import CenterTitle from "../SharedComponents/CenterTitle";
import Divider from "../SharedComponents/Divider";
import CategoryCard from "./CategoryCard";
// import { catogoryListItems } from "./category";
import proptypes from "prop-types";

function CategoryList({ categories, sectionId }) {
    console.log(categories);
    return (
        <div id={sectionId} className="max-w-7xl m-auto px-8 my-8 md:my-36">
            <div className="space-y-2 sm:space-y-4">
                <CenterTitle>
                    <h3 className="text-center font-medium text-lg text-[color:var(--primary-color)]">
                        Jobs by Category
                    </h3>
                    <h2 className="text-center font-medium text-3xl md:text-4xl lg:text-5xl text-black">
                        Choose Your Desire Category
                    </h2>
                </CenterTitle>
                <Divider />
            </div>
            <div className="mt-8">
                <div className="mx-auto px-2 lg:px-8">
                    <div className="grid grid-cols-1 gap-y-6 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
                        {categories.map((item, index) => {
                            return (
                                <CategoryCard
                                    key={index}
                                    name={item.post_title}
                                    image={item.post_image}
                                    total_jobs={item.total_jobs}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryList;

CategoryList.propTypes = {
    sectionId: proptypes.string.isRequired,
    categories: proptypes.array.isRequired,
};
