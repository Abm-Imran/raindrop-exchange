import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tshirt, setTshirt] = useTshirt();
    // console.log(tshirt);
    const [cart, setCart] = useState([]);

    const handleAddItem = (selectedItem) => {
        // console.log('clicked');
        const newCart = [...cart, selectedItem];
        setCart(newCart)
        console.log(cart);
    }

    return (
        <div className='product-container'>
            <div className="tshirt-container">
                {
                    tshirt.map(shirt => <TShirt
                        key={shirt.id}
                        Shirt={shirt}
                        handleAddItem = {handleAddItem}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;