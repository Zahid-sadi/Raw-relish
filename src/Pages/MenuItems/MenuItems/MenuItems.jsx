import { Helmet } from "react-helmet";
import useItems from "../../../Hooks/useItems";
import CategoryHero from "../../../Shared/CategoryHero/CategoryHero";
import video1 from '../../../assets/Cooking The Most Delicious Juicy Steak.mp4'
import video2 from '../../../assets/DESSERT MAKING B-ROLL VIDEO.mp4'
import video3 from '../../../assets/burger-making.mp4'
import video4 from '../../../assets/Food Showreel.mp4'
import MenuItemsCategory from "../MenuItemsCategory/MenuItemsCategory";
import img1 from '../../../assets/smoke-cook.jpg'
import img2 from '../../../assets/smoke-cook.jpg'
import img3 from '../../../assets/smoke-cook.jpg'
import img4 from '../../../assets/smoke-cook.jpg'
import img5 from '../../../assets/smoke-cook.jpg'
import img6 from '../../../assets/smoke-cook.jpg'
import img7 from '../../../assets/smoke-cook.jpg'
import img8 from '../../../assets/smoke-cook.jpg'
import img9 from '../../../assets/smoke-cook.jpg'
import img10 from '../../../assets/food1.jpg'


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
        <div className="">
            <Helmet><title>Raw Relish Menu Items </title></Helmet>

            <CategoryHero videoSource ={video2} heading="Today's offer "
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
            <MenuItemsCategory items={offered} bgPhoto={img3}  categoryHeadline="offered" categoryDetails=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores temporibus nostrum pariatur nihil quaerat veritatis reprehenderit voluptates tempore sit aut, quam consectetur, esse, repudiandae fugit! Soluta expedita delectus nisi, nemo at magnam consectetur dignissimos obcaecati! Autem ratione excepturi officia.h"></MenuItemsCategory>
            
           <CategoryHero videoSource ={video4} heading="How do we prepare raw items"
           details="  raw khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={rawSpecial} bgPhoto={img4} categoryHeadline="rawSpecial" categoryDetails="raw khao sadd nao birokto koro char pash  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores temporibus nostrum pariatur nihil quaerat veritatis reprehenderit voluptates tempore sit aut, quam consectetur, esse, repudiandae fugit! Soluta expedita delectus nisi, nemo at magnam consectetur dignissimos obcaecati! Autem ratione excepturi officia."></MenuItemsCategory>

           <CategoryHero videoSource ={video3} heading="How do we make something special with honey"
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={honey} bgPhoto={img1} categoryHeadline="honey" categoryDetails="honey khao chapar sobde birokto koro char pash  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores temporibus nostrum pariatur nihil quaerat veritatis reprehenderit voluptates tempore sit aut, quam consectetur, esse, repudiandae fugit! Soluta expedita delectus nisi, nemo at magnam consectetur dignissimos obcaecati! Autem ratione excepturi officia."></MenuItemsCategory>


           <CategoryHero videoSource ={video1} heading="how do we make fruits items "
           details=" juice khao cool thako cool koro char pash"></CategoryHero>
           <MenuItemsCategory items={fruits} bgPhoto={img2} categoryHeadline="fruits" categoryDetails="juice khao chapar sobde birokto koro char pash  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores temporibus nostrum pariatur nihil quaerat veritatis reprehenderit voluptates tempore sit aut, quam consectetur, esse, repudiandae fugit! Soluta expedita delectus nisi, nemo at magnam consectetur dignissimos obcaecati! Autem ratione excepturi officia."></MenuItemsCategory>

           <CategoryHero videoSource ={video1} heading="How do we make juice items"
           details=" fruits  khao dat er sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={juice} bgPhoto={img5} categoryHeadline="juice" categoryDetails="juice khao chapar sobde birokto koro char pash  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores temporibus nostrum pariatur nihil quaerat veritatis reprehenderit voluptates tempore sit aut, quam consectetur, esse, repudiandae fugit! Soluta expedita delectus nisi, nemo at magnam consectetur dignissimos obcaecati! Autem ratione excepturi officia."></MenuItemsCategory>

           <CategoryHero videoSource ={video2} heading="How do we make pickles"
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={pickles} bgPhoto={img6} categoryHeadline="pickles" categoryDetails="dessert khao ar koro char pash  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores temporibus nostrum pariatur nihil quaerat veritatis reprehenderit voluptates tempore sit aut, quam consectetur, esse, repudiandae fugit! Soluta expedita delectus nisi, nemo at magnam consectetur dignissimos obcaecati! Autem ratione excepturi officia."></MenuItemsCategory>

           <CategoryHero videoSource ={video2} heading="How do we make special bread"
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={foodbread} bgPhoto={img7} categoryHeadline="foodbread" categoryDetails="dessert khao  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores temporibus nostrum pariatur nihil quaerat veritatis reprehenderit voluptates tempore sit aut, quam consectetur, esse, repudiandae fugit! Soluta expedita delectus nisi, nemo at magnam consectetur dignissimos obcaecati! Autem ratione excepturi officia. koro char pash"></MenuItemsCategory>

           <CategoryHero videoSource ={video2} heading="How do we make dessert "
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={dessert} bgPhoto={img8} categoryHeadline="dessert" categoryDetails="dessert khao  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores temporibus nostrum pariatur nihil quaerat veritatis reprehenderit voluptates tempore sit aut, quam consectetur, esse, repudiandae fugit! Soluta expedita delectus nisi, nemo at magnam consectetur dignissimos obcaecati! Autem ratione excepturi officia. koro char pash"></MenuItemsCategory>

           <CategoryHero videoSource ={video2} heading="How do we make grilled items"
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={grilled} bgPhoto={img9} categoryHeadline="grilled" categoryDetails="dessert khao  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores temporibus nostrum pariatur nihil quaerat veritatis reprehenderit voluptates tempore sit aut, quam consectetur, esse, repudiandae fugit! Soluta expedita delectus nisi, nemo at magnam consectetur dignissimos obcaecati! Autem ratione excepturi officia. koro char pash"></MenuItemsCategory>

           <CategoryHero videoSource ={video2} heading="How do we make spicy "
           details=" spicy khao chapar sobde birokto koro char pash"></CategoryHero>
           <MenuItemsCategory items={spicy} bgPhoto={img10} categoryHeadline="spicy" categoryDetails="dessert khao  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores temporibus nostrum pariatur nihil quaerat veritatis reprehenderit voluptates tempore sit aut, quam consectetur, esse, repudiandae fugit! Soluta expedita delectus nisi, nemo at magnam consectetur dignissimos obcaecati! Autem ratione excepturi officia. koro char pash lorem20
           "></MenuItemsCategory>

        </div>
    );
};

export default MenuItems;