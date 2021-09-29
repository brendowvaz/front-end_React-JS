import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import actions from '../../actions/counter';

import './Card.css';
import mario from '../../assets/img/mario-small.png';

const Card = (props) => {

    const [buyed, setBuyed] = useState(false);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(actions.increment());

        setBuyed(true);
    }


    return (
        <div className="card" key={props.id}>
            <div>
                <img src={window.location.origin + '/img/' + props.img} alt="" />
            </div>
            <div className="card__props">
                <h1 className="card__title">{props.title}</h1>
                <p className="card__price">{props.price}</p>
            </div>

            <button
                onClick={handleIncrement}
                className={buyed ? "card__button card__button--buyed" : "card__button"}
            >
                {buyed ? "COMPRADO!" : "COMPRAR"}
            </button>
            <img
                className={buyed ? "card__button__img" : "card__button__img--disable"}
                src={mario}
                alt=""
            />
        </div>
    );
}

export default Card;