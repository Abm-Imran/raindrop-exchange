import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tshirt, setTshirt] = useTshirt();
    // console.log(tshirt);

    return (
        <div className='product-container'>
            <div className="tshirt-container">
                {
                    tshirt.map(shirt => <TShirt
                        key={shirt.id}
                        Shirt={shirt}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <h2>this is cart section</h2>
            </div>
        </div>
    );
};

export default Home;