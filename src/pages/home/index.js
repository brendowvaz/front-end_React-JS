import React from 'react';

import Header from '../../components/Header';
import Carousel from './Carousel';
import MiddleBanners from './MiddleBanners';
import BestSales from './BestSales';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Carousel />
                <MiddleBanners />
                <BestSales />
            </main>
            <Footer />
        </>
    );
}

export default Home;