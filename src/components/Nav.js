import React from "react";
//import link scroll
import { Link } from "react-router-dom";
//import nav data
import { navData } from "../data";

const Nav = () => {
  //destructure nav data
  const { items } = navData;
  return (
    <nav>
      <ul className="flex gap-x-[58px] text-accent">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                className="link hover:border-b-2 hover:border-dark transition duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <li className="link hover:border-b-2 hover:border-dark transition duration-300 cursor-pointer">
          <Link to="/main/webstore">webstore</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;