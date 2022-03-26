import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ShowCart from '../ShowCart/ShowCart';

const Cart = ({ cart, randomData, randomPhone, clearCart }) => {
    const { } = randomPhone;
    const { id } = cart;

    return (
        <div className="cart-container">
            <h1>My Cart
                <FontAwesomeIcon className="icon-cart" icon={faShoppingCart} />
            </h1>
            <p>{randomPhone.name}</p>
            {
                cart.map(phone => <ShowCart phone={phone} key={phone.id}></ShowCart>)
            }

            <div className="btn-container">
                <button onClick={() => randomData(id)} className="cart-btn">
                    <p>Choose For Me</p>
                </button>
                <br />
                <button onClick={() => clearCart()} className="cart-btn">
                    <p>Remove</p>
                </button>
            </div>
        </div>
    );
};

export default Cart;