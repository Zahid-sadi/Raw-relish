import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/bl-spooon.jpg";
import img2 from "../../assets/food1.jpg";
import img3 from "../../assets/fruits1.jpg";
import img4 from "../../assets/food3.jpg";
import img5 from "../../assets/food6.jpeg";

const Hero = () => {
    return (
        <div className="h-[1000px] w-full">
            <Swiper
                // spaceBetween={30}
                effect={"fade"}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                    
                }}
                modules={[ EffectFade, Navigation, Pagination, Autoplay ]}
                className="mySwiper w-full"
            >
                <SwiperSlide>
                    <div className="hero h-[1000px] w-full   ">
                        <img className="h-full w-full overflow-hidden" src={img1} alt="" />

                        <h3 className="text-5xl font-bold  text-white border rounded-lg p-20 bg-transparent">Safe food</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[1000px] w-full   ">
                        <img className="h-full w-full overflow-hidden" src={img2} alt="" />

                        <h3 className="text-5xl font-bold  text-white border rounded-lg  p-20 bg-transparent  ">raw ingredients</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[1000px] w-full   ">
                        <img className="h-full w-full overflow-hidden" src={img3} alt="" />

                        <h3 className="text-5xl font-bold  text-white border rounded-lg  p-20 bg-transparent  ">Fre From Formalin</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[1000px] w-full   ">
                        <img className="h-full w-full overflow-hidden" src={img4} alt="" />

                        <h3 className="text-5xl font-bold  text-white border rounded-lg  p-20 bg-transparent  ">Reasonable price</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[1000px] w-full   ">
                        <img className="h-full w-full overflow-hidden" src={img5} alt="" />

                        <h3 className="text-5xl font-bold  text-white border rounded-lg  p-20 bg-transparent  ">Healthy food</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Hero;
