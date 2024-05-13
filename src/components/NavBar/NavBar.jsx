import React, { useEffect } from "react";
import { menuItems, mobileMenuItems } from "./navLinks.js";
import playStoreLogo from "../../assets/images/playstore.png";
import appStoreLogo from "../../assets/images/appstore.png";
import PrimaryButton from "../SharedComponents/PrimaryButton.jsx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SecondaryButton from "../SharedComponents/SecondaryButton.jsx";
import { Menu, X } from "lucide-react";
import UserProfileLabel from "../SharedComponents/UserProfileLabel.jsx";
import BrandLogo from "../SharedComponents/BrandLogo.jsx";
import checkIsMobile, { checkMobileType } from "../../utils/checkIsMobile.js";
import PopupModal from "../SharedComponents/PopupModal.jsx";
import { login } from "../../db/login.js";
// import JobSearch from "../JobSearch/JobSearch.jsx";
import CandidateLogin from "../../pages/CandidateLogin.jsx";
import EmployeerLogin from "../../pages/EmployeerLogin.jsx";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice.js";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [pageScrolled, setPageScrolled] = React.useState(false);
    const [loginPopup, setLoginPopup] = React.useState(false);
    const [popupType, setPopupType] = React.useState("candidate");
    
    const mobileType = checkMobileType();
    const navigate = useNavigate();
    
    const user = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();

    React.useEffect(() => {
        setIsMobile(checkIsMobile());
    }, []);

    // check when window scroll 100px and console log more and console log less when scroll is 0
    React.useEffect(() => {
        const handleScroll = () => {
            setPageScrolled(window.scrollY > (isMobile ? 50 : 100));
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // disable scrolling when the menu is open
        if (isMenuOpen) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    };

    const toggleCandidateLogin = () => {
        setLoginPopup(true);
        setPopupType("candidate");
    };

    const toggleEmployerLogin = () => {
        setLoginPopup(true);
        setPopupType("employer");
    };

    useEffect(() => {
        // stop scroll wehn popup is open
        if (loginPopup) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [loginPopup]);

    const handleSignout = () => {
        console.log("User Logged Out");
        dispatch(logout());
        login.logout();
        navigate("/");
    };

    return (
        <>
            <nav
                className={`h-fit w-full flex  top-0 z-40 px-4 lg:px-8 py-2.5 transition-colors ease-in-out bg-white ${
                    pageScrolled && "shadow-md  fixed"
                }`}
            >
                <div className="flex w-full justify-between items-center max-w-7xl mx-auto">
                    <div className="flex items-center w-fit gap-8 mx-2 whitespace-nowrap">
                        <BrandLogo
                            noSocial
                            color
                            className={"!text-slate-900"}
                        />
                        <div className="hidden md:block space-x-6 font-medium">
                            <div className="flex space-x-8 items-center">
                                {menuItems.map((item) => (
                                    <NavLink
                                        key={item.label}
                                        to={item.path}
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? "text-[color:var(--primary-color)]"
                                                : isPending
                                                ? "text-[color:var(--primary-color)]"
                                                : "text-[color:var(--secondary-color)] hover:text-[color:var(--primary-color)]"
                                        }
                                    >
                                        {item.label}
                                        {/* <ChevronDown className="ml-2 h-4 w-4" /> */}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        {/* <div className=" hidden lg:block">
                            <JobSearch compact iconOnLeft={false} />
                        </div> */}
                    </div>
                    <div className="gap-2 flex items-center text-xs lg:text-base">
                        {user?.user_id && (
                            <UserProfileLabel
                                name={user.name}
                                username={user.email}
                                avatar={user.user_image}
                                handleSignout={handleSignout}
                            />
                        )}

                        {!user?.user_id && (
                            <>
                                <span className="gap-2 flex items-center flex-row-reverse md:flex-row">
                                    {/* <div className="lg:hidden">
                                        <Menu
                                            onClick={toggleMenu}
                                            className="h-7 w-7 cursor-pointer text-[color:var(--primary-color)]"
                                        />
                                    </div> */}
                                    <PrimaryButton
                                        onClick={toggleCandidateLogin}
                                    >
                                        <span className="hidden md:block">
                                            Candidate Login
                                        </span>
                                        <span className="block md:hidden">
                                            Login
                                        </span>
                                    </PrimaryButton>
                                    <SecondaryButton
                                        onClick={toggleEmployerLogin}
                                    >
                                        <span className="hidden md:block">
                                            Employer Login
                                        </span>
                                        <span className="block md:hidden">
                                            Post a Job
                                        </span>
                                    </SecondaryButton>
                                    <Link
                                        className="hidden lg:inline-flex w-fit"
                                        // to={"https://play.google.com/store/apps/details?id=com.direct.jobs&hl=en-IN"}
                                        target="_blank"
                                    >
                                        <img
                                            className="h-10 hover:opacity-85"
                                            src={playStoreLogo}
                                            alt="Download our App"
                                        />
                                    </Link>
                                </span>
                            </>
                        )}

                        <div className="md:hidden">
                            <Menu
                                onClick={toggleMenu}
                                className="h-7 w-7 cursor-pointer text-[color:var(--primary-color)]"
                            />
                        </div>
                    </div>
                    {/* mobile menu */}
                    {isMenuOpen && (
                        <div className="absolute inset-x-0 top-0 z-50 origin-top-right bg-white h-dvh transform p-2 transition ease-linear lg:hidden">
                            <div className="flex flex-col px-4 mt-2 h-full">
                                <div className="flex items-center justify-end">
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <X
                                                className="h-6 w-6 text-red-600"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <nav className="flex-1 mt-2 flex flex-col text-lg">
                                    {mobileMenuItems.map((item) => (
                                        <NavLink
                                            key={item.label}
                                            onClick={toggleMenu}
                                            to={item.path}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "flex items-center text-[color:var(--primary-color)] p-2 w-fit"
                                                    : "flex items-center text-[color:var(--secondary-color)] hover:text-[color:var(--primary-color)] p-2 w-fit"
                                            }
                                        >
                                            <span className="w-5 text-sm flex items-center justify-center mr-2">
                                                <i className={item.icon}></i>
                                            </span>
                                            <span>{item.label}</span>

                                            {/* <ChevronRight className="ml-3 h-4 w-4" /> */}
                                        </NavLink>
                                    ))}
                                </nav>
                                {/* {isLoggedIn && (
                                <UserProfileLabel
                                    {...userinfo}
                                    btn={
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                    }
                                />
                            )} */}
                                <div className="flex flex-col gap-3 h-[20%]">
                                    {!user?.user_id && (
                                        <div className="flex gap-2 text-xs">
                                            <PrimaryButton
                                                className="w-full text-center h-fit"
                                                onClick={toggleCandidateLogin}
                                            >
                                                Candidate Login
                                            </PrimaryButton>
                                            <SecondaryButton
                                                className="w-full text-center h-fit"
                                                onClick={toggleEmployerLogin}
                                            >
                                                Employer Login
                                            </SecondaryButton>
                                        </div>
                                    )}
                                    <div
                                        className={`flex flex-1 justify-between items-center bg-[color:var(--primary-color)] px-4 text-white py-2 rounded-md`}
                                    >
                                        <h2 className="block flex-1 text-lg font-semibold leading-tight">
                                            {mobileType == "android" ? (
                                                <span>
                                                    For Best Experience,
                                                    Download our App
                                                </span>
                                            ) : (
                                                <span>
                                                    Stay Tuned! <br />
                                                    <small>
                                                        iOS App Coming Soon.
                                                    </small>
                                                </span>
                                            )}
                                        </h2>
                                        <Link
                                            className="block max-w-32"
                                            to={
                                                mobileType == "android"
                                                    ? "https://play.google.com/store/apps/details?id=com.direct.jobs&pcampaignid=web_share"
                                                    : ""
                                            }
                                            target="_blank"
                                        >
                                            <img
                                                src={
                                                    mobileType == "android"
                                                        ? playStoreLogo
                                                        : appStoreLogo
                                                }
                                                alt="Download our App"
                                            />
                                        </Link>
                                    </div>
                                </div>

                                <div className="my-5 mt-10">
                                    <div className="text-xs text-right mb-2 space-x-2">
                                        <a href="">Privacy Policy</a>
                                        <a href="">TnC</a>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div onClick={toggleMenu} className="">
                                            <BrandLogo noSocial={true} color />
                                        </div>
                                        <div className="flex gap-1.5 text-lg">
                                            <i className="fa-brands fa-facebook"></i>
                                            <i className="fa-brands fa-instagram"></i>
                                            <i className="fa-brands fa-x-twitter"></i>
                                            <i className="fa-brands fa-linkedin"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {loginPopup && popupType === "candidate" && (
                <PopupModal closePopup={() => setLoginPopup(false)}>
                    <CandidateLogin closePopup={() => setLoginPopup(false)} />
                </PopupModal>
            )}

            {loginPopup && popupType === "employer" && (
                <PopupModal closePopup={() => setLoginPopup(false)}>
                    <EmployeerLogin closePopup={() => setLoginPopup(false)} />
                </PopupModal>
            )}
        </>
    );
}

export default NavBar;
