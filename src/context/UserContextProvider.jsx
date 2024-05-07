import { useEffect, useState } from "react";
import UserContext from "./userContext";
import { login } from "../db/login";
import PropTypes from "prop-types";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        user_id: "directjobs.in/partner/images/profile.png",
    });
    useEffect(() => {
        const getUser = async () => {
            login.getUser().then((response) => {
                console.log(response);
                setUser(response);
            });
        };
        getUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
UserContextProvider.propTypes = {
    children: PropTypes.node,
};
