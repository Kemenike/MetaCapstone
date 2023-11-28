import React, { useEffect } from 'react'
import BookingForm from './BookingForm';
import cooking from '../assets/restaurant chef B.jpg';
import "./BookingPage.css";

function BookingPage() {

  useEffect(() => {
    document.title = "Reserve A Table - Little Lemon";
  }, [])

  return (
    <section className="booking_page__container">
      <section className='booking_page__col'>
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
            <BookingForm />
          </div>
        </section>
        <img id="cooking" src={cooking} alt='Chef garnishing a dish.'/>
      </section>
    </section>
  )
}

export default BookingPage;