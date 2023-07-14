import Link from "next/link";
import Image from "next/image";
import Logo from "components/Logo";
import React, { useState } from "react";
import NavItem from "components/NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Author", href: "/about" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav flex justify-between flex-col md:flex-row mt-16 mb-16 md:mb-12 items-center`}>
        <div>
            <Logo />
        </div>
        
        <div className={`${navActive ? "active" : ""} nav__menu-bar flex flex-row space-x-4 max-md:mt-4`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;