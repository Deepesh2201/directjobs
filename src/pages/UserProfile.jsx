// {
//     email: "rahulksingh3907@gmail.com";
//     name: "Rahul Kumar Singh ";
//     phone: "8210228101";
//     user_id: 51;
//     user_image: "https://directjobs.in/partner/images/profile.png";
//     usertype: "User";
// }

import { useEffect, useState } from "react";
import { getUnsplashImage } from "../utils/UnsplashImage";
import Loader from "../components/SharedComponents/Loader";
import { useSelector } from "react-redux";

function UserProfile() {
    const user = useSelector((state) => state.auth.userData);
    const [coverImage, setCoverImage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (user?.user_id) {
            getUnsplashImage(`wallpaper ${user?.user_id}`).then((data) => {
                setCoverImage(data.urls.regular);
                document.title = `${user?.name || "Profile"} | Direct Jobs`;
                setLoading(false);
            });
        }
    }, [user?.user_id, user?.name]);

    return (
        <div>
            {!loading && (
                <div className="max-w-7xl m-auto px-4 md:px-8">
                    <div
                        className="w-full -z-10 bg-slate-500 h-28 md:h-44 lg:h-64 bg-center bg-cover bg-no-repeat relative rounded-lg mt-8"
                        style={{ backgroundImage: `url(${coverImage})` }}
                    ></div>

                    <div className="rounded-lg -mt-16 p-4 md:p-8 flex flex-col md:flex-row items-center gap-0 md:gap-8 justify-center md:justify-start">
                        <div className="flex justify-center md:justify-start">
                            <img
                                className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-full border-2 drop-shadow-md"
                                src={user?.user_image}
                                alt={user?.name}
                            />
                        </div>
                        <div className="text-center md:text-left mt-4">
                            <h1 className="text-xl drop-shadow-2xl md:text-2xl lg:text-4xl font-semibold text-[color:var(--primary-color)]">
                                {user?.name}
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl text-[color:var(--secondary-color)]">
                                {user?.email}
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-8 lg:mt-12">
                        <div className="mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg p-4">
                                    <h2 className="text-xl font-semibold text-[color:var(--primary-color)]">
                                        Contact Information
                                    </h2>
                                    <p className="text-[color:var(--secondary-color)]">
                                        <span className="font-semibold">
                                            Email:
                                        </span>{" "}
                                        {user?.email}
                                    </p>
                                    <p className="text-[color:var(--secondary-color)]">
                                        <span className="font-semibold">
                                            Phone:
                                        </span>{" "}
                                        {user?.phone}
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg p-4">
                                    <h2 className="text-xl font-semibold text-[color:var(--primary-color)]">
                                        User Information
                                    </h2>
                                    <p className="text-[color:var(--secondary-color)]">
                                        <span className="font-semibold">
                                            User ID:
                                        </span>{" "}
                                        {user?.user_id}
                                    </p>
                                    <p className="text-[color:var(--secondary-color)]">
                                        <span className="font-semibold">
                                            User Type:
                                        </span>{" "}
                                        {user?.usertype}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {loading && <Loader />}
        </div>
    );
}

export default UserProfile;
