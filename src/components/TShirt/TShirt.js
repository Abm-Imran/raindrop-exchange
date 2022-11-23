import React from 'react';
import './TShirt.css'

const TShirt = (props) => {
    const {name,price, picture} = props.Shirt;
    return (
        <div className='tshirt-details'>
            <img src={picture} alt="" />
            <p>name: {name}</p>
            <p>Price: ${price}</p>
        </div>
    );
};

export default TShirt;