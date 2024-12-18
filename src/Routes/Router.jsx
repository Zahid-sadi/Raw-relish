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
import AdminPrivateRoute from "./AdminPrivateRoute";
import AddNewItem from "../Pages/Dashboard/AddNewItem/AddNewItem";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItems from "../Pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import DetailAbout from "../Pages/Home/About/DetailAbout/DetailAbout";

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
                path: "/detail_about",
                element: <DetailAbout></DetailAbout>,
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
        path: '/dashboard',
        element:<PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'my/cart',
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path: 'userHome',
                element:<PrivateRoute><UserHome></UserHome></PrivateRoute>
            },
            {
                path: 'payment',
                element:<PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
                path: 'all/users',
                element:<AdminPrivateRoute><AllUsers></AllUsers></AdminPrivateRoute>
            },
            {
                path: 'adminHome',
                element:<AdminPrivateRoute><AdminHome></AdminHome></AdminPrivateRoute>
            },
            {
                path: 'add/item',
                element:<AdminPrivateRoute><AddNewItem></AddNewItem></AdminPrivateRoute>
            },
            {
                path: 'manage/item',
                element:<AdminPrivateRoute><ManageItem></ManageItem></AdminPrivateRoute>
            },
            {
                path: 'update/item/:id',
                element:<AdminPrivateRoute><UpdateItems></UpdateItems></AdminPrivateRoute>
            },
        ]
        
    }
]);
