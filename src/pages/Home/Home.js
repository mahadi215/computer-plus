import React from 'react';
import CategoriMenu from '../CategoriMenu/CategoriMenu';
import Products from '../Products/Products';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <div className=' flex-row lg:flex justify-center'>
                {/* <CategoriMenu></CategoriMenu> */}
                <Banner></Banner>
            </div>
            <Products></Products>
        </div>
    );
};

export default Home;