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
        console.log(cart);
        const available = cart.find(clickedItem=> clickedItem.id === selectedItem.id);
        if(!available){
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else{
            alert('This Item Already Added');
        }
    }

    const handleRemoveItem = (selectedItem) =>{
        // console.log('clicked');
        const rest = cart.filter(clickedItem=> clickedItem.id !== selectedItem.id);
        setCart(rest);
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
                handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;