import "./App.css";
import Home from "./components/Home";
import React, { useReducer } from "react";
import BookingPage from "./components/BookingPage";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App () {

  // Available Times as a reducer function; drilled to Booking Form.
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // Takes in the disapatched action.
    // dispatch{ type: [ACTION], date: [TIMESLOT DATE], time: [TIME TO BE REMOVED] }

  //Although not pretty, this is what is asked for by the class. I would have made an API to handle this if I could.
  function updateTimes(state, action) {
    const answer = state.filter(time => time !== parseInt(action.time));
    return answer;
  }

  function initializeTimes() {
    return ([17, 18, 19, 20, 21, 22]);
  }

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={
            <BookingPage
              availableTimes={availableTimes} timeDispatch={dispatch}
              />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
  );
}

export default App;
