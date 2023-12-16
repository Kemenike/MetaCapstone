import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../apis/mockAPI';
import { useFormik } from 'formik';
import './BookingForm.css';

// Depreciated but kept for notes. 11/19/2023
//import { ReservationContext } from '../store/ResrvationStore';

function BookingForm() {

  const navigate = useNavigate();
  const [timeList, setTimeList] = useState([]);

  // Submit form to Mock API - This will remove the time from options from this session.
  function submitForm(e) {
    submitAPI({
      time: formik.values.time,
      date: formik.values.date,
      guests: formik.values.guests,
      occasion: formik.values.occasion,
    }).then(() => {
      navigate('/confirmation', {
        state: {
          date: formik.values.date,
          time: formik.values.time,
          guests: formik.values.guests,
          occasion: formik.values.occasion,
        }
      });
    }).catch(e => alert(e.message));
  }

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      date: '',
      timeList: [],
      time: '',
      guests: 0,
      occasion: '',
    },
    validate: values => {
      const errors = {}
      // Date Validation
      if (!values.date) {
        errors.date = 'Required';
      } else if (new Date(Date.parse(values.date)).getDate() + 1 < new Date(Date.now()).getDate()) {
        // Ugly but fixes the bug with Date.parse() being one day behind;
        errors.date = 'Invaid Date - Reservation cannot be in the past.';
      }
      // Time Validation
      if (!values.time || values.time === '') {
        errors.time = 'Required';
      } else if (new Date(Date.parse(values.date)).getDate() + 1 === new Date(Date.now()).getDate() && parseInt(values.time.split(':')[0]) <= new Date(Date.now()).getHours() + 1) {
        errors.time = 'Please reserve more than one hour in advance.';
      }

      // Guest Validation
      if (!values.guests) {
        errors.guests = 'Required';
      } else if (values.guests < 1 || values.guests > 10) {
        errors.guests = 'Invalid number of guests. (1 - 10)'
      }

      // Occasion Validation
      if (!values.occasion || values.occasion === '') {
        errors.occasion = 'Required';
      }

      return errors;
    },
    onSubmit: event => {
      submitForm(event);
    },
  })

  // This useEffect updates Choose Time list when new time is fetched after inputting a date.
  useEffect(() => {
    fetchAPI(formik.values.date).then(data => {
      setTimeList(data);
    }).catch(e => alert(e.message));
  }, [formik.values.date, setTimeList])

  return (
    <section id='booking__form__container'>
      <form id='booking__form'>

        <label className='leadtext' htmlFor='res-date'>Choose Date</label>
        <div>
          <input
            type='date'
            id='res-date'
            name='date'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />{(formik.errors.date && formik.touched.date) ? <div className='error'>{formik.errors.date}</div> : null}
        </div>

        <label className='leadtext' htmlFor='res-time'>Choose Time</label>
        <div>
          <select
            name='time'
            data-testid="res-time-dropdown"
            id='res-time'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.time}
          >
            <option value='' >Select...</option>
            {
              /* Index Key doesn't matter here. */
              timeList?.map((elem, indx) =>
                <option data-testid="res-time-dropdown-option" key={indx} value={elem}>{elem}</option>
              )
            }
          </select>{(formik.errors.time && formik.touched.time) ? <div className='error'>{formik.errors.time}</div> : null}
        </div>

        <label className='leadtext' htmlFor='guests'>
          Number of Guests
        </label>
        <div>
          <input
            name='guests'
            type='number'
            placeholder='1'
            min={1} max={10}
            id='guests'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.guests}
          />
          {(formik.errors.guests && formik.touched.guests) ? <div className='error'>{formik.errors.guests}</div> : null}
        </div>

        <label className='leadtext' htmlFor='occasion'>
          Occasion
        </label>
        <div>
          <select
            name='occasion'
            id='occasion'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.occasion}>
            <option value="">Select...</option>
            <option value='anniversary'>Anniversary</option>
            <option value="birthday">Birthday</option>
            <option value="lunch">Lunch</option>
            <option value='meeting'>Meeting</option>
          </select>
          {(formik.errors.occasion && formik.touched.occasion) ? <div className='error'>{formik.errors.occasion}</div> : null}
        </div>

        <input
          id="booking__button"
          name='submit'
          className={`leadtext`}
          type='submit'
          onClick={formik.handleSubmit}
          value="Book Now" />
      </form>
    </section >
  )
}

export default BookingForm;