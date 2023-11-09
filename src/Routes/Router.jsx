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
import DashboardLayout from "../Layout/DashboardLayout";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

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
                element: (
                    <PrivateRoute>
                        <OrderFood></OrderFood>
                    </PrivateRoute>
                ),
            },
            {
                path: "/order/:category",
                element: <OrderFood></OrderFood>,
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
    {
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'mycart',
                element:<MyCart></MyCart>
            },
            {
                path: 'allusers',
                element:<AllUsers></AllUsers>
            },
        ]
        
    }
]);
