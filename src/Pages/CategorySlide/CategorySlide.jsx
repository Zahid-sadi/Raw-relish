import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/food1.jpg";
import img2 from "../../assets/food2.jpg";
import img3 from "../../assets/food3.jpg";
import img4 from "../../assets/food4.jpeg";
// import img5 from "../../assets/food5.jpg";
import img6 from "../../assets/food6.jpeg";
import img7 from "../../assets/food7.jpg";
import img8 from "../../assets/food8.jpg";
import img9 from "../../assets/food9.jpeg";
import img10 from "../../assets/juice4.jpg";

const CategorySlide = () => {
 

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        
    };

    return ( 
        <div className=" h-[700px] w-4/5  mx-auto  p-20 text-white ">
            <Slider {...settings} className="h-[450px]">
                <div className="h-96 w-full">
                    <img className="h-full w-full object-cover" src={img1} alt="" />
                </div>
                <div className="h-96 w-full">
                    <img className="h-full w-full object-cover" src={img2} alt="" />
                </div>
                <div className="h-96 w-full">
                    <img className="h-full w-full object-cover" src={img3} alt="" />
                </div>
                <div className="h-96 w-full">
                    <img className="h-full w-full object-cover" src={img4} alt="" />
                </div>
            
                <div className="h-96 w-full">
                    <img className="h-full w-full object-cover" src={img6} alt="" />
                </div>
                <div className="h-96 w-full">
                    <img className="h-full w-full object-cover" src={img7} alt="" />
                </div>
                <div className="h-96 w-full">
                    <img className="h-full w-full object-cover" src={img8} alt="" />
                </div>
                <div className="h-96 w-full">
                    <img className="h-full w-full object-cover" src={img9} alt="" />
                </div>
                <div className="h-96 w-full">
                    <img className="h-full w-full object-cover" src={img10} alt="" />
                </div>
               
            </Slider>
        </div>
    );
};

export default CategorySlide;
