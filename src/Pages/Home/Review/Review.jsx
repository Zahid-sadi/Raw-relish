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
        <section className="flex  h-96  mx-auto"  style={{backgroundImage: 'url(../../../assets/restaurant-food.jpg)'}}>
         
          <Swiper
            direction={'vertical'}
            mousewheel={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination,]}
            className="mySwiper   mx-auto p-10 bg-slate-600"
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