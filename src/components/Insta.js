import React from 'react';
import { instaData } from '../data';

function insta() {
  // destructure instaData
  const { img, href } = instaData;
  return (
    <section className="section flex flex-col bg-dark">
      <div className="container mx-auto">
        <p className="text-accent pb-10">Click to view Instagram</p>
        <div className='flex justify-center'>
          <a href={href} target="_blank" rel="noreferrer">
            <img src={img} alt="instagram link" className="lg:h-[600px]" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default insta;
