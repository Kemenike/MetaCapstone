import React from 'react'
import './BookingForm.css';

function BookingForm() {

  //TODO: Code the form behavior.
    //Define State Variable to hold form state
    //Make form dynamic with state changes.

  return (
    <section id='booking__form__container'>
      <form id='booking__form'>
        <label for='res-date'>Choose Date</label>
        <input type='date' id='res-date' />
        <label for='res-time'>Choose Time</label>
        <select id='res-time'>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label for='guests'>Number of Guests</label>
        <input type='number' placeholder='1' min={1} max={10} id='guests' />
        <label for='occasion'>Occasion</label>
        <select id='occasion'>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type='submit' value="Make Your Reservation" />
      </form>
    </section>
  )
}

export default BookingForm