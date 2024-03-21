import CategoryList from "../components/CategoryList/CategoryList";
import Hero from "../components/Hero/Hero";
import Hero2 from "../components/Hero/Hero2";
import BrandsMarquee from "../components/Marquee/BrandsMarquee";
import TestimonicalMarquee from "../components/Marquee/TestimonicalMarquee";

function Home() {
    return (
        <div className="-mt-[150px]">
            <Hero />
            <BrandsMarquee/>
            <Hero2/>
            <CategoryList/>
            <TestimonicalMarquee/>
        </div>
    );
}

export default Home;
