import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    const {name, price, piture} = cart;
    // console.log(cart);
    return (
        <div>
            <h4>Selected item: {cart.length}</h4>
            {
                cart.map(tshirt=> 
                    <div className='cart-item'>
                        <img src={tshirt.picture} alt="" />
                        <p>{tshirt.name}</p>
                        <button>add</button>
                    </div>)
            }
            
        </div>
    );
};

export default Cart;