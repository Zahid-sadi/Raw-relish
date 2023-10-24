import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import MenuItem from "../Pages/MenuItems/MenuItems/MenuItems"

export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/items",
                element: <MenuItem></MenuItem>
            },
            {
                path:"/order",
                element: <OrderFood></OrderFood>
            }
        ]
    }

])