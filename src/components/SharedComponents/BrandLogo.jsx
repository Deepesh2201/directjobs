import { Link } from "react-router-dom";
import darkLogo from "../../assets/images/darkLogo.png";
import lightLogo from "../../assets/images/lightLogo.png";
import propType from "prop-types";

function BrandLogo({ className, logoClass, light = false, noSocial = false }) {
    const logo = light ? lightLogo : darkLogo;
    return (
        <div className={`text-zinc-700 ${className} w-fit`}>
            <Link to={"/"} className={`flex gap-2 items-center `}>
                <img
                    className={`w-8 sm:w-8 object-contain brightness-200 mix-blend-luminosity ${logoClass}`}
                    src={logo}
                    width={"50"}
                    alt=""
                />
                <span className="font-medium leading-none">
                    <p>Direct Jobs</p>
                    <p className="text-xs font-normal whitespace-nowrap">
                        Ab direct job lega India
                    </p>
                </span>
            </Link>

            {/* social media links */}
            {!noSocial && (
                <div className="flex gap-2 w-full justify-evenly mt-3">
                    <a href="#">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            )}
        </div>
    );
}

export default BrandLogo;

BrandLogo.propTypes = {
    className: propType.string,
    logoClass: propType.string,
    light: propType.bool,
    noSocial: propType.bool,
};
