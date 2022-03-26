import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobilePhone } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Phone from '../Phone/Phone';
import './Phones.css'

const Phones = () => {

    const [phones, setPhones] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomPhone, setRandom] = useState([]);
    // console.log(random);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPhones(data));
    }, [])

    const handleAddToCart = (phone) => {
        const newCart = [...cart, phone];
        if (newCart.length <= 4) {
            setCart(newCart);
        }
        else {
            alert('Cant add more than 4 devices')
        }

    }
    const randomData = () => {

        const number = cart[Math.floor(Math.random() * cart.length)];

        if (number) {
            setRandom(number);
        }
        else {

            alert('Your Cart is Empty');
        }
    }
    const clearCart = () => {
        setCart([]);
        setRandom([]);
    }

    return (
        <div className="phones-container">
            <div>
                <h1 className="phone-title">Phones <span className="arena">Arena</span>
                    <FontAwesomeIcon className="phone-icon" icon={faMobilePhone}></FontAwesomeIcon>
                </h1>
                <div className="phones">
                    {phones.map(phone => <Phone phone={phone} key={phone.id} handleAddToCart={handleAddToCart}></Phone>)}
                </div>

            </div>

            <div className="cart-container">
                <Cart cart={cart} randomData={randomData} randomPhone={randomPhone} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Phones;