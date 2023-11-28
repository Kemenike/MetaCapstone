import React, { useEffect } from 'react'
import './BookingConfirmation.css';

function BookingConfirmation({ booking }) {

  useEffect(() => {
    document.title = "Confirmed - Little Lemon";
  }, [])

  return (
    <div id='booking-confirmation-page'>
      <h1 id="confirmation__title" className='displaytitle'>
        Thank you for booking with us. See you soon!
      </h1>
      <h3 id='confirmation__description' className='subtitle'>
          We will see you on <b>{booking?.date}</b> at <b>{booking?.time}</b> for a party of <b>{booking?.guests}</b> for the <b>{booking?.occasion}</b>
      </h3>
    </div>
  )
}

export default BookingConfirmation