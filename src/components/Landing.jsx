import React from 'react';
import chefImg from '../assets/restaurantfood.jpg'
import './Landing.css';

function Landing() {
  return (
    <div className='landing__main section__container'>
      <section className='row'>
        <section className='col'>
          <h1 className='displaytitle'>Little Lemon</h1>
          <h3 className='subtitle'>Chicago</h3>
          <p className='leadtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nulla, sapiente eveniet fugiat temporibus quos?</p>
          <button className='leadtext btn'>Reserve a Table</button>
        </section>
        <section className='col'>
          <img src={chefImg} alt='Chef holding cuisine.' />
        </section>
      </section>
    </div>
  )
}

export default Landing