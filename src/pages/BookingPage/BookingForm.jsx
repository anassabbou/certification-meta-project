import React, { useState } from "react";
import Button from "../../components/Button";

export const isFormValid = ({ date, time, guests }) => {
  return Boolean(date && time && guests > 0 && guests <= 10);
};

function BookingForm({ availableTimes, updateAvailableTimes, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setDate(e.target.value);
    updateAvailableTimes(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    if (isFormValid({ date, time, guests })) {
      submitForm(formData);
    } else {
      console.error("Form is invalid");
    }
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="booking-form-title"
    >
      <h1 id="booking-form-title" className="booking-form-title">
        Book a Table
      </h1>

      <div className="form-group">
        <label htmlFor="res-date">Choose date *</label>
        <input
          type="date"
          id="res-date"
          value={date}
          min={today}
          onChange={handleDateChange}
          required
          aria-required="true"
        />
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time *</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-required="true"
        >
          <option value="" disabled>
            Select a time
          </option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests *</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          min="1"
          max="10"
          required
          aria-required="true"
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          aria-label="Select occasion"
        >
          <option value="" disabled>
            Select an occasion
          </option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <Button
        label="Submit Reservation"
        type="submit"
        disabled={!isFormValid({ date, time, guests })}
        aria-label="Submit your reservation"
        className="submit-button"
      />
    </form>
  );
}

export default BookingForm;
