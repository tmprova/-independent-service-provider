import React from 'react';

import Banner from './banner/Banner';
import Reviews from './reviews/Reviews';
import Services from './services/Services';

const Home = () => {
    return (
        <div>
            
            <div>
                <Banner></Banner>
                <Services></Services>
                <Reviews></Reviews>
            </div>
            
        </div>
    );
};

export default Home;