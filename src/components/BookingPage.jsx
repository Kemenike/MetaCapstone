import React from 'react'
import Nav from './Nav';
import BookingForm from './BookingForm';
import "./BookingPage.css";

function BookingPage() {
  return (
    <section className="booking_page__container">
      <section className='booking_page__col'>
        <Nav />
        <section className='booking_page__main'>
          <BookingForm />
        </section>
      </section>
    </section>
  )
}

export default BookingPage;