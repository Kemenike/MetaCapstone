import React, { useState } from 'react'
import Nav from './Nav';
import BookingForm from './BookingForm';
import "./BookingPage.css";
import Reservation from './Reservation';

function BookingPage() {

  //TODO: Use useContext / createContext to create a reservation API.

  const [reservation, setReservation] = useState({
    date: null,
    time: null,
    guests: 1,
    occasion: null
  });

  return (
    <Reservation.Provider value={setReservation}>
      <section className="booking_page__container">
        <section className='booking_page__col'>
          <Nav />
          <section className='booking_page__main'>
            <BookingForm />
          </section>
        </section>
      </section>
    </Reservation.Provider>
  )
}

export default BookingPage;