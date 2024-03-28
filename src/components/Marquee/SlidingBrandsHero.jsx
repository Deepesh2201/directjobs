import Marquee from "react-fast-marquee";
import {heroLogos} from "../../assets/brand_logos";
import proptypes from "prop-types";

function SlidingBrandsHero({ scrollToSection }) {
    return (
        <div className="relative isolate z-0 lg:px-8">
            <div className="relative mx-auto ">
                <div className="text-center">
                    <div className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        <Marquee
                            className="space-x-1 lg:space-x-6"
                            gradient={true}
                            gradientColor="#891b81"
                        >
                            {heroLogos?.map((brand, index) => (
                                <img
                                    key={index}
                                    src={brand}
                                    alt={`Brand ${index + 1}`}
                                    className="h-12 sm:h-20 mix-blend-hard-light"
                                />
                            ))}
                        </Marquee>
                    </div>
                    <div className="text-xl lg:text-4xl my-2 lg:my-4 font-medium text-white">
                        80+ brands are hiring here
                    </div>
                    <div className="block mt-8 delay-100 animate-bounce text-white">
                        <a
                            className="flex flex-col w-fit m-auto"
                            href={scrollToSection}
                        >
                            <span>Expore Jobs</span>
                            <i className="fa-solid fa-angles-down"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlidingBrandsHero;

SlidingBrandsHero.propTypes = {
    scrollToSection: proptypes.string,
};
