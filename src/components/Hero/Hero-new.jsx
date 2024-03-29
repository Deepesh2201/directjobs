import SlidingBrandsHero from "../Marquee/SlidingBrandsHero";
import PrimaryButton from "../SharedComponents/PrimaryButton";
import skyline from "../../assets/images/skyline1.png";
import { useEffect, useState } from "react";

function Hero() {
    const headings = [
        "Find the Best Jobs in India ",
        "Get Hired in Just a Few Clicks ",
        "Ab Direct Job Lega India ",
    ];
    const [headingIndex, setHeadingIndex] = useState(0);
    const [heading, setHeading] = useState(headings[headingIndex]);

    // Change heading every 3 seconds smooth transition
    useEffect(() => {
        const interval = setInterval(() => {
            setHeadingIndex((headingIndex + 1) % headings.length);
            setHeading(headings[headingIndex]);
        }, 3000);
        return () => clearInterval(interval);
    }, [headingIndex]);

    return (
        <div className="">
            <div className="pt-[180px] bg-[color:var(--primary-color)]  text-white">
                <div className="max-w-7xl m-auto md:my-12  px-8">
                    <h2 className="text-3xl lg:text-6xl font-semibold text-center transition-all ease-linear">
                        {heading}
                    </h2>
                    <p className="text-center text-sm lg:text-lg mt-4">
                        Find the best jobs in India with just a few clicks and
                        apply to them directly. It&apos;s that easy!
                    </p>
                    <div className="drop-shadow-2xl my-8">
                        <img
                            className="m-auto w-full max-w-5xl mt-5"
                            src={skyline}
                            alt=""
                        />
                        <div className="z-10 text-center -mt-1 max-w-5xl m-auto px-4 md:px-8 py-4 bg-white rounded-lg text-[color:var(--primary-color)]">
                            <h3 className="text-lg md:text-2xl font-semibold my-5">
                                Search for Jobs in India Now
                            </h3>
                            <div className=" grid md:flex md:flex-row justify-center items-center gap-4 my-4 h-fit">
                                <div className="relative flex items-center justify-center w-full">
                                    <i className="absolute left-5 text-[color:var(--primary-color)] fas fa-search -mr-7 z-10"></i>
                                    <input
                                        type="text"
                                        placeholder="Search for job title/keywords"
                                        className="w-full py-2 md:py-4 pl-14 pr-6 border-2 bg-transparent border-[color:var(--primary-color)] text-[color:var(--primary-color)] placeholder:text-[color:var(--primary-color)] rounded-md outline-none"
                                    />
                                </div>
                                <div className="relative flex items-center justify-center w-full">
                                    <i className="absolute left-5 text-[color:var(--primary-color)] fas fa-map-marker-alt -mr-7 z-10"></i>
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="w-full py-2 md:py-4 pl-14 pr-6 border-2 bg-transparent border-[color:var(--primary-color)] text-[color:var(--primary-color)] placeholder:text-[color:var(--primary-color)] rounded-md outline-none"
                                    />
                                </div>
                                <PrimaryButton className="border-[color:var(--primary-color)] hover:!text-white border-2 bg-transparent !text-[color:var(--primary-color)] w-fit md:py-4 m-auto">
                                    Search
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
                <SlidingBrandsHero scrollToSection={"#categorySection"} />
            </div>
            <div className="w-full h-[200px] md:h-[250px] pb-14 overflow-hidden ">
                <div className="rounded-bl-[50%] -mt-36 md:-mt-40 rounded-br-[50%] relative overflow-hidden w-[120%] -mb-14 left-[-10%] bg-[color:var(--primary-color)] h-[200px] md:h-[250px]"></div>
            </div>
        </div>
    );
}

export default Hero;
