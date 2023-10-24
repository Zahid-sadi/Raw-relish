import { Helmet } from "react-helmet";
import useItems from "../../../Hooks/useItems";
import CategoryHero from "../../../Shared/CategoryHero/CategoryHero";
import video1 from '../../../assets/Cooking The Most Delicious Juicy Steak.mp4'
import video2 from '../../../assets/DESSERT MAKING B-ROLL VIDEO.mp4'
import video3 from '../../../assets/burger-making.mp4'
import video4 from '../../../assets/Food Showreel.mp4'
import MenuItemsCategory from "../MenuItemsCategory/MenuItemsCategory";

const MenuItems = () => {

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
            <Helmet><title>Raw Relish Menu Items </title></Helmet>

           <CategoryHero videoSource ={video3} heading="spicy items"
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={spicy} categoryHeadline="spicy" categoryDetails="spicy khao chapar sobde birokto koro char pash"></MenuItemsCategory>

           <CategoryHero videoSource ={video4} heading="raw items"
           details="  raw khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={rawSpecial} categoryHeadline="raw items only form us" categoryDetails="raw khao sadd nao birokto koro char pash"></MenuItemsCategory>

           <CategoryHero videoSource ={video1} heading="juice items "
           details=" juice khao cool thako cool koro char pash"></CategoryHero>
           <MenuItemsCategory items={juice} categoryHeadline="juice" categoryDetails="juice khao chapar sobde birokto koro char pash"></MenuItemsCategory>

           <CategoryHero videoSource ={video1} heading="fruits items"
           details=" fruits  khao dat er sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={fruits} categoryHeadline="fruits" categoryDetails="fruits khao chapar sobde birokto koro char pash"></MenuItemsCategory>

           <CategoryHero videoSource ={video2} heading="dessert items "
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={dessert} categoryHeadline="dessert" categoryDetails="dessert khao aaaahaaaaaaaaaaa koro char pash"></MenuItemsCategory>

        </div>
    );
};

export default MenuItems;