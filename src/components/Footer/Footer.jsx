import { Link } from "react-router-dom";
import { exploreLinks, footerLinks } from "./constants";
import PrimaryButton from "../SharedComponents/PrimaryButton";
import BrandLogo from "../SharedComponents/BrandLogo";
import { useState } from "react";

function Footer() {
    const [exploreLinksCount] = useState(window.innerWidth < 768 ? 20 : 60);

    return (
        <>
            <section className="py-5 md:my-5 bg-slate-50">
                <div className="max-w-7xl m-auto md:block">
                    {exploreLinks?.map((link, index) => (
                        <div key={index}>
                            <div className="flex items-center gap-4 my-5">
                                <hr className="w-full border-slate-400" />
                                <h3 className="text-lg font-medium whitespace-nowrap">
                                    {link.label}
                                </h3>
                                <hr className="w-full border-slate-400" />
                            </div>
                            <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 text-sm px-4 gap-2">
                                {/* show only 20 items and show show more button */}
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
                            {link?.data?.length > exploreLinksCount && (
                                <Link
                                    to={"/jobs"}
                                    className="text-sm text-[color:var(--primary-color)] w-full text-center block my-3"
                                >
                                    Show All
                                </Link>
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
