import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Phone from '../Phone/Phone';
import './Phones.css'
const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPhones(data));
    }, [])

    return (
        <div className="phones-container">
            <div>
                <h1 className="phone-title">Phones <span className="arena">Arena</span></h1>
                <div className="phones">
                    {phones.map(phone => <Phone phone={phone} key={phone.id}></Phone>)}
                </div>

            </div>

            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Phones;