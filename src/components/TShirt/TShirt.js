import React from 'react';
import './TShirt.css'

const TShirt = ({Shirt, handleAddItem}) => {
    const {name,price, picture} = Shirt;
    return (
        <div className='tshirt-details'>
            <img src={picture} alt="" />
            <p className='tshirt-name'> {name}</p>
            <p className='tshirt-price'> ${price}</p>
            <button onClick={()=> handleAddItem(Shirt)}>Add Me</button>
        </div>
    );
};

export default TShirt;