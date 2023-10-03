import React from 'react'
import './Button.css';


function Button({ info }) {
  return (
    <button className='leadtext btn'>{info}</button>
  )
}

export default Button