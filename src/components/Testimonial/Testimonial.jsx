import CenterTitle from "../SharedComponents/CenterTitle";
import Divider from "../SharedComponents/Divider";
import TestimonialCard from "./TestimonialCard";
import PropTypes from "prop-types";
import { chunkArray } from "../../utils/chunckArray";
function Testimonial({ data }) {
    const chunkedTestimonials = chunkArray(data, data?.length / 3).reverse();

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center">
            <div className="w-full bg-white px-5 text-gray-800">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="text-center mx-auto">
                        <CenterTitle>
                            <h2 className="text-center font-medium text-3xl md:text-4xl lg:text-5xl text-black">
                                Why Jobseekers Love{" "}
                                <span className="text-[color:var(--primary-color)]">
                                    {" "}
                                    Direct Jobs
                                </span>
                            </h2>
                        </CenterTitle>
                        <Divider />
                    </div>
                    <div className="-mx-3 md:flex items-start">
                        {/* <div key={index} className="px-3 md:w-1/3"></div> */}
                        {/*  */}
                        {chunkedTestimonials.map((testimonial, index) => (
                            <div key={index} className="px-3 md:w-1/3">
                                {testimonial.map((testimonial, index) => (
                                    <TestimonialCard
                                        key={index}
                                        author={testimonial.author}
                                        testimonial={testimonial.testimonial}
                                        avatar={testimonial.avatar}
                                        profession={testimonial.position}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;

Testimonial.propTypes = {
    data: PropTypes.array,
};
