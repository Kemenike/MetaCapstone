import React from 'react'
import Nav from './Nav'
import "./ErrorPage.css";
import { Link } from 'react-router-dom';
import errorImg from '../assets/errorImg.png';


function ErrorPage() {
  return (
    <section className='error__page'>
      <Nav />
      <section className="error_page__container">
        <img src={errorImg} alt="Error Page" className="error_image" />
        <div className="error__text">
          <h1 className="error__title displaytitle">
            Error: 404 - Page Not Found
          </h1>
          <h3 className="error__subtitle subtitle">
            It looks like we are still nurturing this page. Visit our
            <Link className='error__link' to="/"> home page</Link> for awesome meals.
          </h3>
        </div>
      </section>
    </section>
  )
}

export default ErrorPage