import React from 'react';
//import social data
import { socialData } from '../data';

const Socials = () => {
  return ( 
  <ul className='flex justify-center items-center gap-x-[30px] pb-20 text-accent lg:flex-col lg:gap-y-[30px] text-4xl lg:text-8xl'>
    {socialData.map((item, index) => {
      return (
      <li key={index}>
        <a href={item.href} target='_blank' rel='noreferrer noopener'>{item.icon}</a>
      </li>
      );
    })}
  </ul> 
  );
};

export default Socials;