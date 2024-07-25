import React from 'react';

// import components
import TestiSlider from './TestiSlider';

const Testimonials = () => {

  return (
    <section id='testimonials' className='section bg-dark'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center pb-[36px]'>
          <p className='subtitle'>
            You can check out what some of my clients have to say about working with me!
          </p>
        </div>
        <TestiSlider />
      </div>
    </section>
  );
};

export default Testimonials;