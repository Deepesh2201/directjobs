import BrowseJobs from "../components/BrowseJobs/BrowseJobs";
import CategoryList from "../components/CategoryList/CategoryList";
import Hero from "../components/Hero/Hero";
import Hero2 from "../components/Hero/Hero2";
import BrandsMarquee from "../components/Marquee/BrandsMarquee";
import TestimonicalMarquee from "../components/Marquee/TestimonicalMarquee";
import { FeaturedJobs } from "./FeaturedJobs";

function Home() {
    return (
        <div className="-mt-[150px] overflow-x-hidden">
            <Hero />
            <BrandsMarquee scrollToSection="#categorySection"/>
            <Hero2/>
            <CategoryList sectionId="categorySection"/>
            <BrowseJobs jobs={FeaturedJobs}/>
            <TestimonicalMarquee/>
        </div>
    );
}

export default Home;
