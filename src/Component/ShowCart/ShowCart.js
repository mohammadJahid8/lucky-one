import React from 'react';
import './ShowCart.css'
const ShowCart = () => {
    return (
        <div className="cart-details">
            <p className="cart-phones">Name</p>
            <div className="cart-buttons">

                <div className="btn-container">
                    <button className="cart-btn">
                        <p>Choose For Me</p>
                    </button>
                    <br />
                    <button className="cart-btn">
                        <p>Remove</p>
                    </button>
                </div>


            </div>
        </div>
    );
};

export default ShowCart;