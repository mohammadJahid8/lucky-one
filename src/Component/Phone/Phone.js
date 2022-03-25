import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Phone.css'

const Phone = ({ phone }) => {
    const { image, name, price } = phone;

    return (
        <div className="phone">
            <img src={image} alt="" />
            <p className="phone-name">{name}</p>
            <p id="price"><span className="price-title">Price:</span> {price} BDT</p>
            <button className="btn-cart">
                <p className="btn-text">Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Phone;