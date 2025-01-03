import React from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmedBooking.css";

const ConfirmedBooking = ({ onHideReservation }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    onHideReservation(false);
    navigate("/");
  };

  return (
    <div className="confirmed-booking">
      <h1>Booking Confirmed!</h1>
      <p>Your reservation has been successfully confirmed.</p>
      <button onClick={handleGoBack} className="go-back-button">
        Go Back to Home
      </button>
    </div>
  );
};

export default ConfirmedBooking;
