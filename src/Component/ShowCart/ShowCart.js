import React from 'react';
import './ShowCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

const ShowCart = ({ phone, deleteItem }) => {
    const { name, id} = phone;
    return (
        <div className="cart-details">
            
            <p className="cart-phones">{name}
                <FontAwesomeIcon title='delete' onClick={() => deleteItem(id)} className="delete-icon" icon={faDeleteLeft}></FontAwesomeIcon>
            </p>
        </div>
    );
};

export default ShowCart;