import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./constants";

function TestimonicalMarquee() {
    return (
        <div className="mt-16 md:my-36 md:mb-16">
            <div className="px-8 space-y-2 sm:space-y-4 md:max-w-7xl m-auto md:mb-12">
                <h3 className="text-center font-medium text-lg text-[color:var(--primary-color)]">
                    1000+ People are already using Direct Jobs
                </h3>
                <h2 className="text-center font-medium text-3xl md:text-4xl lg:text-5xl">
                    Get your dream job on{" "}
                    <span className="text-[color:var(--primary-color)]">
                        {" "}
                        Direct Jobs
                    </span>
                </h2>
            </div>
            <div className="grid md:grid-cols-4 overflow-hidden">
                <div className="bg-[color:var(--primary-color)] py-8 sm:py-14 hidden lg:flex items-center">
                    <div className="px-2 xl:px-8 space-y-2 max-w-7xl m-auto">
                        <h3 className="text-center font-medium text-sm xl:ltext-lg text-white">
                            What our users say about us
                        </h3>
                        <h2 className="text-center font-medium text-3xl md:text-4xl lg:5xl text-white">
                            Testimonials
                        </h2>
                    </div>
                </div>
                <div className="m-auto py-8 sm:py-14 md:col-span-3">
                    <div className="mt-8">
                        <div className="">
                            <Marquee autoFill={true}>
                                <div className="flex flex-wrap">
                                    {testimonials.map((testimonial, index) => (
                                        <TestimonialCard
                                            key={index}
                                            testimonial={
                                                testimonial.testimonial
                                            }
                                            author={testimonial.author}
                                            position={testimonial.position}
                                            avatar={testimonial.avatar}
                                        />
                                    ))}
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonicalMarquee;
