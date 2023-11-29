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
        <section className=" h-fit w-full flex flex-col lg:flex-row   p-12  m-0 ">
            <div className="w-1/2 h-[550px] mt-20 ">
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
          
             <div className="w-1/2 h-[550px] mt-20 ">
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
                                <FaQuoteLeft className="h-12 w-16 items-center text-yellow-300"></FaQuoteLeft>
                                

                                <h4 className="text-3xl font-bold text-white  p-5">{review.name} </h4>
                                <p className="text-white  p-10">{review.details}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
          
        </section>
    );
};

export default Review;
