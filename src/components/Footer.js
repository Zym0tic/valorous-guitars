import React from 'react';
// import footer data
import { footerData } from '../data';

const Footer = () => {
  // destructure footer data
  const { links } = footerData;
  return (
    <footer className='bg-header section'>
      <div className='container mx-auto'>
          {/* links */}
          <div
            className='flex-1 flex flex-col xl:items-center'
          >
            <div>
              <ul className='flex flex-col gap-y-4 text-accent font-primary uppercase'>
                {links.items.map((item, index) => {
                  // destructure item
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <a className='hover:border-b-2 hover:border-dark transition duration-300 cursor-pointer flex justify-center' href={href}>
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;