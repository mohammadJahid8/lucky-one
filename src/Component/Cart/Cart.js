import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ShowCart from '../ShowCart/ShowCart';

const Cart = () => {
    return (
        <div className="cart-container">
            <h1>My Cart
                <FontAwesomeIcon className="icon-cart" icon={faShoppingCart} />
            </h1>
            <ShowCart></ShowCart>
        </div>
    );
};

export default Cart;