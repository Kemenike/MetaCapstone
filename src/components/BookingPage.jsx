import React, { useState, useReducer } from 'react'
import Nav from './Nav';
import BookingForm from './BookingForm';
import "./BookingPage.css";

function BookingPage() {

  //TODO: Use useContext / createContext to create a reservation API.

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  function updateTimes() {
    // Update state of availableTimes();
  }

  function initializeTimes() {
    //Create initial state of availableTimes();
  }

  return (
      <section className="booking_page__container">
        <section className='booking_page__col'>
          <Nav />
          <section className='booking_page__main'>
            <BookingForm setDate={setDate}
              setTime={setTime}
              setGuests={setGuests}
              setOccasion={setOccasion}
            />
          </section>
        </section>
      </section>
  )
}

export default BookingPage;