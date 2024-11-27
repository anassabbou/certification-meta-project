import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <div
      className="confirmed-booking"
      role="alert"
      aria-live="assertive"
      aria-labelledby="confirmation-title"
    >
      <h1 id="confirmation-title">Reservation Confirmed!</h1>
      <p>Your table has been successfully reserved. We look forward to seeing you!</p>

      <Button
        label="Return to Homepage"
        variant="default"
        onClick={() => navigate("/")}
        className="return-button"
      />
    </div>
  );
}

export default ConfirmedBooking;
