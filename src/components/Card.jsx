import React from 'react'
import './Card.css';
import bell from '../assets/Dish icon.svg';


function Card({ img, dishTitle, dishDescription, price }) {
    return (
        <div className='card'>
            <img src={img} alt="" className="card__img" />
            <div className="card_info">
                <div className="row">
                    <h1 className='dish_title cardtitle'>{dishTitle}</h1>
                    <h3 className='price highlighttext'>{price}</h3>
                </div>
                <p className='dish_description paragraphtext'>{dishDescription}</p>
                <a className='orderdel leadtext'>
                    Order for Delivery<span><img src={bell} alt=''/></span>
                </a>
            </div>
        </div>
    )
}

export default Card