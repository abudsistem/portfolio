'use client';
import React,{  useState } from 'react';

export default function Contact() {
    const [name, setName ] = useState('your name ;)')

    const changeName= (e) => {
        const value = e.target.value;
        setName(value)
    }

    const saveClick = () => console.log("save :", name);

    return(
        <>
            <h2>hi, there</h2>
            
            <p><strong>work with me!</strong></p>

            <div>
            <label> name: </label>
            <input
            id='name'
            name='name'
            value={name}
            onChange={changeName}
            ></input>
            <button onClick={saveClick}> save </button>
            </div>
        </>
    )
}