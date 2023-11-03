import { Helmet } from "react-helmet";
import useItems from "../../../Hooks/useItems";
import CategoryHero from "../../../Shared/CategoryHero/CategoryHero";
import video1 from '../../../assets/Cooking The Most Delicious Juicy Steak.mp4'
import video2 from '../../../assets/DESSERT MAKING B-ROLL VIDEO.mp4'
import video3 from '../../../assets/burger-making.mp4'
import video4 from '../../../assets/Food Showreel.mp4'
import MenuItemsCategory from "../MenuItemsCategory/MenuItemsCategory";
import img1 from '../../../assets/food1.jpg'
import img2 from '../../../assets/food8.jpg'
import img3 from '../../../assets/food4.jpeg'
import img4 from '../../../assets/fruits1.jpg'
import img5 from '../../../assets/juice1.jpg'
import img6 from '../../../assets/image3.jpg'
import img7 from '../../../assets/image3.jpg'
import img8 from '../../../assets/image3.jpg'
import img9 from '../../../assets/image3.jpg'
import img10 from '../../../assets/image3.jpg'

const MenuItems = () => {

    const [menu] = useItems([  ]);
    
    const spicy = menu.filter(item => item.category === "spicy" )
    const rawSpecial = menu.filter(item => item.category === "raw-special" )
    const honey = menu.filter(item => item.category === "honey" )
    const fruits = menu.filter(item => item.category === "fruits" )
    const juice = menu.filter(item => item.category === "juice" )
    const pickles = menu.filter(item => item.category === "pickles" )
    const foodbread = menu.filter(item => item.category === "foodbread" )
    const dessert = menu.filter(item => item.category === "dessert" )
    const grilled = menu.filter(item => item.category === "grilled" )
    const offered = menu.filter(item => item.category === "offered" )

   
    return (
        <div className="bg-slate-700">
            <Helmet><title>Raw Relish Menu Items </title></Helmet>

            <CategoryHero videoSource ={video2} heading="dessert items "
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
            <MenuItemsCategory items={offered} bgPhoto={img10}  categoryHeadline="offered" categoryDetails="offere eeeeeeeee khao aaaahaaaaaaaaaaa koro char pash"></MenuItemsCategory>
            
           <CategoryHero videoSource ={video4} heading="raw items"
           details="  raw khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={rawSpecial} bgPhoto={img10} categoryHeadline="rawSpecial" categoryDetails="raw khao sadd nao birokto koro char pash"></MenuItemsCategory>

           <CategoryHero videoSource ={video3} heading="Spicy"
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={honey} bgPhoto={img10} categoryHeadline="honey" categoryDetails="honey khao chapar sobde birokto koro char pash"></MenuItemsCategory>


           <CategoryHero videoSource ={video1} heading="juice items "
           details=" juice khao cool thako cool koro char pash"></CategoryHero>
           <MenuItemsCategory items={fruits} bgPhoto={img4} categoryHeadline="fruits" categoryDetails="juice khao chapar sobde birokto koro char pash"></MenuItemsCategory>

           <CategoryHero videoSource ={video1} heading="fruits items"
           details=" fruits  khao dat er sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={juice} bgPhoto={img5} categoryHeadline="juice" categoryDetails="fruits khao chapar sobde birokto koro char pash"></MenuItemsCategory>

           <CategoryHero videoSource ={video2} heading="dessert items "
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={pickles} bgPhoto={img10} categoryHeadline="pickles" categoryDetails="dessert khao aaaahaaaaaaaaaaa koro char pash"></MenuItemsCategory>

           <CategoryHero videoSource ={video2} heading="dessert items "
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={foodbread} bgPhoto={img10} categoryHeadline="foodbread" categoryDetails="dessert khao aaaahaaaaaaaaaaa koro char pash"></MenuItemsCategory>

           <CategoryHero videoSource ={video2} heading="dessert items "
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={grilled} bgPhoto={img10} categoryHeadline="grilled" categoryDetails="dessert khao aaaahaaaaaaaaaaa koro char pash"></MenuItemsCategory>

           <CategoryHero videoSource ={video2} heading="dessert items "
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={spicy} bgPhoto={img10} categoryHeadline="spicy" categoryDetails="dessert khao aaaahaaaaaaaaaaa koro char pash lorem20
           "></MenuItemsCategory>

        </div>
    );
};

export default MenuItems;