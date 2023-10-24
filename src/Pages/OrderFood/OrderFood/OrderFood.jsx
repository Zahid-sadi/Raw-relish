import {useState} from "react";
import Cover from "../../../Shared/Cover/Cover";
import coverImage from "../../../assets/smoke-cook.jpg";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodMap from "../FoodMap/FoodMap";
import useItems from "../../../Hooks/useItems";

const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useItems([]);
    // console.log(menu);
    // console.log(spicy);

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
            <Cover coverPhoto={coverImage} coverHeadline="Order us " coverDetails="we ensure your demand"></Cover>

            <div className=" bg-slate-200 mx-auto ">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className=" text-yellow-400 bg-slate-600 mx-10">
                        <TabList>
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
