import PropTypes from "prop-types";
import background from "../../assets/images/hero_background.png";

function Card({ title, subtitle, image, totalJobs, onClick }) {
    return (
        <div className="border-2 group border-slate-200 hover:border-slate-300 w-full rounded-lg cursor-pointer overflow-hidden">
            <div
                className={`flex justify-between h-40 items-end group-hover:bg-[#ffd302] bg-cover bg-right-bottom relative`}
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="p-5">
                    <p className="text-2xl lg:text-3xl font-medium">{title}</p>
                    <p className="text-sm">{subtitle}</p>
                </div>
                {image && (
                    <img
                        className="object-contain w-36 transition-all duration-500 ease-in-out group-hover:scale-110"
                        src={image}
                        alt=""
                    />
                )}
            </div>
        </div>
    );
}

export default Card;

Card.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string,
    totalJobs: PropTypes.number,
    onClick: PropTypes.func,
};
