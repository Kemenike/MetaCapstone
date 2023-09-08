import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <>
      <img />
      <div className="footer__container">
        <section>
          <h1 className='sectiontitle'>Doormat Navigation</h1>
          <ul className="footerlist">
            <li><a href="" role='button' className="link footer__link leadtext">Home</a></li>
            <li><a href="" role='button' className="link footer__link leadtext">About</a></li>
            <li><a href="" role='button' className="link footer__link leadtext">Menu</a></li>
            <li><a href="" role='button' className="link footer__link leadtext">Reservations</a></li>
            <li><a href="" role='button' className="link footer__link leadtext">Order Online</a></li>
            <li><a href="" role='button' className="link footer__link leadtext">Login</a></li>
          </ul>
        </section>
        <section>
          <h1 className='sectiontitle'>Contact</h1>
          <ul className='footerlist'>
            <li><a href="" role='button' className="link footer__link leadtext">Address</a></li>
            <li><a href="" role='button' className="link footer__link leadtext">Phone Number</a></li>
            <li><a href="" role='button' className="link footer__link leadtext">Email</a></li>
          </ul>
        </section>
        <section>
          <h1 className='sectiontitle'>Social Media Links</h1>
          <ul className='footerlist'>
            <li><a href="" role='button' className="link footer__link leadtext">Facebook</a></li>
            <li><a href="" role='button' className="link footer__link leadtext">Instagram</a></li>
            <li><a href="" role='button' className="link footer__link leadtext">YouTube</a></li>
            <li><a href="" role='button' className="link footer__link leadtext">Reservations</a></li>
            <li><a href="" role='button' className="link footer__link leadtext">TikTok</a></li>
            <li><a href="" role='button' className="link footer__link leadtext">Telegram</a></li>
          </ul>
        </section>
      </div>

    </>
  )
}

export default Footer;