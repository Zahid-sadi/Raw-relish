import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Items from "../Pages/Items/Items/Items";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";

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
                element: <Items></Items>
            },
            {
                path:"/order",
                element: <OrderFood></OrderFood>
            }
        ]
    }

])