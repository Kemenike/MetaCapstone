import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../apis/mockAPI';
import './BookingForm.css';

// Depreciated but kept for notes. 11/19/2023
//import { ReservationContext } from '../store/ResrvationStore';

function BookingForm() {

  // Depreciated but kept for notes. 11/19/2023
  // const [times, dispatch] = useContext(ReservationContext);
  const [date, setDate] = useState('2001-01-01');
  const [timeList, setTimeList] = useState([]);
  const [time, setTime] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();
  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    submitAPI({
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    }).then(() => {
      navigate('/confirmation');
    }).catch(e => alert(e.message));
  }

  // This useEffect updates Choose Time list when new time is fetched after inputting a date.
  useEffect(() => {
    fetchAPI(date).then(data => {
      setTimeList(data);
    }).catch(e => alert(e.message));
  }, [date])

  return (
    <section id='booking__form__container'>
      <form id='booking__form'>
        <label className='leadtext' htmlFor='res-date'>Choose Date</label>
        <input
          type='date'
          id='res-date'
          onChange={e => {
            setDate(e.target.value)
          }}
        />
        <label className='leadtext' htmlFor='res-time'>Choose Time</label>
        <select
          data-testid="res-time-dropdown"
          id='res-time'
          onChange={e => setTime(e.target.value)}
        >
          <option value={""}>Select...</option>
          {
            /* Index Key doesn't matter here. */
            timeList?.map((elem, indx) =>
              <option data-testid="res-time-dropdown-option" key={indx} value={elem}>{elem}</option>
            )
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