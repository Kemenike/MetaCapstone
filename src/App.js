import "./App.css";
import Home from "./components/Home";
import React, { useReducer } from 'react';
import BookingPage from "./components/BookingPage";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Reducer Function and Initial Function for Time Reducer.
const updateTimes = (state, action) => {
  if (action.type === 'remove_time') {
    const newState = state.map()
  }
}
const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

//Time Reducer


function App() {
  
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
