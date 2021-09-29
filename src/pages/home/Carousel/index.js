import React, { Component } from 'react';
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import './Carousel.css';

import { ReactComponent as SlideBack } from '../../../assets/svgs/angle-left-solid.svg';
import { ReactComponent as SlideNext } from '../../../assets/svgs/angle-right-solid.svg';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    state = {
        slideIndex: 0,
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (current, next) => this.setState({ slideIndex: next })
        }

        const slides = [
            {
                title: "Mortal Kombat",
                img: "principal_banner_desktop.jpg",
                mobileImg: "principal_banner_mobile.jpg",
                price: "299",
                description: "Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta."
            },
            {
                title: "Red Dead Redemption 2",
                img: "principal_banner_desktop_02.jpg",
                mobileImg: "principal_banner_mobile_02.jpg",
                price: "149",
                description: "Vencedor de mais de 175 prêmios de Jogo do Ano e avaliado com mais de 250 notas máximas, Red Dead Redemption 2 é uma história épica de honra e lealdade no alvorecer dos tempos modernos."
            }
        ];

        return (
            <>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    
                    {slides.map((slide, i) => (

                        <div className="slide__banner" >

                            <img
                                className="slide__desktop"
                                src={window.location.origin + '/img/' + slide.img}
                                alt={slide.title} />
                            <img
                                className="slide__mobile"
                                src={window.location.origin + '/img/' + slide.mobileImg}
                                alt={slide.title} />

                            <section key={i} className="slide__section">
                                <h1 className="slide__title">{slide.title}</h1>
                                <h2 className="slide__price">{"R$ " + slide.price}</h2>
                                <span className="slide__price--span">,99</span>
                                <p className="slide__description">{slide.description}</p>
                            </section>
                        </div>
                    ))}

                </Slider>

                <div className="slide_navigation">
                    <div className="slide__marker">
                        <p className="slide__marker--text">
                            {slides[this.state.slideIndex].title}
                        </p>
                    </div>
                    <span className="slide_index">
                        {this.state.slideIndex + 1 + " / " + slides.length}
                    </span>
                    <div>
                        <button className="slide__button" onClick={this.previous}>
                            <SlideBack className="slide__button--svg" />
                        </button>
                        <button className="slide__button" onClick={this.next}>
                            <SlideNext className="slide__button--svg" />
                        </button>

                    </div>
                </div>
            </>
        );
    }
}