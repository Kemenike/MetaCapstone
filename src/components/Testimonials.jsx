import React from 'react'
import './Testimonials.css'
import Testimony from './Testimony';
import profilePicture from '../assets/profilepic.png';

function Testimonials() {
  return (
    <div className='testimonials section__container'>
      <div className="row">
        <h1 className="displaytitle">Testimonials</h1>
      </div>
      <div className="row">
        <Testimony name ="John Doe" profilePicture= {profilePicture} rating = {5} message = "This resturant is amzing! The website is awesome too!"/>
        <Testimony name ="John Doe" profilePicture= {profilePicture} rating = {5} message = "This resturant is amzing! The website is awesome too!"/>
        <Testimony name ="John Doe" profilePicture= {profilePicture} rating = {5} message = "This resturant is amzing! The website is awesome too!"/>
        <Testimony name ="John Doe" profilePicture= {profilePicture} rating = {5} message = "This resturant is amzing! The website is awesome too!"/>
      </div>
    </div>
  )
}

export default Testimonials