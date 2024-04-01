import SlidingBrandsHero from "../Marquee/SlidingBrandsHero";
// import heroBackground from "../../assets/images/heroBackground_2.png";
import PrimaryButton from "../SharedComponents/PrimaryButton";
import skyline from "../../assets/images/skyline.png";
import { useEffect, useState } from "react";

function Hero() {
    const headings = [
        "Find the Best Jobs in India ",
        "Get Hired in Just a Few Clicks ",
        "Ab Direct Job Lega India ",
    ];
    const [headingIndex, setHeadingIndex] = useState(0);
    const [heading, setHeading] = useState(headings[headingIndex]);
    const [locationLabel, setLocationLabel] = useState("Location");
    const [jobTitleLabel, setJobTitleLabel] = useState(
        "Search for job title/keywords"
    );

    // Change heading every 3 seconds smooth transition
    useEffect(() => {
        const interval = setInterval(() => {
            setHeadingIndex((headingIndex + 1) % headings.length);
            setHeading(headings[headingIndex]);
        }, 3000);
        return () => clearInterval(interval);
    }, [headingIndex]);

    // change location and job title placeholder every 5 seconds with different cities amd job titles smooth transition effect and typing effect
    useEffect(() => {
        const jobTitlePlaceholders = [
            "Search for job title/keywords",
            "Software Developer",
            "Data Analyst",
            "Business Analyst",
            "Web Developer",
            "Graphic Designer",
            "Digital Marketer",
            "Content Writer",
            "SEO Specialist",
            "UI/UX Designer",
            "Mobile App Developer",
        ];

        const locationPlaceholders = [
            "Location",
            "Delhi",
            "Mumbai",
            "Bangalore",
            "Hyderabad",
            "Chennai",
            "Kolkata",
            "Pune",
            "Ahmedabad",
            "Jaipur",
            "Lucknow",
        ];

        let jobTitleIndex = 0;
        let locationIndex = 0;

        const interval = setInterval(() => {
            setJobTitleLabel(jobTitlePlaceholders[jobTitleIndex]);
            setLocationLabel(locationPlaceholders[locationIndex]);
            jobTitleIndex = (jobTitleIndex + 1) % jobTitlePlaceholders.length;
            locationIndex = (locationIndex + 1) % locationPlaceholders.length;
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="md:-mb-10">
            <div className="w-full h-[full] pb-16 overflow-hidden">
                <div className="relative rounded-bl-[50%] rounded-br-[50%] overflow-hidden w-[240%] md:w-[140%] md:left-[-20%] left-[-70%] bg-[url('https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-blend-soft-light bg-center border-b border-[color:var(--primary-color)] z-0">
                    <div className="pt-[180px] m-auto max-w-[100vw] md:max-w-7xl text-black mb-12 md:mb-16">
                        <div className="max-w-7xl md:mt-8 m-auto px-8">
                            <h2 className="text-3xl lg:text-6xl font-semibold text-center transition-all ease-linear text-[color:var(--primary-color)]">
                                {heading}
                            </h2>
                            <p className="text-center text-sm lg:text-lg mt-4">
                                Find the best jobs in India with just a few
                                clicks and apply to them directly. It&apos;s
                                that easy!
                            </p>
                            <div className="drop-shadow-2xl my-8 md:mb-24">
                                <img
                                    className="m-auto w-full max-w-5xl mt-5 opacity-50"
                                    src={skyline}
                                />
                                <div className="z-10 text-center -mt-[4px] max-w-5xl m-auto px-4 md:px-8 py-4 bg-white border-[0.5px] border-t-0 border-black bg-transparent rounded-lg text-[color:var(--primary-color)] bg-opacity-55">
                                    <h3 className="text-lg md:text-2xl font-semibold my-5">
                                        India is Hiring, Are You Ready?
                                    </h3>
                                    <div className=" grid md:flex md:flex-row justify-center items-center gap-4 my-4 h-fit">
                                        <div className="relative flex items-center justify-center w-full">
                                            <i className="absolute left-5 text-[color:var(--primary-color)] fas fa-search -mr-7 z-10"></i>
                                            <input
                                                type="text"
                                                placeholder={jobTitleLabel}
                                                className="w-full py-2 md:py-4 pl-14 pr-6 border-2 bg-transparent border-[color:var(--primary-color)] text-[color:var(--primary-color)] placeholder:text-[color:var(--primary-color)] rounded-md outline-none"
                                            />
                                        </div>
                                        <div className="relative flex items-center justify-center w-full">
                                            <i className="absolute left-5 text-[color:var(--primary-color)] fas fa-map-marker-alt -mr-7 z-10"></i>
                                            <input
                                                type="text"
                                                placeholder={locationLabel}
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
                        <SlidingBrandsHero
                            scrollToSection={"#categorySection"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
