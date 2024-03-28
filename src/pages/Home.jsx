import BrowseJobs from "../components/BrowseJobs/BrowseJobs";
import CategoryList from "../components/CategoryList/CategoryList";
import Hero from "../components/Hero/Hero";
import HeroNew from "../components/Hero/Hero-new";
import Hero2 from "../components/Hero/Hero2";
import BrandsMarquee from "../components/Marquee/BrandsMarquee";
import TestimonicalMarquee from "../components/Marquee/TestimonicalMarquee";
import { FeaturedJobs } from "./FeaturedJobs";

function Home() {
    return (
        <div className="-mt-[150px] overflow-x-hidden">
            <HeroNew />
            {/* <BrandsMarquee scrollToSection="#categorySection"/> */}
            <CategoryList sectionId="categorySection"/>
            <Hero2/>
            <BrowseJobs jobs={FeaturedJobs}/>
            <TestimonicalMarquee/>
        </div>
    );
}

export default Home;
