import CategoryCard from "./CategoryCard";
import { catogoryListItems } from "./category";

function CategoryList({sectionId}) {
    return (
            <div id={sectionId} className="max-w-7xl m-auto px-8 my-8 sm:my-14">
                <div className="space-y-2 sm:space-y-4">
                    <h3 className="text-center font-medium text-lg text-[color:var(--primary-color)]">
                        Jobs by Category
                    </h3>
                    <h2 className="text-center font-medium text-3xl md:text-4xl lg:text-5xl">
                        Choose Your Desire Category
                    </h2>
                </div>
                <div className="mt-8">
                    <div className="mx-auto max-w-7xl px-2 lg:px-8">
                        <div className="grid grid-cols-1 gap-y-6 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
                            {catogoryListItems.map((item, index) => {
                                return (
                                    <CategoryCard
                                        key={index}
                                        name={item.name}
                                        faicon={item.faicon}
                                        color={item.color}
                                        jobs={item.jobs}
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
