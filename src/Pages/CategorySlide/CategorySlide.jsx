import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard,  Navigation, Pagination } from 'swiper/modules';

import img1 from '../../assets/food1.jpg'
import img2 from '../../assets/food2.jpg'
import img3 from '../../assets/food3.jpg'
import img4 from '../../assets/food4.jpeg'
import img5 from '../../assets/food5.jpg'
import img6 from '../../assets/food6.jpeg'
import img7 from '../../assets/food7.jpg'
import img8 from '../../assets/food8.jpg'
import img9 from '../../assets/food9.jpeg'
import img10 from '../../assets/food10.jpg'

const CategorySlide = () => {
    return (
        <div className='p-5 '>
          <Swiper
          navigation={true}
          loop={true}
          pagination={true}
          // mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard]}
          
            slidesPerView={3}
            
            spaceBetween={30}
          
          
            className="mySwiper h-96   "
          >
            <SwiperSlide><img src={img1}  className='h-full w-full' alt="" />  <h3 className='text-slate-300 font-semibold  -mt-16 text-center lg:text-4xl md:text-lg sm:text-sm '>RAW SPECIAL</h3> </SwiperSlide>
            <SwiperSlide><img src={img2}  className='h-full w-full' alt="" />  <h3 className='text-slate-300 font-semibold  -mt-16 text-center lg:text-4xl md:text-lg sm:text-sm '>FRUTES WITH DESERT</h3> </SwiperSlide>
            <SwiperSlide><img src={img3}  className='h-full w-full' alt="" />  <h3 className='text-slate-300 font-semibold  -mt-16 text-center lg:text-4xl md:text-lg sm:text-sm '>RAW FRUITS</h3> </SwiperSlide>
            <SwiperSlide><img src={img4}  className='h-full w-full' alt="" />  <h3 className='text-slate-300 font-semibold  -mt-16 text-center lg:text-4xl md:text-lg sm:text-sm '>WITH RAW HONEY..</h3> </SwiperSlide>
            <SwiperSlide><img src={img5}  className='h-full w-full' alt="" />  <h3 className='text-slate-300 font-semibold  -mt-16 text-center lg:text-4xl md:text-lg sm:text-sm '>RAW NATURAL</h3> </SwiperSlide>
            <SwiperSlide><img src={img6}  className='h-full w-full' alt="" />  <h3 className='text-slate-300 font-semibold  -mt-16 text-center lg:text-4xl md:text-lg sm:text-sm '>NATURAL MIX F.F</h3> </SwiperSlide>
            <SwiperSlide><img src={img7}  className='h-full w-full' alt="" />  <h3 className='text-slate-300 font-semibold  -mt-16 text-center lg:text-4xl md:text-lg sm:text-sm '>RAW SAFE SPICY </h3> </SwiperSlide>
            <SwiperSlide><img src={img8}  className='h-full w-full' alt="" />  <h3 className='text-slate-300 font-semibold  -mt-16 text-center lg:text-4xl md:text-lg sm:text-sm '>RAW JUICE</h3> </SwiperSlide>
            <SwiperSlide><img src={img9}  className='h-full w-full' alt="" />  <h3 className='text-slate-300 font-semibold  -mt-16 text-center lg:text-4xl md:text-lg sm:text-sm '>RAW MIX TRENDY</h3> </SwiperSlide>
            <SwiperSlide><img src={img10} className='h-full w-full'  alt="" /> <h3 className='text-slate-300 font-semibold  -mt-16 text-center lg:text-4xl md:text-lg sm:text-sm '>RAW PICKLE MIX</h3>  </SwiperSlide>
          </Swiper>
        </div>
      );
};

export default CategorySlide;