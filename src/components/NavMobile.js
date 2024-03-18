import React from 'react';
//import Link
import { Link } from 'react-router-dom';
//import nav data
import { navData } from '../data';
//import components
import Socials from './Socials';

const NavMobile = (props) => {
  //destructure nav data
  const { items } = navData;
  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8 text-accent">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link
                onClick={() => props.closeNavMobile(true)}
                to={item.href}
                className="text-2xl font-primary cursor-pointer uppercase"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <li className="text-2xl font-primary cursor-pointer uppercase">
          <Link onClick={() => props.closeNavMobile(true)} to="webstore">
            webstore
          </Link>
        </li>
      </ul>
      <div className="text-2xl text-accent">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
