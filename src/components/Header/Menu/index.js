import React from 'react';

import './Menu.css';

const Menu = (props) => {
    return (
        <nav className={(!props.active) ? "menu--disable" : "menu"}>
            <ul>
                <li className="menu__title">Luta</li>
                <li className="menu__list">Mortal Kombat</li>
                <li className="menu__list">Smash Bros</li>
                <li className="menu__list">Killer Instict</li>
                <li className="menu__list">DBZ Kakarot</li>
            </ul>
            <ul>
                <li className="menu__title">Ação  / Aventura</li>
                <li className="menu__list">GTA V</li>
                <li className="menu__list">Tomb Raider</li>
                <li className="menu__list">HALO</li>
                <li className="menu__list">Call of Duty</li>
            </ul>
            <ul>
                <li className="menu__title">Corrida</li>
                <li className="menu__list">Need for Speed</li>
                <li className="menu__list">Forza Horizon</li>
            </ul>
        </nav>
    );
}

export default Menu;