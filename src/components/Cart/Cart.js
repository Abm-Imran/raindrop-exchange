import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveItem }) => {
    const { name, price, piture } = cart;
    // console.log(cart);
    return (
        <div className='cart-product'>
            <h2>Selected Items: {cart.length}</h2>
            {
                cart.map(tshirt => 
                    <div className='cart-item'>
                        <div className='cart-details'>
                            <img src={tshirt.picture} alt="" />
                            <p>{tshirt.name}</p>
                        </div>
                        <button onClick={()=> handleRemoveItem(tshirt)} >Remove Me</button>
                    </div>)
            }

        </div>
    );
};

export default Cart;