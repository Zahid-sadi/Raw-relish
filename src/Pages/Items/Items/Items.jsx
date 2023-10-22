import { Helmet } from "react-helmet";
import FoodMenu from "../../../Shared/FoodItems/FoodMenu/FoodMenu";
import useItems from "../../../Hooks/useItems";
import CategoryHero from "../../../Shared/CategoryHero/CategoryHero";
import ItemsCategory from "../ItemsCategory/ItemsCategory";

const Items = () => {

    const [menu] = useItems([]);
    const spicy = menu.filter(item => item.category === "spicy" )
    const rawSpecial = menu.filter(item => item.category === "raw-special" )
    const honey = menu.filter(item => item.category === "honey" )
    const fruits = menu.filter(item => item.category === "fruits" )
    const juice = menu.filter(item => item.category === "juice" )
    const pickles = menu.filter(item => item.category === "pickles" )
    const foodbread = menu.filter(item => item.category === "foodbread" )
    const dessert = menu.filter(item => item.category === "dessert" )
    const grilled = menu.filter(item => item.category === "grilled" )

   
    return (
        <div className="bg-slate-700">
            <Helmet><title>Raw Relish Items </title></Helmet>
           <CategoryHero heading="spicy items"
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <ItemsCategory items={spicy} categoryHeadline="spicy items for you" categoryDetails="spicy khao chapar sobde birokto koro char pash"></ItemsCategory>

           <CategoryHero heading="this is our raw items for you"
           details="  raw khao chapar sobde birokto koro char pash"></CategoryHero>
           <ItemsCategory items={rawSpecial} categoryHeadline="raw items only form us" categoryDetails="raw khao sadd nao birokto koro char pash"></ItemsCategory>

           <CategoryHero heading="juice items for you"
           details=" juice khao cool thako cool koro char pash"></CategoryHero>
           <ItemsCategory items={juice} categoryHeadline="juice items " categoryDetails="juice khao chapar sobde birokto koro char pash"></ItemsCategory>

           <CategoryHero heading="fruits items for you"
           details=" fruits  khao dat er sobde birokto koro char pash"></CategoryHero>
           <ItemsCategory items={fruits} categoryHeadline="fruits items for you" categoryDetails="fruits khao chapar sobde birokto koro char pash"></ItemsCategory>

           <CategoryHero heading=" our dessert items for you"
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <ItemsCategory items={dessert} categoryHeadline="dessert items for you" categoryDetails="dessert khao aaaahaaaaaaaaaaa koro char pash"></ItemsCategory>

        </div>
    );
};

export default Items;