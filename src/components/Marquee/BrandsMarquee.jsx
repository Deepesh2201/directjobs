import Marquee from "react-fast-marquee";
import brandLogos from "../../assets/brand_logos";

function BrandsMarquee() {
    return (
        <div className="relative isolate z-0 bg-white lg:px-8 my-8 sm:my-14">
            <div className="relative mx-auto ">
                <div className="text-center">
                    <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        <Marquee className="space-x-1 lg:space-x-6" gradient={true} >
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
                    <div className="text-xl lg:text-4xl my-2 lg:my-4 font-medium text-[color:var(--primary-color)]">80+ brands are hiring here</div>
                    <div className="mt-8 delay-100 animate-bounce">
                        <span className="block">Expore Jobs</span>
                        <i className="block fa-solid fa-angles-down"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandsMarquee;
