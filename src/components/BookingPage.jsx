import React from 'react'
import Nav from './Nav';
import BookingForm from './BookingForm';
import cooking from '../assets/restaurant chef B.jpg';
import "./BookingPage.css";

function BookingPage() {

  // The prop drilling is called for in this course unfortunatly; name is the same to track it.

  return (
    <section className="booking_page__container">
      <section className='booking_page__col'>
        <Nav />
        <section className='booking_page__main'>
          <div className="booking_page__description">
            <h1 className="booking_page__title displaytitle"
              style={{ color: "var(--primary-green)" }}>
              Make A Reservation Today
            </h1>
            <h1 className="booking_page__subtitle subtitle">
              Visit Greece for Lunch.
            </h1>
          </div>
          <div className="booking_page__form">
            <BookingForm/>
          </div>
        </section>
        <img id="cooking" src={cooking} alt='Chef garnishing a dish.'/>
      </section>
    </section>
  )
}

export default BookingPage;