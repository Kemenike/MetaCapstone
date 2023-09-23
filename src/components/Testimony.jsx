import React, { useState, useEffect } from 'react'
import './Testimiony.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

function Testimony({ name, profilePicture, rating, message }) {

    return (
        <div className='testimony'>
            <div className="row">
                <h1 className='testimony__rating'
                >
                    {
                        new Array(5).fill(0).map((_, index) => {
                            if(index+1 <= rating) {
                                return(<FontAwesomeIcon icon={faStar} width="20px" key={index} />);
                            } else if ((index+1-rating) === 0.5) {
                                console.log(index - rating + 1);
                                console.log("Rating: ", rating, "Index", index);
                                return(<FontAwesomeIcon icon={faStarHalfStroke} width="20px" key={index} />)
                            } else {
                                return(<FontAwesomeIcon icon={faStarEmpty} width="20px" key={index} />);
                            }
                        })
                    }
                </h1>
            </div>
            <div className="row">
                <img src={profilePicture} alt='' />
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