import React from 'react'
import resturantImg1 from '../assets/restaurant chef B.jpg';
import resturantImg2 from '../assets/MarioandAdrianA.jpg';
import './About.css'

function About() {
  return (
    <div className='about_container section__container'>
      <section className='about__description_container'>
        <h1 className="about__title displaytitle">Little Lemon</h1>
        <h3 className="about__subtitle subtitle">Chicago</h3>
        <p className="about__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corrupti temporibus exercitationem id, quasi incidunt fuga beatae, velit dolore perspiciatis impedit ab iure eius minima, veniam sunt. Vitae, magni saepe aspernatur non quasi commodi praesentium atque ad alias officiis quis harum veritatis et hic sapiente autem! Necessitatibus sapiente perspiciatis voluptate!
        </p>
      </section>
      <section className='about__img_container'>
        <img className="bottom_img" src={resturantImg1} alt='' />
        <img className="top_img"src={resturantImg2} alt='' />
      </section>
    </div>
  )
}

export default About