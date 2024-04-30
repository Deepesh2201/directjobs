import { Link } from "react-router-dom";
import { footerLinks } from "./constants";
import PrimaryButton from "../SharedComponents/PrimaryButton";
import BrandLogo from "../SharedComponents/BrandLogo";
import { useEffect, useState } from "react";
import { getFilterProperties } from "../../db/jobFilter";

function Footer() {
    const [displayCount, setDisplayCount] = useState(20);
    const [exploreLinksCount, setExploreLinksCount] = useState(displayCount);
    const [displayText, setDisplayText] = useState("Show More");
    const [exploreLinksData, setExploreLinksData] = useState([]);

    const handleShowMoreClick = () => {
        if (exploreLinksCount === displayCount) {
            setExploreLinksCount(exploreLinksData[0]?.data?.length);
            setDisplayText("Show Less");
        }
        if (exploreLinksCount === exploreLinksData[0]?.data?.length) {
            setExploreLinksCount(displayCount);
            setDisplayText("Show More");
        }
    };

    useEffect(() => {
        setExploreLinksCount(displayCount);
    }, [displayCount]);

    useEffect(() => {
        getFilterProperties().then((data) => {
            let cities = [];
            data.location_list.map((city) => cities.push(city.post_title));
            let profession = [];
            data.category_list.map((prof) => profession.push(prof.post_title));

            setExploreLinksData([
                {
                    label: "Explore Jobs in cities",
                    prefix: "Jobs in",
                    data: cities,
                },
                {
                    label: "Explore Jobs by Profession",
                    prefix: "Job for",
                    data: profession,
                },
                {
                    label: "Popular Jobs",
                    prefix: "",
                    data: [
                        "Accounts / Finance Jobs",
                        "Sales (Field Work)",
                        "Human Resource",
                        "Backoffice Jobs",
                        "Business Development",
                        "Telecaller / BPO",
                        "Work from Home Jobs",
                        "Part Time Jobs",
                        "Full Time Jobs",
                        "Night Shift Jobs",
                        "Freshers Jobs",
                        "Internship Jobs",
                        "Online Jobs",
                        "Freelance Jobs",
                        "Remote Jobs",
                    ],
                },
            ]);
        });
    }, []);

    return (
        <>
            <section className="py-5 md:my-5 bg-slate-50">
                <div className="max-w-7xl m-auto md:block">
                    {exploreLinksData?.map((link, index) => (
                        <div key={index}>
                            <div className="flex items-center gap-4 my-5">
                                <hr className="w-full border-slate-400" />
                                <h3 className="text-lg font-medium whitespace-nowrap">
                                    {link.label}
                                </h3>
                                <hr className="w-full border-slate-400" />
                            </div>
                            <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 text-sm px-4 gap-2">
                                {link?.data
                                    ?.slice(0, exploreLinksCount)
                                    .map((dataLabel, index) => (
                                        <div key={index}>
                                            <a
                                                href="#"
                                                className="text-xs md:text-sm hover:text-[color:var(--primary-color)] flex items-center h-full w-full justify-center text-center md:justify-start md:text-left"
                                            >
                                                {`${link?.prefix} ${dataLabel}`}
                                            </a>
                                        </div>
                                    ))}
                            </div>
                            {link?.data?.length > 20 && (
                                <button
                                    onClick={handleShowMoreClick}
                                    className="text-sm text-[color:var(--primary-color)] w-full text-center block my-3"
                                >
                                    {displayText}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <section className="relative overflow-hidden text-white bg-gradient-secondary divide-y divide-slate-500">
                <div className="relative mx-auto px-2 md:px-8 py-8 max-w-7xl">
                    <div className="grid md:grid-cols-10">
                        <div className="md:col-span-3 lg:col-span-2 m-auto py-2 md:w-full">
                            <BrandLogo className="!text-white" light={true} />
                        </div>
                        <div className="md:col-span-7 lg:col-span-6 w-full flex items-center justify-center md:justify-evenly divide-x">
                            {footerLinks?.map((link, index) => (
                                <span
                                    key={index}
                                    className="w-fit md:w-full text-center px-2"
                                >
                                    <Link
                                        to={link?.path}
                                        className="text-xs md:text-sm font-medium whitespace-nowrap"
                                    >
                                        {link?.label}
                                    </Link>
                                </span>
                            ))}
                        </div>
                        <div className="md:hidden lg:flex lg:col-span-2 mt-5 md:py-0 w-full flex flex-col items-center">
                            <h3 className=" font-medium whitespace-nowrap">
                                Hire From Direct Jobs
                            </h3>
                            <PrimaryButton className="!px-4 block w-fit m-auto my-2 text-xs md:text-sm">
                                Join as a Company
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className="text-center md:flex py-2 justify-evenly">
                    <div className="text-sm px-4">
                        {`${new Date().getFullYear()} Direct Jobs © All rights reserved.`}
                    </div>
                    <div className="divide-x flex justify-center mb-5 sm:mb-0">
                        <Link
                            href="#"
                            className="block text-sm text-center px-4"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="block text-sm text-center px-4"
                        >
                            TnC
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
