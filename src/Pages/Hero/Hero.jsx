import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/bl-spooon.jpg";
import img2 from "../../assets/juice4.jpg";
import img3 from "../../assets/fruits1.jpg";
import img4 from "../../assets/juice1.jpg";
import img5 from "../../assets/food1.jpg";

const Hero = () => {
    return (
        <div className="w-full">
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
                <div className="hero h-[900px] w-full m-0  ">
                        <img
                            className="h-screen w-screen "
                            src={img1}
                            alt=""
                        />

                        <div className="  grid md:grid-cols-1 lg:grid-cols-2  ">
                            <div>
                                <h2 className="text-7xl text-center p-10 text-white  font-extrabold  italic -mt-44  font-serif">
                                    Safe Food
                                </h2>
                            </div>
                         
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero h-[900px] w-full m-0  ">
                        <img
                            className="h-screen w-screen "
                            src={img2}
                            alt=""
                        />

                        <div className="  grid md:grid-cols-1 lg:grid-cols-2  ">
                            <div>
                                <h2 className="text-7xl text-center p-10 text-white  font-extrabold  italic -mt-44  font-serif">
                                    Instant Making
                                </h2>
                            </div>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero h-[900px] w-full m-0  ">
                        <img
                            className="h-screen w-screen "
                            src={img3}
                            alt=""
                        />

                        <div className="  grid md:grid-cols-1 lg:grid-cols-2  ">
                            <div>
                                <h2 className="text-7xl text-center p-10 text-white  font-extrabold  italic -mt-44  font-serif">
                                    Artificial color free 
                                </h2>
                            </div>
                           
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero h-[900px] w-full m-0  ">
                        <img
                            className="h-screen w-screen "
                            src={img4}
                            alt=""
                        />

                        <div className="  grid md:grid-cols-1 lg:grid-cols-2  ">
                            <div>
                                <h2 className="text-7xl text-center p-10 text-white  font-extrabold  italic -mt-44  font-serif">
                                    Organic Food
                                </h2>
                            </div>
                           
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero h-[900px] w-full m-0  ">
                        <img
                            className="h-screen w-screen "
                            src={img5}
                            alt=""
                        />

                        <div className="  grid md:grid-cols-1 lg:grid-cols-2  ">
                            <div>
                                <h2 className="text-7xl text-center p-10 text-white  font-extrabold  italic -mt-44  font-serif">
                                    Traditional Food
                                </h2>
                            </div>
                           
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Hero;
