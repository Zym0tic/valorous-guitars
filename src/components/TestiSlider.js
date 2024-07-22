import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';
import { Autoplay, Pagination } from 'swiper';
import { testimonials } from '../data';

const TestiSlider = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      modules={[Autoplay, Pagination]}
      className='mySwiper'
    >
      {testimonials.map((item, index) => {
        const { authorImg, authorText, authorName, authorPosition } = item;
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12'>
              <div className='w-auto h-auto'>
                <img className='lg:w-48' src={authorImg} alt='' />
              </div>
              <div className='max-w-lg text-accent2'>
                <p className='font-semibold italic'>{authorText}</p>
                <div className='mt-4'>
                  <p className='text-xl font-semibold'>{authorName}</p>
                  <p className='text-lg'>{authorPosition}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestiSlider;
