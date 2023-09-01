import React from 'react'

function Nav(props) {
  return (
    <>
      <img src={props.logo} alt='Little Lemon Logo' />
      <ul className="link__container">
        <li><a href="/" role='button' className="link">Home</a></li>
        <li><a href="/about" role='button' className="link">About</a></li>
        <li><a href="/menu" role='button' className="link">Menu</a></li>
        <li><a href="/reservations" role='button' className="link">Reservations</a></li>
        <li><a href="/orderonline" role='button' className="link">Order Online</a></li>
        <li><a href="/login" role='button' className="link">Login</a></li>
      </ul>
    </>
  )
}

export default Nav