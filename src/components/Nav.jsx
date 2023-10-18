import React from 'react'
import './Nav.css';

function Nav(props) {
  return (
    <div id='nav_bar' className='section__container'>
      <section className='row'>
        <section className="col">
          <img src={props.logo} alt='Little Lemon Logo' />
        </section>
        <section className="col">
          <ul className="link__container">
            <li><a href="/" role='button' className="link leadtext">Home</a></li>
            <li><a href="/about" role='button' className="link leadtext">About</a></li>
            <li><a href="/menu" role='button' className="link leadtext">Menu</a></li>
            <li><a href="/reservations" role='button' className="link leadtext">Reservations</a></li>
            <li><a href="/orderonline" role='button' className="link leadtext">Order Online</a></li>
            <li><a href="/login" role='button' className="link leadtext">Login</a></li>
          </ul>
        </section>
      </section>
    </div>
  )
}

export default Nav