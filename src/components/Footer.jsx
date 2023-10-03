import React from 'react'
import './Footer.css';
import footerImg from '../assets/Logo.svg';

function Footer() {
  return (
    <>
      <div className="footer__container section__container">
        <img src={footerImg} alt=''/>
        <section>
          <h1 className='sectiontitle' style={{color: "var(--primary-green)"}}>Doormat Navigation</h1>
          <ul className="footerlist">
            <li><a href="" role='button' className="link footer__link leadtext leadtext">Home</a></li>
            <li><a href="" role='button' className="link footer__link leadtext leadtext">About</a></li>
            <li><a href="" role='button' className="link footer__link leadtext leadtext">Menu</a></li>
            <li><a href="" role='button' className="link footer__link leadtext leadtext">Reservations</a></li>
            <li><a href="" role='button' className="link footer__link leadtext leadtext">Order Online</a></li>
            <li><a href="" role='button' className="link footer__link leadtext leadtext">Login</a></li>
          </ul>
        </section>
        <section>
          <h1 className='sectiontitle' style={{color: "var(--primary-green)"}}>Contact</h1>
          <ul className='footerlist'>
            <li><a href="" role='button' className="link footer__link leadtext leadtext">Address</a></li>
            <li><a href="" role='button' className="link footer__link leadtext leadtext">Phone Number</a></li>
            <li><a href="" role='button' className="link footer__link leadtext leadtext">Email</a></li>
          </ul>
        </section>
        <section>
          <h1 className='sectiontitle' style={{color: "var(--primary-green)"}}>Social Media Links</h1>
          <ul className='footerlist'>
            <li><a href="" role='button' className="link footer__link leadtext leadtext">Facebook</a></li>
            <li><a href="" role='button' className="link footer__link leadtext leadtext">Instagram</a></li>
            <li><a href="" role='button' className="link footer__link leadtext leadtext">YouTube</a></li>
            <li><a href="" role='button' className="link footer__link leadtext leadtext">Reservations</a></li>
            <li><a href="" role='button' className="link footer__link leadtext leadtext">TikTok</a></li>
            <li><a href="" role='button' className="link footer__link leadtext leadtext">Telegram</a></li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Footer;