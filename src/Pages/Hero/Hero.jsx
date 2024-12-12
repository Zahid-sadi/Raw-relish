import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/bl-spooon.jpg";
import img2 from "../../assets/food1.jpg";
import img4 from "../../assets/food3.jpg";
import img5 from "../../assets/food6.jpeg";
import img3 from "../../assets/fruits1.jpg";

import img from "../../assets/about.jpg";

const Hero = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row  lg:h-[800px] ">
            <div className=" w-full lg:w-1/2 bg-black relative">
                <div className="text-yellow-500 text-right justify-start  absolute top-1/3 w-2/3 space-y-5 p-10 z-10 border-2 border-l-0 border-yellow-500 bg-gradient-to-l from-lime-950 to-blue-950  ">
                    <h1 className="text-md sm:text-lg md:text-xl lg:text3xl text-yellow-600 font-extrabold">
                        Welcome in our destination to feed yourself
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quis labore laborum repellat
                        vitae at pariatur earum? Tenetur, praesentium a.
                    </p>
                </div>

                <div className="w-full h-full ">
                    <img className="h-[800px]   opacity-70 w-full " src={img} alt="Restaurant Image" />
                </div>
            </div>
            <div className="h-[800px] w-full lg:w-1/2">
                <Swiper
                    // spaceBetween={30}
                    effect={"fade"}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[ EffectFade, Autoplay ]}
                    className="mySwiper object-cover h-full  lg:h-[800px]"
                >
                    <SwiperSlide>
                        <div className="hero h-full w-full   ">
                            <img className="h-full w-full overflow-hidden" src={img1} alt="" />

                            <h3 className="text-5xl font-bold  text-white border border-yellow-500 rounded-lg  p-20 bg-transparent shadow-sm shadow-yellow-500">
                                Safe food
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero h-full object-cover w-full   ">
                            <img className="h-full w-full overflow-hidden" src={img2} alt="" />
                            <h3 className="text-5xl font-bold  text-white border border-yellow-500 rounded-lg  p-20 bg-transparent shadow-sm shadow-yellow-500">
                                Healthy food
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero h-full object-cover w-full   ">
                            <img className="h-full w-full overflow-hidden" src={img3} alt="" />
                            <h3 className="text-5xl font-bold  text-white border border-yellow-500 rounded-lg  p-20 bg-transparent shadow-sm shadow-yellow-500">
                                Reasonable price
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero h-full object-cover w-full   ">
                            <img className="h-full w-full overflow-hidden" src={img4} alt="" />
                            <h3 className="text-5xl font-bold  text-white border border-yellow-500 rounded-lg  p-20 bg-transparent shadow-sm shadow-yellow-500">
                                Free From Formalin
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero h-full object-cover w-full   ">
                            <img className="h-full w-full overflow-hidden" src={img5} alt="" />
                            <h3 className="text-5xl font-bold  text-white border border-yellow-500 rounded-lg  p-20 bg-transparent shadow-sm shadow-yellow-500">
                                raw ingredients
                            </h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
export default Hero;
