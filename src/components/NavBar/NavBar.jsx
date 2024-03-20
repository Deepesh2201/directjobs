import React from "react";
import menuItems from "./navLinks.js";
import logo from "../../assets/images/noBGlogo512x512.png";
import mobileLogo from "../../assets/images/mobileLogo.png";
import playStoreLogo from "../../assets/images/playstore.png";
import PrimaryButton from "../SharedComponents/PrimaryButton.jsx";
import { Link, NavLink } from "react-router-dom";
import SecondaryButton from "../SharedComponents/SecondaryButton.jsx";
import { Menu, X } from "lucide-react";
import UserProfileLabel from "../SharedComponents/UserProfileLabel.jsx";

const userinfo = {
    avatar: "https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg",
    name: "Test User",
    username: "text001@example.com",
};

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isLoggedIn] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="lg:h-[150px] w-full flex fixed top-0 z-10">
            <div className="flex flex-1 justify-between items-center max-w-7xl bg-white bg-opacity-90 backdrop-blur-md shadow-xl px-6 py-2 my-auto sm:m-auto lg:rounded-lg border-[1px] border-[color:var(--hover-primary-color)]">
                <div>
                    <img
                        className="w-16 sm:w-20"
                        src={logo}
                        alt="Direct Jobs"
                    />
                </div>
                <div className="hidden sm:block space-x-6 font-medium">
                    <div className="ml-12 flex space-x-8 items-center">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "text-[color:var(--primary-color)] underline underline-offset-4"
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
                <div className="ml-2 mt-2 hidden lg:flex items-center">
                    {isLoggedIn && (
                        <span className="relative inline-block">
                            <img
                                className="h-10 w-10 rounded-full"
                                src={userinfo.avatar}
                                alt={userinfo.name}
                            />
                            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
                        </span>
                    )}
                    {!isLoggedIn && (
                        <>
                            <span className="space-x-2">
                                <PrimaryButton>Log in</PrimaryButton>
                                <SecondaryButton>Sign Up</SecondaryButton>
                            </span>
                            <Link
                                to={
                                    "https://play.google.com/store/apps/details?id=com.direct.jobs&hl=en-IN"
                                }
                                target="_blank"
                            >
                                <img
                                    className="h-10 ms-2"
                                    src={playStoreLogo}
                                    alt="Download our App"
                                />
                            </Link>
                        </>
                    )}
                </div>
                <div className="ml-2 lg:hidden">
                    <Menu
                        onClick={toggleMenu}
                        className="h-7 w-7 cursor-pointer text-[color:var(--primary-color)]"
                    />
                </div>
                {/* mobile menu */}
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <img
                                            className="w-6 sm:w-24"
                                            src={mobileLogo}
                                            alt="Direct Jobs"
                                        />
                                        <span className="font-medium text-[color:var(--primary-color)]">
                                            DIRECT JOBS
                                        </span>
                                    </div>
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
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.path}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.label}
                                                </span>
                                                {/* <ChevronRight className="ml-3 h-4 w-4" /> */}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                {isLoggedIn && (
                                    <UserProfileLabel
                                        {...userinfo}
                                        btn={
                                            <i className="fa-solid fa-right-from-bracket"></i>
                                        }
                                    />
                                )}
                                {!isLoggedIn && (
                                    <div className="flex gap-3 mt-5 px-3">
                                        <PrimaryButton className="w-full text-center">
                                            Log in
                                        </PrimaryButton>
                                        <SecondaryButton className="w-full text-center">
                                            Sign up
                                        </SecondaryButton>
                                    </div>
                                )}
                                <div>
                                    <Link
                                        to={
                                            "https://play.google.com/store/apps/details?id=com.direct.jobs&hl=en-IN"
                                        }
                                        target="_blank"
                                    >
                                        <img
                                            className="h-14 m-auto mt-5"
                                            src={playStoreLogo}
                                            alt="Download our App"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
