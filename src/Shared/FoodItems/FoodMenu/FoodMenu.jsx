import React, {useEffect, useState} from "react";
import OfferedFood from "../OfferedFood/OfferedFood";
import CategoryHero from "../../CategoryHero/CategoryHero";
import imgBanner from '../../../assets/smoke-cook.jpg';

const FoodMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("menu.json")
        .then((res) => res.json())
        .then((data) => {
            const offeredItems = data.filter((item) => item.category === "offered");
            setMenu(offeredItems);
        });
    }, []);

    // console.log("Menu Item state", menu);

    return (
        <section>
            <CategoryHero imageUrl={imgBanner} heading={"Today's ________Offer"}
            details ={" this is category hero there is some new food for offer for today's  "}
            ></CategoryHero>,

            <div className=" h-min p-10 flex">
                <div className="w-1/2 items-center justify-center p-60  ">
                    <h3 className=" text-4xl font-bold text-white text-center uppercase p-10  shadow-sm shadow-white ">
                        __________today's offer__________
                    </h3>
                    <p className="text-white p-10 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, obcaecati dignissimos tenetur
                        quam minus sed repellat deserunt libero molestias necessitatibus repellendus illum culpa totam
                        non expedita hic quidem facere fugit ipsam eaque at illo dicta doloremque fuga? Sequi
                        dignissimos inventore rerum ipsam. Quibusdam nihil blanditiis voluptatum voluptatibus ducimus
                        quia laudantium.
                    </p>
                </div>
                <div className=" w-fit   p-10  grid grid-flow-row md:grid-cols-2 sm:grid-cols-1">
                    {
                        menu.map((offeredItem) => (
                            <OfferedFood key={offeredItem._id} offeredItem={offeredItem}></OfferedFood>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default FoodMenu;
