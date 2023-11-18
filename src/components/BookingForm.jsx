import React, { useState, useContext }from 'react'
import { ReservationContext } from '../store/ResrvationStore';
import './BookingForm.css';

function BookingForm() {

  const [times, dispatch] = useContext(ReservationContext);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();

  function submitForm(e) {
    e.preventDefault();
    console.log("Submitting form...");
    dispatch({type: 'remove_time', date: date, time: time});
    console.log(times);
  }

  return (
    <section id='booking__form__container'>
      <form id='booking__form'>
        <label className='leadtext' htmlFor='res-date'>Choose Date</label>
        <input
          type='date'
          id='res-date'
          onChange={e => {
            setDate(e.target.value)
            dispatch({type: 'get_time', date: date, time: time})
          }}
        />
        <label className='leadtext' htmlFor='res-time'>Choose Time</label>
        <select data-testid="res-time-dropdown" id='res-time' onChange={e => setTime(e.target.value)}>
          <option value={""}>Select...</option>
          {
            /* Index Key doesn't matter here. */
            times?.map((elem, indx) => <option data-testid="res-time-dropdown-option" key={indx} value={elem}>{elem}:00</option>)
          }
        </select>
        <label className='leadtext' htmlFor='guests'>Number of Guests</label>
        <input type='number' placeholder='1' min={1} max={10} onChange={e => setGuests(e.target.value)} id='guests' />
        <label className='leadtext' htmlFor='occasion'>Occasion</label>
        <select id='occasion' onChange={e => setOccasion(e.target.value)}>
          <option value="">Select...</option>
          <option value="birthday">Birthday</option>
          <option value='anniversary'>Anniversary</option>
        </select>
        <input id="booking__button" className='leadtext' type='submit' onClick={e => submitForm(e)} value="Book Now" />
      </form>
    </section>
  )
}

export default BookingForm;