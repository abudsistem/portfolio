import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return(
            <div >
                <ul >
                    <li className={`${styles.navItem}`}>
                        <Link href='/' >
                            icono
                        </Link>
                    </li>
                    <li >
                        <Link href='/hero'>
                            HERO
                        </Link>
                    </li>
                    <li >
                        <Link href='/about'>
                            ABOUT ME
                        </Link>
                    </li>
                    <li >
                        <Link href='/portfolio'>
                            PORTFOLIO
                        </Link>
                    </li>
                    <li >
                        <Link href='/resume'>
                            RESUME
                        </Link>
                    </li>
                    <li >
                        <Link href='/testimonials'>
                            TESTIMONIALS
                        </Link>
                    </li>
                    <li >
                        <Link href='/contact' >
                                CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
    )
}