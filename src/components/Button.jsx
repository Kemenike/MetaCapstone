import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css';


function Button({ info, url }) {
  return (
    <Link
    to={url || '/'}>
      <button className='leadtext btn'>{info}</button>
    </Link>
  )
}

export default Button