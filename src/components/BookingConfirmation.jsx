import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './BookingConfirmation.css';

function BookingConfirmation() {

  useEffect(() => {
    document.title = "Confirmed - Little Lemon";
  }, [])

  const { state } = useLocation();

  // Reformating date to match style a litte more.
  let newDate = state.date.split('-');

  return (
    <div id='booking-confirmation-page'>
      <div id="booking_container">
        <h1 id="confirmation__title" className='displaytitle'>
          Thank you for booking with us. See you soon!
        </h1>
        <h3 id='confirmation__description' className='subtitle'>
          We will see you on <b>{`${newDate[1]}/${newDate[2]}/${newDate[0]}`}</b> at <b>{state?.time}</b> for a party of <b>{state?.guests}</b> for your <b style={{ textTransform: 'capitalize' }}>{state?.occasion}</b>
        </h3>
      </div>
    </div>
  )
}

export default BookingConfirmation