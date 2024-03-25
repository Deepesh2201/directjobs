import { partnerLogos } from "../assets/brand_logos";
import PrimaryButton from "../components/SharedComponents/PrimaryButton";
import SecondaryButton from "../components/SharedComponents/SecondaryButton";
import asset1 from "../assets/images/workingOnLaptop.png";
import asset2 from "../assets/images/idCard.png";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <div className="max-w-7xl m-auto px-4 md:px-8">
                <div className="md:pt-10 grid md:grid-cols-2">
                    <div className="space-y-6">
                        <h1 className="text-5xl text-[color:var(--primary-color)]">
                            About Us
                        </h1>
                        <p className="text-zinc-800">
                            Direct Jobs is a platform that connects job seekers
                            with employers. We help job seekers find their dream
                            job and employers find the best candidates for their
                            job openings. Our mission is to help people find
                            meaningful work and build successful careers. We
                            believe that everyone deserves the opportunity to
                            work in a job they love and we are committed to
                            making that happen. Whether you are looking for a
                            full-time job, part-time job, internship, or
                            freelance work, Direct Jobs has you covered. Sign up
                            today and start your job search!
                        </p>
                        <div className="flex gap-3 items-center">
                            <hr className="hidden md:block border-[1px] border-[color:var(--primary-color)] w-full rounded-full" />
                            <PrimaryButton to="/login">Get Hired</PrimaryButton>
                            <SecondaryButton to="/rectuiter">
                                Post a Job
                            </SecondaryButton>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center pt-10 md:py-0 md:px-16">
                        <p className="w-full uppercase">Our Mission</p>
                        <h2 className="text-4xl font-semibold text-[color:var(--secondary-color)]">
                            Access to meaningful work for everyone
                        </h2>
                    </div>
                </div>
                <div className="py-8 md:py-16 flex justify-between">
                    {partnerLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="partner-logo"
                            className="max-w-[18vw] w-40 h-fit object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                        />
                    ))}
                </div>
                <hr />
                <div className="py-8 md:py-16 space-y-6">
                    <div className="space-y-6">
                        <h1 className="text-5xl text-[color:var(--primary-color)]">
                            Why Direct Jobs?
                        </h1>
                        <p className="text-zinc-800">
                            Direct Jobs is the best place to find your dream
                            job. We have thousands of job listings from top
                            companies in India. Whether you are looking for a
                            full-time job, part-time job, internship, or
                            freelance work, Direct Jobs has you covered. Our
                            platform is easy to use and free for job seekers.
                            Sign up today and start your job search! We are
                            committed to helping you find meaningful work and
                            build a successful career. Our mission is to provide
                            access to meaningful work for everyone. We believe
                            that everyone deserves the opportunity to work in a
                            job they love and we are committed to making that
                            happen.{" "}
                            <Link to={"/signup"} className="text-[color:var(--primary-color)] font-medium">
                                Sign up today and start your job search!
                            </Link>
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3">
                        <div className="md:space-y-8 md:col-span-2 md:order-first order-last">
                            <div className="flex flex-col justify-center py-4 md:py-0 md:px-16">
                                <p className="text-2xl font-medium w-full uppercase text-[color:var(--primary-color)]">
                                    Our Vision
                                </p>
                                <h2 className="text-[color:var(--secondary-color)]">
                                    We take pride in being a 0% brokerage
                                    platform, meaning that job seekers can
                                    explore opportunities without any financial
                                    burden. Our commitment to providing free
                                    access to job listings sets us apart, making
                                    us a trusted partner in your career journey.
                                </h2>
                            </div>
                            <div className="flex flex-col justify-center py-4 md:py-0 md:px-16">
                                <p className="text-2xl font-medium w-full uppercase text-[color:var(--primary-color)]">
                                    Our Values
                                </p>
                                <h2 className="text-[color:var(--secondary-color)]">
                                    We believe in transparency, integrity, and
                                    accountability. Our platform is designed to
                                    provide a seamless experience for job
                                    seekers and employers alike. We are
                                    committed to helping you find the perfect
                                    job and build a successful career.
                                </h2>
                            </div>
                            <div className="flex flex-col justify-center py-4 md:py-0 md:px-16">
                                <p className="text-2xl font-medium w-full uppercase text-[color:var(--primary-color)]">
                                    Our Promise
                                </p>
                                <h2 className="text-[color:var(--secondary-color)]">
                                    We promise to provide you with the best job
                                    listings from top companies in India. Our
                                    platform is easy to use and free for job
                                    seekers. Sign up today and start your job
                                    search!
                                </h2>
                            </div>
                        </div>
                        <div>
                            <img
                                className="px-10 md:px-0 py-6 md:py-0 object-contain md:grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                                src={asset1}
                                alt="asset1"
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="py-8 md:py-16 space-y-6 grid md:grid-cols-3 gap-2">
                    <div className="h-fit">
                        <img
                            className="max-h-fit w-[80%] m-auto object-contain md:grayscale hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-3 hover:drop-shadow-xl"
                            src={asset2}
                            alt=""
                        />
                    </div>
                    <div className="md:col-span-2 space-y-6 px-8">
                        <h1 className="text-5xl text-[color:var(--primary-color)]">
                            Join Us Today And Experience A New Way To Find Your
                            Dream Job
                        </h1>
                        <p className="text-zinc-800">
                            We invite you to explore our platform, connect
                            directly with employers, and take control of your
                            career journey. Your success is our success, and
                            we&apos;re excited to help you reach your goals.
                            Sign up today and start your job search! We are
                            committed to helping you find meaningful work and
                            build a successful career.
                        </p>
                        <div className="flex gap-3 items-center">
                            <PrimaryButton to="/login">Login</PrimaryButton>
                            <SecondaryButton to="/signup">
                                Create a Profile
                            </SecondaryButton>
                            <hr className="hidden md:block border-[1px] border-[color:var(--primary-color)] w-full rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
