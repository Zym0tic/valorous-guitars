import React from 'react'
import { tabsData } from '../data';

function Tabs() {
//destructure tabs data
const {sub, items} = tabsData;

  return (
    <section
      className="section lg:pt-[200px] bg-dark pt-[160px] pb-[70px] lg:py-16 lg:flex"
      name="tabs"
    >
      <div
        className="container mx-auto text-white"
      >
        {/* title */}
        <p className='pb-10 text-accent flex lg:justify-center'>{sub}</p>
        {/* links */}
        <div>
          <ul>
            {items.map((item, index) => {
              //destructure item
              const { href, subtitle } = item;
              return (
                <div
                  key={index}
                  className="mb-6 font-bold flex lg:justify-center"
                >
                  {/* link */}
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="link hover:border-b-2 hover:border-accent transition duration-300 cursor-pointer shadow hover:text-accent"
                  >
                    {subtitle}
                  </a>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Tabs