import "./App.css";
import Home from "./components/Home";
import React from "react";
import ReservationStore from "./api/ResrvationStore";
import BookingPage from "./components/BookingPage";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;