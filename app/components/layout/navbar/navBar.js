import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import navItem from "./navItem";

const NAV_LIST =[
    { text: "Home", href: "/" },
    { text: "HERO", href: "/hero" },
    { text: "ABOUT ME", href: "/about" },
    { text: "PORTFOLIO", href: "/portfolio" },
    { text: "RESUME", href: "/resume" },
    { text: "CONTACT", href: "/contact" },
];

const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
    <>
      <nav className={styles.navbar}>
        <Link href={"/"}>
          <a>
            <h1>CodeWithMarish</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} `}>
          {NAV_LIST.map((menu, idx) => (
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
    </>
  );
}

export default Navbar;