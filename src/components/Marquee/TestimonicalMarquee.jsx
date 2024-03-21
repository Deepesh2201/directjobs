import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./constants";

function TestimonicalMarquee() {
    return (
        <div className="m-auto py-8 sm:py-14 ">
            <div className="space-y-2 sm:space-y-4 max-w-7xl m-auto">
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
            <div className="mt-8">
                <div className="">
                    <Marquee autoFill={true}>
                        <div className="flex flex-wrap">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={index}
                                    testimonial={testimonial.testimonial}
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
    );
}

export default TestimonicalMarquee;
