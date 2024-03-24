import { Link } from "react-router-dom";
import logo from "../../assets/images/mobileLogo.png";

function BrandLogo() {
    return (
        <Link to={"/"} className="flex gap-2 items-center">
            <img className="w-5 sm:w-8" src={logo} width={"50"} alt="" />
            <span className="font-medium text-zinc-700 leading-none">
                <p>Direct Jobs</p>
                <p className="text-xs font-normal">Ab direct job lega India</p>
            </span>
        </Link>
    );
}

export default BrandLogo;
