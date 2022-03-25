import React from 'react';
import './Phone.css'

const Phone = ({ phone }) => {
    const { image, id, name, price } = phone;

    return (
        <div className="phone">
            <img src={image} alt="" />
            <p className="phone-name">{name}</p>
            <p id="price"><span className="price-title">Price:</span> {price} BDT</p>
            <button className="btn-cart">
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Phone;