import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";


const Review = () => {
    const [ reviews, setReviews ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/review")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);



    return (
        <section className="flex flex-col lg:flex-row p-4 sm:p-8 md:p-12 lg:p-16 ">
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[550px] mt-10 lg:mt-24">
                <Swiper
                    direction={"horizontal"}
                    mousewheel={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                  
                    modules={[ Autoplay, Pagination ]}
                    className="mySwiper  h-full   "
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                          <img  style={{ borderRadius: "400px 0px 00px 40px" }} className="h-full w-full p-4 bg-white " src={review.image} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
          
             <div className="w-full lg:w-1/2 h-[400px] lg:h-[550px] mt-8 lg:mt-24">
                <Swiper
                    direction={"vertical"}
                    mousewheel={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    // loop={true}

                    pagination={{

                        clickable: true,
                    }}
                    modules={[ Autoplay, Pagination ]}
                    className="mySwiper  h-full   bg-transparent"
                >
                    {reviews.map((review) => (
                        <SwiperSlide  key={review._id}>
                            <div style={{ borderRadius: "0px 40px 40px 0px" }} className="h-full p-10 bg-transparent border  flex flex-col justify-center items-center  ">
                                <FaQuoteLeft className="h-12 w-16 mb-2 items-center text-yellow-300"></FaQuoteLeft>
                                

                                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6  text-white  p-5">{review.name} </h4>
                                
                                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl">{review.details}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
          
        </section>
    );
};

export default Review;
