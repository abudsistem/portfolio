import Link from 'next/link';
import React, {useState} from 'react';

import '../../../styles/globals.css';

export default function Navbar() {
    return(
            <div className='p-3 border-2 border-black m-8 rounded-lg bg-gray-300'>
                <ul className='grid grid-cols-7 '>
                    <li 
                        className='
                        border-2 mx-8 border-black p-2 rounded-lg text-center font-medium hover:bg-black hover:text-white' >
                        <Link href='/' >
                            icono
                        </Link>
                    </li>
                    <li className='border-2 mx-8 border-black p-2  rounded-lg text-center font-medium hover:bg-black hover:text-white'>
                        <Link href='/hero'>
                            HERO
                        </Link>
                    </li>
                    <li className='border-2 mx-8 border-black p-2  rounded-lg text-center font-medium hover:bg-black hover:text-white'>
                        <Link href='/about'>
                            ABOUT ME
                        </Link>
                    </li>
                    <li className='border-2 mx-8 border-black p-2  rounded-lg text-center font-medium hover:bg-black hover:text-white'>
                        <Link href='/portfolio'>
                            PORTFOLIO
                        </Link>
                    </li>
                    <li className='border-2 mx-8 border-black p-2  rounded-lg text-center font-medium hover:bg-black hover:text-white'>
                        <Link href='/resume'>
                            RESUME
                        </Link>
                    </li>
                    <li className='border-2 mx-8 border-black p-2  rounded-lg text-center font-medium hover:bg-black hover:text-white'>
                        <Link href='/testimonials'>
                            TESTIMONIALS
                        </Link>
                    </li>
                    <li className='border-2 mx-8 border-black p-2  rounded-lg  text-center font-medium hover:bg-black hover:text-white'>
                        <Link href='/contact' >
                                CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
    )
}