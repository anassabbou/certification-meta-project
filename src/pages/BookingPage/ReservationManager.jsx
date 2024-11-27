import React, { useReducer } from "react";
import BookingPage from "./BookingPage";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../utils/api";

// Function that initializes the state of available times
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// Reducer function to update the state of available times
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      const date =
        action.payload instanceof Date ? action.payload : new Date(action.payload);
      return fetchAPI(date);
    default:
      return state;
  }
};

function ReservationManager() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const updateAvailableTimes = (date) => {
    const selectedDate = date instanceof Date ? date : new Date(date);
    dispatch({ type: "UPDATE", payload: selectedDate });
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/booking-confirmed", { replace: true });
    }
  };

  return (
    <main
      className="reservation-manager"
      aria-labelledby="reservation-title"
      role="main"
    >
      <h1 id="reservation-title" className="sr-only">
        Make a Reservation
      </h1>
      <BookingPage
        availableTimes={availableTimes}
        updateAvailableTimes={updateAvailableTimes}
        submitForm={submitForm}
      />
    </main>
  );
}

export default ReservationManager;
