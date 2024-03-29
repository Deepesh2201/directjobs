import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs";
import CategoryList from "../components/CategoryList/CategoryList";
import HeroNew from "../components/Hero/Hero-new";
import Hero2 from "../components/Hero/Hero2";
import Testimonial from "../components/Testimonial/Testimonial";
import { jobData } from "./data/jobData";
import { testimonialData } from "./data/testimonialData";

function Home() {
    return (
        <div className="-mt-[150px] overflow-x-hidden">
            <HeroNew />
            <CategoryList />
            <Hero2 />
            <FeaturedJobs jobs={jobData} sectionId="categorySection" />
            {/* <TestimonicalMarquee /> */}
            <Testimonial data={testimonialData} />
        </div>
    );
}

export default Home;
