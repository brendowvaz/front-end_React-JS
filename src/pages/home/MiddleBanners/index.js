import React from 'react';

import './MiddleBanners.css';

import zelda from '../../../assets/img/zelda_banner.jpg';
import sekiro from '../../../assets/img/sekiro_banner.jpg';

const MiddleBanners = () => {
    return (
        <div className="banners">
            <div className="banners__banner" >
                <img className="banners__img" src={zelda} alt="Banner The Legend Of Zelda - Breath Of The Wild" />
                <div className="banners__box">
                    <p className="banners__title">The Legend Of Zelda - Breath Of The Wild</p>
                    <span className="banners__box--decoration"/>
                </div>
            </div>
            <div className="banners__banner" >
                <img className="banners__img" src={sekiro} alt="Banner Sekiro - Shadows Die Twice" />
                <div className="banners__box">
                    <p className="banners__title">Sekiro - Shadows Die Twice</p>
                    <span className="banners__box--decoration"/>
                </div>
            </div>
        </div>
    );
}

export default MiddleBanners;