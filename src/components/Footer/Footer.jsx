import logo from "../../assets/images/mobileLogo.png";
import { exploreLinks } from "./constants";

function Footer() {
    {
        /* a slick and professinal footer with small logo and links like, Support, Recruiter, Faq and other */
    }
    return (
        <>
            <section className="py-5 mt-5 bg-slate-50">
                {/* a setion on footer to show different sections of links like label: Explore jobs by city, jobs in <cityname>, label:Explore jobs by experience, jobs for <profession>, label: Explore jobs by experinece, Jobs for fresher, indetmdiate...  */}
                <div className="max-w-7xl m-auto hidden md:block">
                    <div className="flex items-center gap-4 my-5">
                        <hr className="w-full border-black" />
                        <h3 className="text-lg font-medium whitespace-nowrap">
                            Explore jobs by city
                        </h3>
                        <hr className="w-full border-black" />
                    </div>
                    <div className="md:grid lg:grid-cols-4 md:grid-cols-2 ml-5 text-sm">
                        {exploreLinks?.citynames?.map((city, index) => (
                            <div key={index}>
                                <a
                                    href="#"
                                    className="hover:text-[color:var(--primary-color)]"
                                >
                                    Jobs in {city}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 my-5">
                        <hr className="w-full border-black" />
                        <h3 className="text-lg font-medium whitespace-nowrap">
                            Explore jobs by Profession
                        </h3>
                        <hr className="w-full border-black" />
                    </div>
                    <div className="md:grid lg:grid-cols-4 md:grid-cols-2 ml-5 text-sm">
                        {exploreLinks?.professions?.map((profession, index) => (
                            <div key={index}>
                                <a
                                    href="#"
                                    className="hover:text-[color:var(--primary-color)]"
                                >
                                    Job for {profession}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 my-5">
                        <hr className="w-full border-black" />
                        <h3 className="text-lg font-medium whitespace-nowrap">
                            Popular Jobs
                        </h3>
                        <hr className="w-full border-black" />
                    </div>
                    <div className="md:grid lg:grid-cols-4 md:grid-cols-2 ml-5 text-sm">
                        {exploreLinks?.popularJobs?.map((jobLabel, index) => (
                            <div key={index}>
                                <a
                                    href="#"
                                    className="hover:text-[color:var(--primary-color)]"
                                >
                                    {jobLabel}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="relative overflow-hidden text-white bg-[color:var(--secondary-color)]">
                <div className="relative mx-auto px-8 py-4">
                    <div className="md:flex items-center space-y-3 md:space-y-0">
                        <div className="flex w-fit items-center gap-2">
                            <div className="flex items-center w-12 h-12">
                                <img className="w-12 h-12" src={logo} alt="" />
                            </div>
                            <div>
                                <p className="text-base font-medium">
                                    Direct Jobs
                                </p>
                                <p className="text-xs md:text-sm md:whitespace-nowrap">
                                    Find your dream job with Direct Jobs.
                                </p>
                            </div>
                        </div>
                        <div className="h-full w-full flex justify-evenly">
                            <a
                                className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                href="#"
                            >
                                About Us
                            </a>
                            <a
                                className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                href="#"
                            >
                                Careers
                            </a>
                            <a
                                className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                href="#"
                            >
                                Contact Us
                            </a>
                            <a
                                className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                href="#"
                            >
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-center text-xs py-2 font-medium">
                    <p>
                        &copy; 2021 Direct Jobs Pvt. Ltd. All rights reserved.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Footer;
