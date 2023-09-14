import React from 'react'
import './Testimiony.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

function Testimony({ name, profilePicture, raiting, message }) {

    function ratingStars(raiting) {

    }

    return (
        <div className='testimony'>
            <div className="row">
                <h1 className='testimony__rating'>
                    {/* TODO: Create function to fix stars based off raiting. */}
                    {ratingStars()}
                    <FontAwesomeIcon width="20px" icon={faStar} />
                    <FontAwesomeIcon width="20px" icon={faStar} />
                    <FontAwesomeIcon width="20px" icon={faStar} />
                    <FontAwesomeIcon width="20px" icon={faStarHalfStroke} />
                    <FontAwesomeIcon width="20px" icon={faStarEmpty} />
                </h1>
            </div>
            <div className="row">
                <img src={profilePicture} alt=''/>
                <h3 className=''>{name}</h3>
            </div>
            <div className="row">
                <p className="paragraphtext">
                    {message}
                </p>
            </div>
        </div>
    );
}

export default Testimony