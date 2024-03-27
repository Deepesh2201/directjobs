import logo from "../../assets/images/mobileLogo.png";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div></div>
            <section className="relative overflow-hidden sm:py-10 text-white">
                <div className="relative mx-auto max-w-7xl p-8 bg-[color:var(--primary-color)] lg:rounded-lg bg-opacity-80 shadow-[color:var(--hover-btn-color)]">
                    <div className="-m-6 flex flex-wrap">
                        <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                            <div className="flex h-full flex-col">
                                <div className="inline-flex items-center">
                                    <img className="w-24" src={logo} alt="" />
                                </div>
                                <div>
                                    <p className="text-base font-medium">
                                        Direct Jobs Pvt. Ltd.
                                    </p>
                                    <p className="text-sm">
                                        Find your dream job with Direct Jobs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                            <div className="h-full">
                                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-[color:var(--hover-primary-color)]">
                                    Company
                                </h3>
                                <ul>
                                    <li className="mb-4">
                                        <a
                                            className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                            href="#"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                            href="#"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                            href="#"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                            href="#"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                            <div className="h-full">
                                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-[color:var(--hover-primary-color)]">
                                    Support
                                </h3>
                                <ul>
                                    <li className="mb-4">
                                        <a
                                            className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                            href="#"
                                        >
                                            Help Center
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                            href="#"
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                            href="#"
                                        >
                                            Terms of Service
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                            href="#"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                            <div className="h-full">
                                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-[color:var(--hover-primary-color)]">
                                    Connect with Us
                                </h3>
                                <ul>
                                    <li className="mb-4">
                                        <a
                                            className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                            href="#"
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                            href="#"
                                        >
                                            Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className=" text-base font-medium  hover:text-[color:var(--hover-primary-color)]"
                                            href="#"
                                        >
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-xs">
                        &copy; {currentYear} Direct Jobs
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
