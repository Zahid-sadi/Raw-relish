import useItems from "../../../Hooks/useItems";
import MenuItemsCategory from "../../../Pages/MenuItems/MenuItemsCategory/MenuItemsCategory";

const OfferedFood = () => {
    const [ menu ] = useItems([]);
    const offered = menu.filter((item) => item.category === "offered");
    // console.log(offered, "from offeredFood");

    return (
        <section className="h-fit">
            <MenuItemsCategory
                items={offered}
                categoryHeadline="offered"
                categoryDetails="offer khao chapar sobde birokto koro char pash Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores temporibus nostrum pariatur nihil quaerat veritatis reprehenderit voluptates tempore sit "
            ></MenuItemsCategory>
        </section>
    );
};

export default OfferedFood;
