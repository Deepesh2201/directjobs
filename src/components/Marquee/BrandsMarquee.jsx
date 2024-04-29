import Marquee from "react-fast-marquee";
import brandLogos from "../../assets/brand_logos";
import checkIsMobile from "../../utils/checkIsMobile";

function BrandsMarquee() {
    const isMobile = checkIsMobile();
    return (
        <div className="relative isolate z-0 bg-white my-8 sm:my-14">
            <div className="relative mx-auto ">
                <div className="text-center">
                    <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        <Marquee
                            className="space-x-1 lg:space-x-6"
                            gradient={!isMobile}
                        >
                            {brandLogos?.map((brand, index) => (
                                <img
                                    key={index}
                                    src={brand}
                                    alt={`Brand ${index + 1}`}
                                    className="h-12 sm:h-20"
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandsMarquee;
