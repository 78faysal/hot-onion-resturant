import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import WhyChooses from '../WhyChoose/WhyChooses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <WhyChooses></WhyChooses>
        </div>
    );
};

export default Home;