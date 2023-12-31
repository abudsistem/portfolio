import Link from 'next/link';
import React from 'react';
import styles from '../../../page.module.css'
export default function Navbar() {
    return(
            <nav className={`${styles.navBar}`}>
                <ul className={`${styles.navContainer}`}>
                    <li className={`${styles.navItem}`}>
                        <Link href='/hero'>
                            Hero
                        </Link>
                    </li>
                    <li className={`${styles.navItem}`}>
                        <Link href='/about'>
                            ABOUT ME
                        </Link>
                    </li>
                    <li className={`${styles.navItem}`}>
                        <Link href='/resume'>
                            RESUME
                        </Link>
                    </li>
                    <li className={`${styles.navItem}`}>
                        <Link href='/testimonials'>
                            TESTIMONIALS
                        </Link>
                    </li>
                    <li className={`${styles.navItem}`}>
                        <Link href='/contact' >
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}