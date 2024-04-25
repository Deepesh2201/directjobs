import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs";
import CategoryList from "../components/CategoryList/CategoryList";
import HeroNew from "../components/Hero/Hero-new";
import Hero2 from "../components/Hero/Hero2";
import Testimonial from "../components/Testimonial/Testimonial";
// import { jobData } from "./data/jobData";
import { testimonialData } from "./data/testimonialData";
import { getLatestJobs } from "../db/latestjobs";
import { useEffect, useState } from "react";
import { getCategories } from "../db/categories";

function Home() {
    const [latestJobs, setLatestJobs] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        getLatestJobs()
            .then((data) => setLatestJobs(data.data))
            .catch((error) => console.error(error));

        getCategories()
            .then((data) => setCategoriesData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="-mt-[150px] overflow-x-hidden">
            <HeroNew />
            <CategoryList categories={categoriesData} />
            <Hero2 />
            <FeaturedJobs jobs={latestJobs} sectionId="categorySection" />
            {/* <TestimonicalMarquee /> */}
            <Testimonial data={testimonialData} />
        </div>
    );
}

export default Home;
