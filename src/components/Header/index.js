import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import selectors from '../../selectors/counter';

import Menu from './Menu';

import './Header.css';

import { ReactComponent as IconMenu } from '../../assets/svgs/icon_hamburguer.svg';
import { ReactComponent as PaperPlane } from '../../assets/svgs/paper-plane.svg';
import { ReactComponent as Search } from '../../assets/svgs/search-solid.svg';
import { ReactComponent as ShoppingBag } from '../../assets/svgs/shopping-bag-solid.svg';
import Logo from '../../assets/img/logo.png';

const Header = () => {
    
    const counter = useSelector(selectors.getCounter)

    const [menuActive, setMenuActive] = useState(false);

    function toggleMenuClick() {
        menuActive ? setMenuActive(false) : setMenuActive(true);
    }

    function toggleMenuOver() {
        if(!menuActive) setMenuActive(true);
    }

    return (
        <header className="header header--align">
            <div className="header--align">
                <IconMenu
                    onClick={toggleMenuClick}
                    onMouseEnter={toggleMenuOver}
                    className="header__icon header__icon-menu"
                />
                <img className="header__logo" src={Logo} alt="Logo N1 RUSH" />
                <Menu active={menuActive} />
            </div>
            <nav>
                <ul className="header--align">
                    <li className="header__menu__item header--align">
                        <PaperPlane className="header__icon header__icon--paper-plane" />
                        <Link to={"/"} className="header__menu__link">CONTATO</Link>
                    </li>
                    <li className="header__menu__item header--align">
                        <Search className="header__icon header__icon--search" />
                        <Link to={"/"} className="header__menu__link">PESQUISAR</Link>
                    </li>
                    <li className="header__menu__item header--align">
                        <ShoppingBag className="header__icon header__icon--shopping-bag" />
                        <span className="header__shopping--span">{counter}</span>
                    </li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;