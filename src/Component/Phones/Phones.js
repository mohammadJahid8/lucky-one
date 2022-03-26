import React, { useEffect, useState } from 'react';

import Cart from '../Cart/Cart';
import Phone from '../Phone/Phone';
import './Phones.css'

const Phones = () => {

    const [phones, setPhones] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomPhone, setRandom] = useState([]);
    
    //data laoding
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPhones(data));
    }, [])

    //adding phone to cart by clicking on button
    const handleAddToCart = (phone) => {
        const exist = cart.find(pd => pd.id === phone.id);
        
        const newCart = [...cart, phone];

        if (exist) {
            alert('You cant add same device twice')
        }
        else if (newCart.length <= 4) {
            setCart(newCart);
        }
        else {
            alert('Cant add more than 4 devices')
        }
    }
    // finding random phone
    const randomData = () => {
        const number = cart[Math.floor(Math.random() * cart.length)];

        if (number) {
            setRandom(number);
        }
        else {
            alert('Your Cart is Empty');
        }
    }
    //clearing all phones from the cart
    const clearCart = () => {
        setCart([]);
        setRandom([]);
    }
    //remove single device on click
    const deleteItem = (id) => {
        const newList = cart.filter((item) => item.id !== id);
        setCart(newList);
    }
    return (
        <div className="phones-container">
            <div>
                <div className="phones">
                    {phones.map(phone => <Phone phone={phone} key={phone.id} handleAddToCart={handleAddToCart}></Phone>)}
                </div>
            </div>

            <div className="cart-container">
                <Cart cart={cart} randomData={randomData} randomPhone={randomPhone} clearCart={clearCart} deleteItem={deleteItem}></Cart>
            </div>
        </div>
    );
};

export default Phones;