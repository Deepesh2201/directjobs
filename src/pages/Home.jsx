import CategoryList from "../components/CategoryList/CategoryList";
import Hero from "../components/Hero/Hero";
import Hero2 from "../components/Hero/Hero2";
import BrandsMarquee from "../components/Marquee/BrandsMarquee";

function Home() {
    return (
        <div>
            <Hero />
            <BrandsMarquee/>
            <Hero2/>
            <CategoryList/>
        </div>
    );
}

export default Home;
