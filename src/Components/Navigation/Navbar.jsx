import React, { useState } from "react";

import { Link } from "react-router-dom";

import './Navbar.css'

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <div className="navigation">
                <button class={menuActive ? 'burger-btn active' : 'burger-btn'}
                    onClick={() => setMenuActive(!menuActive)}>
                    <span ></span>
                </button>
            </div>
            <div className={menuActive ? 'menu active' : 'menu'}>
                <ul className="list">
                    <Link onClick={() => setMenuActive(!menuActive)} to={"/"}><li className="element">Главная</li></Link>
                    <Link onClick={() => setMenuActive(!menuActive)} to={"/Education"}><li className="element">Моё образование</li></Link>
                    <Link onClick={() => setMenuActive(!menuActive)} to={"/AboutMe"}><li className="element">Мои проекты</li></Link>
                    <Link onClick={() => setMenuActive(!menuActive)} to={"/Contacts"}><li className="element">Контакты</li></Link>
                </ul>
            </div>
        </>
    )
}