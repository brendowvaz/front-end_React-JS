import React, { Component } from 'react';

import './BestSales.css';

import Card from '../../../components/Card';

import { ReactComponent as BestSalesIcon } from '../../../assets/svgs/best-sales.svg';

class BestSales extends Component {

    state = {
        products: [
            {
                title: "Outriders",
                img: "product-outriders.png",
                price: "200,00",
                buyed: false,
            },
            {
                title: "Cyberpunk 2077",
                img: "product-cyberpunk2077.png",
                price: "199,99",
                buyed: false,
            },
            {
                title: "Donkey Kong Country Tropical Freeze",
                img: "product-donkey-kong-country-tropical-freeze.png",
                price: "299,99",
                buyed: false,
            }
        ]
    }

    handleClick(id) {
        console.log(this.state.products[id].buyed)
        
        this.state.products[id].buyed = true;

        console.log(this.state.products)
    }


    render() {

        return (
            <section>
                <div className="sales">
                    <BestSalesIcon className="sales__icon" />
                    <h1 className="sales__title">Produtos em destaque</h1>
                </div>
                <div className="sales__cards">
                    {this.state.products.map((product, i) => (
                        <Card
                            title={product.title}
                            price={product.price}
                            img={product.img}
                            buyed={product.buyed}
                            handleBuyed={this.handleClick.bind(this)}
                            id={i}
                        />
                    ))}
                </div>
            </section>
        );
    }
}

export default BestSales;