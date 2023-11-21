import useItems from "../../../Hooks/useItems";
import MenuItemsCategory from "../../../Pages/MenuItems/MenuItemsCategory/MenuItemsCategory";

const OfferedFood = () => {
    const [menu] = useItems([]);
    const offered = menu.filter((item) => item.category === "offered");
    // console.log(offeredItems, "from offeredFood");

    return (
        <section>
          
            
            <MenuItemsCategory 
                
                 items={offered}
                 categoryHeadline="offered"
                 categoryDetails="offer khao chapar sobde birokto koro char pash Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores temporibus nostrum pariatur nihil quaerat veritatis reprehenderit voluptates tempore sit aut, quam consectetur, esse, repudiandae fugit! Soluta expedita delectus nisi, nemo at magnam consectetur dignissimos obcaecati! Autem ratione excepturi officia."
             ></MenuItemsCategory>
        </section>
    );
};

export default OfferedFood;
