import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import React from "react";
import ReservationStore from "./store/ResrvationStore";
import BookingPage from "./components/BookingPage";
import BookingConfirmation from './components/BookingConfirmation';
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/reservations"
          element={
            <ReservationStore>
              <BookingPage />
            </ReservationStore>
          }
        />
        <Route path='/confirmation' element={<BookingConfirmation />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
