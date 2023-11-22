import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import imgbg from "../../../assets/restaurant-food.jpg";

const Review = () => {
    const [ reviews, setReviews ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/review")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
    return (
        <section className=" bg-slate- h-[600px] flex  p-12 border rounded-lg  border-yellow-900 ">
            <div className="w-1/2">
                <img className="h-full w-full" src={imgbg} alt="" />
            </div>
            <div className="w-1/2">
                <Swiper
                    direction={"vertical"}
                    mousewheel={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[ Autoplay, Pagination ]}
                    className="mySwiper  h-full   bg-transparent"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className=" h-full p-10  flex flex-col justify-center items-center rounded-lg border border-yellow-900 ">
                                <h4 className="text-3xl font-mono text-white p-5">{review.name}</h4>
                                <p className="text-white p-5">{review.details}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Review;
