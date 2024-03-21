import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function Layout() {
    return (
        <>
            <NavBar />
            <div className="mt-[150px]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;
