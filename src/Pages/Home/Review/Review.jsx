import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, } from "swiper/modules";
import imgbg from '../../../assets/restaurant-food.jpg'





const Review = () => {
    const [reviews , setReviews] = useState([])

    useEffect(()=>{
        fetch("review.json")
        .then(res => res.json())
        .then(data => setReviews(data))

    },[])
    return (
        <section className="flex  h-96 w-full mx-auto bg-[url('/img/hero-pattern.svg')] ">
          <div className="w-1/2 h-96 bg-orange-700 mx-auto -mt-10">
            <h3 className="text-white text-4xl font-bold text-center uppercase my-10 p-10  ">the peoples are giving feedback to us to cook and our food tradition </h3>

          </div>
          <Swiper
            direction={'vertical'}
            mousewheel={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination,]}
            className="mySwiper -mb-10 h-96 w-1/2 mx-auto p-10 bg-slate-600"
          >
            {
                reviews.map(review => <SwiperSlide key ={review._id}
                >
                    <div className=" p-10 m-5 flex flex-col justify-center items-center ">
                        <h4 className="text-2xl font-mono text-white p-2 m-2">{review.name}</h4>
                        <p className="text-white">{review.details}</p>
                    </div>
                </SwiperSlide>)
            }
           
          </Swiper>
        </section>
      );
};

export default Review;