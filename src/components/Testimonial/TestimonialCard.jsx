import propTypes from "prop-types";

function TestimonialCard({ author, profession, testimonial, avatar }) {
    return (
        <div className="w-full mx-auto rounded-2xl hover:drop-shadow-lg cursor-default bg-white border border-gray-200 p-5 text-gray-800 mb-6">
            <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src={avatar} alt="" />
                </div>
                <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-zinc-800">
                        {author}
                    </h6>
                    <p className="text-xs text-gray-500">{profession}</p>
                </div>
            </div>
            <div className="w-full">
                <p className="text-sm font-normal">
                    <span className="text-xl leading-none font-bold text-[color:var(--primary-color)] mr-1">
                        &ldquo;
                    </span>
                    {testimonial}
                    <span className="text-xl leading-none font-bold text-[color:var(--primary-color)] ml-1">
                        &rdquo;
                    </span>
                </p>
            </div>
        </div>
    );
}

export default TestimonialCard;

TestimonialCard.propTypes = {
    author: propTypes.string,
    testimonial: propTypes.string,
    avatar: propTypes.string,
    profession: propTypes.string,
};
