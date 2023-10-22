import CategoryHero from "../../CategoryHero/CategoryHero";
import imgBanner from '../../../assets/Restaurant food cinematic video advertisement (Bangladesh).mp4';
import useItems from "../../../Hooks/useItems";
import FoodDisplay from "../FoodDisplay/FoodDisplay";

const FoodMenu = () => {

    
    const [menu] = useItems([]);
    const offeredItems = menu.filter(item => item.category === "offered" )
    console.log(offeredItems, "from foodmenu");

  

    return (
        <section>
            <CategoryHero bgvideo={imgBanner} heading={"Today's ________Offer"}
            details ={" this is category hero there is some new food for offer for today's  "}
            ></CategoryHero>,

            <div className=" p-10 flex">
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
                <div className=" w-fit h-full  grid grid-flow-row md:grid-cols-2 sm:grid-cols-1">
                    {
                        offeredItems.map((offeredItem) => (
                            <FoodDisplay key={offeredItem._id} offeredItem={offeredItem}></FoodDisplay>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default FoodMenu;
