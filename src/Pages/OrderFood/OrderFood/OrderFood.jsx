import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import coverImage from "../../../assets/bl-spooon.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodMap from "../FoodMap/FoodMap";
import useItems from "../../../Hooks/useItems";
import { useParams } from "react-router";

const OrderFood = () => {
    const categories = [
        "offered",
        "rawSpecial",
        "spicy",
        "dessert",
        "foodbread",
        "grilled",
        "pickles",
        "honey",
        "fruits",
        "juice",
        "all",
    ];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [ tabIndex, setTabIndex ] = useState(initialIndex);

   

    const [ menu ] = useItems([]);
    // console.log(menu);
    // console.log(spicy);

    const offered = menu.filter((item) => item.category === "offered");
    const spicy = menu.filter((item) => item.category === "spicy");
    const rawSpecial = menu.filter((item) => item.category === "raw-special");
    const honey = menu.filter((item) => item.category === "honey");
    const fruits = menu.filter((item) => item.category === "fruits");
    const juice = menu.filter((item) => item.category === "juice");
    const pickles = menu.filter((item) => item.category === "pickles");
    const foodbread = menu.filter((item) => item.category === "foodbread");
    const dessert = menu.filter((item) => item.category === "dessert");
    const grilled = menu.filter((item) => item.category === "grilled");

    return (
        <div>
            <Cover coverPhoto={coverImage} coverHeadline="Order Us " coverDetails="we ensure your demand"></Cover>

            <div className=" h-fit p-10  bg-gradient-to-b from-slate-900 to-slate-700  text-black ">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className=" text-yellow-600 p-8 font-bold  text-center">
                        <TabList>
                            <Tab>Today's offer</Tab>
                            <Tab>Raw Special</Tab>
                            <Tab>Spicy</Tab>
                            <Tab>Dessert</Tab>
                            <Tab>R.S Bread </Tab>
                            <Tab>grilled</Tab>
                            <Tab>Pickles Mix</Tab>
                            <Tab>With Honey</Tab>
                            <Tab>Raw Fruits</Tab>
                            <Tab>Juice</Tab>
                            <Tab>All Items</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <FoodMap items={offered}></FoodMap>
                    </TabPanel>
                    <TabPanel>
                        <FoodMap items={rawSpecial}></FoodMap>
                    </TabPanel>
                    <TabPanel>
                        <FoodMap items={spicy}></FoodMap>
                    </TabPanel>
                    <TabPanel>
                        <FoodMap items={dessert}></FoodMap>
                    </TabPanel>
                    <TabPanel>
                        <FoodMap items={foodbread}></FoodMap>
                    </TabPanel>
                    <TabPanel>
                        <FoodMap items={grilled}></FoodMap>
                    </TabPanel>
                    <TabPanel>
                        <FoodMap items={pickles}></FoodMap>
                    </TabPanel>
                    <TabPanel>
                        <FoodMap items={honey}></FoodMap>
                    </TabPanel>
                    <TabPanel>
                        <FoodMap items={fruits}></FoodMap>
                    </TabPanel>
                    <TabPanel>
                        <FoodMap items={juice}></FoodMap>
                    </TabPanel>
                    <TabPanel>
                        <FoodMap items={menu}></FoodMap>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;
