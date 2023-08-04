import styles from '../../../page.module.css'
import React from "react";
import NavItem from "./navItem";

const MENU_LIST =[
    { text: "Home", href: "/" },
    { text: "HERO", href: "/hero" },
    { text: "ABOUT ME", href: "/about" },
    { text: "PORTFOLIO", href: "/portfolio" },
    { text: "RESUME", href: "/resume" },
    { text: "CONTACT", href: "/contact" },
];

const Navbar = () => {
    return (
      <>
        <nav className={`${styles.navbar}`}>
          <NavItem  className={`${styles.navItem}`}/>
        </nav>
      </>
    );
  };

export default Navbar;