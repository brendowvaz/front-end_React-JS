import React from 'react';

import './Footer.css';

import logo from '../../assets/img/logo_footer.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__img">
                <img src={logo} alt="Logo N1" />
            </div>
            <p className="footer__text">Agência N1 - Todos os direitos reservados</p>
        </footer>
    );
}

export default Footer;