import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Homepage/HomePage";
import ReservationManager from "./pages/BookingPage/ReservationManager";
import ConfirmedBooking from "./pages/BookingPage/ConfirmedBooking";
import './styles/index.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <main role="main" aria-label="Main Content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<ReservationManager />} />
            <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
