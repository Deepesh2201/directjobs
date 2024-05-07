import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

function UserProfileLabel({ avatar, name, username, handleSignout }) {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="flex justify-between items-center leading-tight">
            <div className="relative flex items-center space-x-2">
                <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="relative"
                >
                    <span
                        className="inline-block h-9 w-9 rounded-full bg-center bg-cover bg-no-repeat"
                        style={{ backgroundImage: `url(${avatar})` }}
                    ></span>
                    <span className="absolute right-0 bottom-0 w-4 h-4 bg-slate-800 rounded-full flex items-center justify-center text-white">
                        <i className="fas fa-chevron-down text-[0.5rem]"></i>
                    </span>
                </div>
                <span className="relative">
                    {showDropdown && (
                        <div className="absolute border right-0 mt-6 w-56 bg-white rounded-md overflow-hidden shadow-xl z-10">
                            <div className="py-1">
                                <div className="flex gap-1.5 px-4 py-2 text-sm text-gray-700">
                                    {/* <img className="" src={avatar} alt={name} /> */}
                                    <span
                                        className="inline-block h-8 w-8 rounded-full bg-center bg-cover bg-no-repeat"
                                        style={{
                                            backgroundImage: `url(${avatar})`,
                                        }}
                                    ></span>
                                    <div>
                                        <span className="truncate line-clamp-1 leading-tight">
                                            {name || "Welcome User"}
                                        </span>
                                        <span className="text-[0.7rem] text-[color:var(--primary-color)] truncate line-clamp-1 whitespace-nowrap leading-none">
                                            {username || "Update your profile"}
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    to="/user/profile"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    My Profile
                                </Link>

                                <button
                                    onClick={handleSignout}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    )}
                </span>
            </div>
        </div>
    );
}

export default UserProfileLabel;

UserProfileLabel.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
    handleSignout: PropTypes.func,
};
