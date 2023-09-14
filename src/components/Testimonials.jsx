import React from 'react'
import './Testimonials.css'
import Testimony from './Testimony';
import profilePic1 from '../assets/profilepicblackguyjpg.jpg';
import profilePic2 from '../assets/profilepicasianlady.PNG';
import profilePic3 from '../assets/profilepicwhiteguy.PNG';
import profilePic4 from '../assets/robopic.PNG';

function Testimonials() {
  return (
    <div className='testimonials section__container'>
      <div className="row title">
        <h1 className="displaytitle">Reviews</h1>
      </div>
      <div className="row testimony__container">
        <Testimony name ="Erik Wright" profilePicture= {profilePic1} rating = {5} message = "Never thought I'd find a Greek kitech so close to home. It's like takeing a trip to Greece for lunch!"/>
        <Testimony name ="Johann Aoki" profilePicture= {profilePic2} rating = {5} message = "Atmostphere is stunning and the food is jaw dropping"/>
        <Testimony name ="Tyler Crumb" profilePicture= {profilePic3} rating = {5} message = "The service is unrivaled throughout Chi-town"/>
        <Testimony name ="Robert Langley" profilePicture= {profilePic4} rating = {5} message = "This resturant gets the Langley seal of  approval!"/>
      </div>
    </div>
  )
}

export default Testimonials