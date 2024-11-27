import React from "react";
import BookingForm from "./BookingForm";
import restaurantImage from "../../assets/images/book-a-table.jpg";

function BookingPage({ availableTimes, updateAvailableTimes, submitForm }) {
  return (
    <section className="booking-page" aria-labelledby="booking-page-title">
      <div className="booking-container container">
        <h1 id="booking-page-title" className="booking-form-title">Book a Table</h1>
        <div className="booking-content">
          <BookingForm
            availableTimes={availableTimes}
            updateAvailableTimes={updateAvailableTimes}
            submitForm={submitForm}
          />

          <div className="booking-info">
            <img
              src={restaurantImage}
              alt="Interior of Little Lemon Restaurant"
              className="booking-info-image"
            />
            <div className="booking-info-details">
              <h2 id="contact-us">Contact Us</h2>
              <p>
                <strong>Phone:</strong>
                <a href="tel:+18005551234" aria-label="Call us at +1 800 555 1234">+1 (800) 555-1234</a>
                <br />
                <strong>Email:</strong>
                <a href="mailto:info@littlelemon.com" aria-label="Send an email to info@littlelemon.com">info@littlelemon.com</a>
              </p>
              <h2 id="address">Address</h2>
              <p>123 Lemon Street, Chicago, IL</p>
              <h2 id="directions">How to Reach Us</h2>
              <p>
                We are located in the heart of Chicago. Easily reachable by public transportation or by car.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
