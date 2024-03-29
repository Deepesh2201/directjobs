import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs";
import CategoryList from "../components/CategoryList/CategoryList";
import HeroNew from "../components/Hero/Hero-new";
import Hero2 from "../components/Hero/Hero2";
import TestimonicalMarquee from "../components/Marquee/TestimonicalMarquee";
import { jobs } from "./data/jobData";

function Home() {
    return (
        <div className="-mt-[150px] overflow-x-hidden">
            <HeroNew />
            <CategoryList />
            <Hero2 />
            <FeaturedJobs jobs={jobs} sectionId="categorySection" />
            <TestimonicalMarquee />
        </div>
    );
}

export default Home;
