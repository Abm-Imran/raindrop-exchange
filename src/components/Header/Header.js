import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className='logo'>
                <h3><span>Rain</span>Drop</h3>
                {/* <Link to={'/home'}><span>R</span>ain<span> D</span>rop</Link> */}
            </div>
            <div className='header-link'>
                <Link to={'/home'}>Home</Link>
                <Link to={'/tshirt'}>Shop</Link>
                <Link to={'/orderreview'}>Order Review</Link>
                <Link to={'/about'}>About</Link>
            </div>
        </nav>

    );
};

export default Header;