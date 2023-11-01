import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import MenuItem from "../Pages/MenuItems/MenuItems/MenuItems";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/Home/About/About";
import Review from "../Pages/Home/Review/Review";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/review",
                element: <Review></Review>,
            },
            {
                path: "/items",
                element: <MenuItem></MenuItem>,
            },
            {
                path: "/order",
                element: <OrderFood></OrderFood>,
            },
            {
                path: "/order/:category",
                element: (
                    <PrivateRoute>
                        <OrderFood></OrderFood>,
                    </PrivateRoute>
                ),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>,
            },
        ],
    },
]);
