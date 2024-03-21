import proptype from "prop-types";
function TestimonialCard({ testimonial, author, position, avatar }) {
    return (
        <div className="bg-white p-4 rounded-lg sm:flex justify-between items-center gap-4 drop-shadow hover:drop-shadow-lg hover:bg-gradient-to-bl from-white to-[#b107a53e] border-[1px] hover:border-[color:var(--primary-color)] sm:max-h-[180px] max-w-[90vw] sm:w-[550px] sm:max-w-[90%] me-8">
            <div className="flex flex-col items-center justify-center aspect-square w-[150px] h-[150px] m-auto">
                <img
                    className="rounded-full border-2 border-[color:var(--primary-color)] w-20 h-20 object-cover"
                    src={avatar}
                />
                <p className="text-[color:var(--primary-color)] font-medium leading-tight">
                    {author}
                </p>
                <p className="text-gray-700 leading-tight text-center text-sm">
                    {position}
                </p>
            </div>
            <div className="max-h-[150px]">
                <p className="text-justify sm:leading-6 pe-4 text-sm sm:text-base">
                    {testimonial}
                </p>
            </div>
        </div>
    );
}

export default TestimonialCard;

TestimonialCard.propTypes = {
    testimonial: proptype.string,
    author: proptype.string,
    position: proptype.string,
    avatar: proptype.string,
};
