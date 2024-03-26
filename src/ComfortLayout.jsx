import NavBar2 from "./components/NavBar/NavBar2";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function ComfortLayout() {
    return (
        <>
            <NavBar2 />
            <div className="mt-[110px]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default ComfortLayout;
