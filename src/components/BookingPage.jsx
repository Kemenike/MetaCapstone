import React from 'react'
import Nav from './Nav';
import BookingForm from './BookingForm';
import "./BookingPage.css";

function BookingPage({ availableTimes, timeDispatch }) {

// The prop drilling is called for in this course unfortunatly; name is the same to track it.

  return (
    <section className="booking_page__container">
      <section className='booking_page__col'>
        <Nav />
        <section className='booking_page__main'>
          <BookingForm
            availableTimes={availableTimes}
            timeDispatch={timeDispatch}
          />
        </section>
      </section>
    </section>
  )
}

export default BookingPage;