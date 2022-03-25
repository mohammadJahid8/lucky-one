import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobilePhone } from '@fortawesome/free-solid-svg-icons'
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
                <h1 className="phone-title">Phones <span className="arena">Arena</span>
                    <FontAwesomeIcon className="phone-icon" icon={faMobilePhone}></FontAwesomeIcon>
                </h1>
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