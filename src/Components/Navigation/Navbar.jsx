import React, { useState } from "react";

import { Link } from "react-router-dom";

import './Navbar.css'

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <>
            <div className="navigation">
                <button className="burger-btn"
                    onClick={() => setMenuActive(!menuActive)}>
                    <div class={menuActive ? 'icon-two active-two' : 'icon-two'}>
                        <div class="hamburger hamburger-two"></div>
                    </div>
                </button>
                <div className="pageTag">
                    <div className="Text">
                        Текщая страница
                    </div>
                </div>
            </div>
            <div className={menuActive ? 'menu active' : 'menu'}>
                <ul className="list">
                    <Link><li className="element">Главная</li></Link>
                    <Link><li className="element">Главная</li></Link>
                    <Link><li className="element">Главная</li></Link>
                    <Link><li className="element">Главная</li></Link>
                </ul>
            </div>
        </>
    )
}