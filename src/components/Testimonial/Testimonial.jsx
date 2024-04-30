import CenterTitle from "../SharedComponents/CenterTitle";
import Divider from "../SharedComponents/Divider";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import checkIsMobile from "../../utils/checkIsMobile";

function Testimonial({ data }) {
    const isMobile = checkIsMobile();
    return (
        <div className="w-full flex items-center justify-center px-4 lg:px-8">
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

                    <Swiper
                        slidesPerView={isMobile ? 1 : 3}
                        spaceBetween={20}
                        about="Testimonials"
                        pagination={{
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            Autoplay: true,
                            delay: 2500,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        modules={[Autoplay, Pagination]}
                    >
                        {data.map((testimonial, index) => (
                            <SwiperSlide key={index} className="lg:px-2">
                                <TestimonialCard
                                    author={testimonial.author}
                                    testimonial={testimonial.testimonial}
                                    avatar={testimonial.avatar}
                                    profession={testimonial.position}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;

Testimonial.propTypes = {
    data: PropTypes.array,
};
