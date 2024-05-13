import ReactDOM from "react-dom/client";
// import Layout from "./Layout.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import Jobs from "./pages/Jobs.jsx";
import Support from "./pages/Support.jsx";
import Layout from "./Layout.jsx";
import FAQs from "./pages/FAQs.jsx";
import Categories from "./pages/Categories.jsx";
import Location from "./pages/Location.jsx";
import JobDetails from "./components/JobListing/JobDetails.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import { Suspense } from "react";
import Loader from "./components/SharedComponents/Loader.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Protected from "./AuthLayout.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import ApplyJobs from "./pages/ApplyJobs.jsx";
import Login from "./pages/Login.jsx";
// import Company from "./pages/Company.jsx";
import CompanyDetails from "./pages/CompanyDetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
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
                element: (
                    <Protected authentication>
                        <UserProfile />,
                    </Protected>
                ),
            },
            {
                path: "user/edit-profile",
                element: (
                    <Protected authentication>
                        <EditProfile />,
                    </Protected>
                ),
            },
            {
                path: "login",
                element: (
                    <Protected authentication={false}>
                        <Login />,
                    </Protected>
                ),
            },
            {
                path: "jobs",
                children: [
                    {
                        path: "",
                        element: <Jobs />,
                    },
                    {
                        path: "details",
                        element: <JobDetails />,
                    },
                    {
                        path: "apply/:id",
                        element: (
                            <Protected authentication>
                                <ApplyJobs />,
                            </Protected>
                        ),
                    },
                ],
            },
            {
                path: "company",
                children: [
                    {
                        path: ":id",
                        element: <CompanyDetails />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
