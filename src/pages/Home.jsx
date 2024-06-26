import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs";
import CategoryList from "../components/CategoryList/CategoryList";
import Hero2 from "../components/Hero/Hero2";
import Testimonial from "../components/Testimonial/Testimonial";
// import { jobData } from "./data/jobData";
import { testimonialData } from "./data/testimonialData";
import { getLatestJobs } from "../db/latestjobs";
import { useEffect, useState } from "react";
import { getCategories } from "../db/categories";
import HeroSection from "../components/Hero/HeroSection";
import JobSearch from "../components/JobSearch/JobSearch";
import BrandsMarquee from "../components/Marquee/BrandsMarquee";
import TrendingJobs from "../components/TrendingJobs/TrendingJobs";

function Home() {
    const [latestJobs, setLatestJobs] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {

        window.scrollTo(0, 0);
        getLatestJobs()
            .then((data) => setLatestJobs(data.data))
            .catch((error) => console.error(error));

        getCategories()
            .then((data) => setCategoriesData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="overflow-x-hidden bg-white">
            <HeroSection />
            <div className="max-w-7xl lg:m-auto lg:px-8 px-4 mt-6">
                <div className="px-8 bg-slate-50 py-3 rounded-lg shadow border">
                    <JobSearch />
                </div>
            </div>
            <div className="max-w-7xl m-auto my-8 md:my-14">
                <BrandsMarquee />
            </div>
            <TrendingJobs />
            <CategoryList categories={categoriesData} />
            <FeaturedJobs jobs={latestJobs} sectionId="categorySection" />
            <Hero2 />
            <Testimonial data={testimonialData} />
        </div>
    );
}

export default Home;
