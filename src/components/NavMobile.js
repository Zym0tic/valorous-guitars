import React, { useEffect } from 'react';
// import Link
import { Link } from 'react-router-dom';
// import nav data
import { navData } from '../data';
// import components
import Socials from './Socials';

const NavMobile = (props) => {
  // destructure nav data
  const { items } = navData;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1025px)');
    
    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        props.closeNavMobile(true);
      }
    };

    // Add the listener
    mediaQuery.addListener(handleMediaQueryChange);

    // Check the initial state
    if (mediaQuery.matches) {
      props.closeNavMobile(true);
    }

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, [props]);

  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center items-center gap-y-4 py-6 mb-8 text-accent2">
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
      <div className="text-2xl text-accent2">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
