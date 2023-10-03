import React from 'react';
import chefImg from '../assets/restaurantfood.jpg'
import Button from './Button.jsx';
import './Landing.css';

function Landing() {
  return (
    <div className='landing__main section__container'>
      <section className='row'>
        <section className='col'>
          <h1 className='displaytitle'>Little Lemon</h1>
          <h3 className='subtitle'>Chicago</h3>
          <p className='leadtext'>
          Mediterranean in the Heart of America. A taste that spans the globe. Make a reservation and dine with us today.
          </p>
          <Button info={"Reserve a Table"}/>
        </section>
        <section className='col'>
          <img src={chefImg} alt='Chef holding cuisine.' />
        </section>
      </section>
    </div>
  )
}

export default Landing