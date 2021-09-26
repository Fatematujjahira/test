import React from 'react';
import './Header.css';
import logo from '../../image/lo.jpg'

const Header = () => {
    return (
        <div className="header">
            <nav>
          
    
            <a href="/home">Home</a>
                <a href="/orders">Order Review</a>
                <a href="/features">Features</a>
                <a href="/about us">About Us</a>
              
            </nav>
            
           <img className="logo" src={logo} alt="" />
            <div>
                <p>"Books are magical keys to open up worids and change prespectives!"<br />
                “Read a thousand books, and your words will flow like a river.”</p>
                <h3 className="text mb-5 pb-3">We need some writers and our budget is $60 million</h3>
            </div>

        </div>
    );
};

export default Header;