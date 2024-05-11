import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function ComfortLayout() {
    return (
        <>
            <NavBar />
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default ComfortLayout;
