import React from 'react'
import { Link } from 'react-router-dom';
import littleLemonLogo from '../assets/Logo.svg';
import './Nav.css';

function Nav(props) {
  return (
    <div id='nav_bar'>
      <section className='row'>
        <section className="col">
          <img src={ props.logo || littleLemonLogo } alt='Little Lemon Logo' />
        </section>
        <section className="col">
          <ul className="link__container">
            <li><a href="/" role='button' className="link leadtext">Home</a></li>
            <li><a href="/about" role='button' className="link leadtext">About</a></li>
            <li><a href="/menu" role='button' className="link leadtext">Menu</a></li>
            <li><Link to="/reservations" className="link leadtext">Reservations</Link></li>
            <li><a href="/orderonline" role='button' className="link leadtext">Order Online</a></li>
            <li><a href="/login" role='button' className="link leadtext">Login</a></li>
          </ul>
        </section>
      </section>
    </div>
  )
}

export default Nav