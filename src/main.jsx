import ReactDOM from "react-dom/client";
// import Layout from "./Layout.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Jobs from "./pages/Jobs.jsx";
import Support from "./pages/Support.jsx";
import ComfortLayout from "./ComfortLayout.jsx";
import FAQs from "./pages/FAQs.jsx";
import Categories from "./pages/Categories.jsx";
import Location from "./pages/Location.jsx";
import JobDetails from "./components/JobListing/JobDetails.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import { Suspense } from "react";
import Loader from "./components/SharedComponents/Loader.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ComfortLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "support",
                element: <Support />,
            },
            {
                path: "faqs",
                element: <FAQs />,
            },
            {
                path: "categories",
                element: <Categories />,
            },
            {
                path: "locations",
                element: <Location />,
            },
            {
                path: "user/profile",
                element: <UserProfile />,
            },
        ],
    },
    // jobs route
    {
        path: "jobs",
        element: <ComfortLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "",
                element: <Jobs />,
            },
            {
                path: "details",
                element: <JobDetails />,
            },
        ],
    },
    // {
    //     path: "/login",
    //     element: <Login />,
    // },
    // {
    //     path: "/signup",
    //     element: <Signup />,
    // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <UserContextProvider>
        <RouterProvider router={router} />
    </UserContextProvider>
);
