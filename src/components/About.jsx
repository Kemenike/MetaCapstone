import React from 'react'
import './About.css'
import resturantImg1 from '../assets/restaurant chef B.jpg';
import resturantImg2 from '../assets/MarioandAdrianA.jpg';

function About() {
  return (
    <div className='about_container section__container'>
      <section className='about__description__container'>
        <h1 className="about__title displaytitle">Little Lemon</h1>
        <h3 className="about__subtitle subtitle">Chicago</h3>
        <p className="about__description paragraphtext">
          Located in the heart of our vibrant city, join us for a fantastic time in Greece.
          Our renowned dishes are created by the freshest ingredients and by our two master
          chefs, Mario and Adrian.
        </p>
      </section>
      <section className='about__img_container'>
        <img className="bottom_img" src={resturantImg1} alt='' />
        <img className="top_img" src={resturantImg2} alt='' />
      </section>
    </div>
  )
}

export default About