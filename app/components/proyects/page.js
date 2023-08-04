'use client';
import React, { useEffect, useState} from 'react';

export default function ListProyects(){
    const [proyects, setProyects] = useState([]);
    
    useEffect(() => {
        setProyects([
          {
            name: 'proyect 1',
            logo:' logo 1',
            link: 'link 1',
            testimonial: 'testimonial 1 ',
            chief: "jefe 1",
        },
          {
            name: 'proyect 2',
            logo:' logo 2',
            link: 'link 2',
            testimonial: 'testimonial 2 ',
            chief: "jefe 2",
          },
          {
            name: 'proyect 3',
            logo:' logo 3',
            link: 'link 3',
            testimonial: 'testimonial 3 ',
            chief: "jefe 3",
          },
          {
            name: 'proyect 4',
            logo:' logo 4',
            link: 'link 4',
            testimonial: 'testimonial 4 ',
            chief: "jefe 4",
          },
        ]);
      }, []);
    
    return (
        <>
            {
                proyects.map((proyect,index)=>(
                    <li 
                        key={index}
                    >
                        <strong>{proyect.name}</strong>
                        <p>{proyect.logo}</p>
                        <p>{proyect.link}</p>
                        <p>{proyect.testimonial}</p>
                        <p>{proyect.chief}</p>
                    </li>
                ))
            }
        </>
    )
}