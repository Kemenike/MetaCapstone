import React, { useContext } from 'react'
import './BookingForm.css';
import Reservation from './Reservation';

function BookingForm() {

  function submitForm(e) {
    e.preventDefault();
    console.log(reservation);
  }

  const { reservation, serReserv } = useContext(Reservation);

  return (
      <section id='booking__form__container'>
        <form id='booking__form'>
          <label htmlFor='res-date'>Choose Date</label>
          <input
            type='date'
            id='res-date'
            onChange={e => reservation({ ...reservation, date: e.target.value })}
          />
          <label htmlFor='res-time'>Choose Time</label>
          <select id='res-time' onChange={e => reservation({ ...reservation, time: e.target.value })}>
            <option value={""}>Select...</option>
            <option value={"17:00"}>17:00</option>
            <option value={"18:00"}>18:00</option>
            <option value={"19:00"}>19:00</option>
            <option value={"20:00"}>20:00</option>
            <option value={"21:00"}>21:00</option>
            <option value={"22:00"}>22:00</option>
          </select>
          <label htmlFor='guests'>Number of Guests</label>
          <input type='number' placeholder='1' min={1} max={10} onChange={e => reservation({ ...reservation, guests: e.target.value })} id='guests' />
          <label htmlFor='occasion'>Occasion</label>
          <select id='occasion' onChange={e => reservation({ ...reservation, occasion: e.target.value })}>
            <option value="">Select...</option>
            <option value="birthday">Birthday</option>
            <option value='anniversary'>Anniversary</option>
          </select>
          <input type='submit' onClick={e => submitForm(e)} value="Make Your Reservation" />
        </form>
      </section>
  )
}

export default BookingForm