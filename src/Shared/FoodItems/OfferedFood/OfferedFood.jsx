import CategoryHero from "../../CategoryHero/CategoryHero";
import imgBanner from "../../../assets/Restaurant food cinematic video advertisement (Bangladesh).mp4";
import useItems from "../../../Hooks/useItems";
import MenuItemsCategory from "../../../Pages/MenuItems/MenuItemsCategory/MenuItemsCategory";

const OfferedFood = () => {
    const [menu] = useItems([]);
    const offered = menu.filter((item) => item.category === "offered");
    // console.log(offeredItems, "from offeredFood");

    return (
        <section>
            <CategoryHero
                bgvideo={imgBanner}
                heading={"Today's ________Offer"}
                details={" this is category hero there is some new food for offer for today's  "}
            ></CategoryHero>
            ,
            
            <MenuItemsCategory 
                 items={offered}
                 categoryHeadline="offered"
                 categoryDetails="offer khao chapar sobde birokto koro char pash"
             ></MenuItemsCategory>
        </section>
    );
};

export default OfferedFood;
