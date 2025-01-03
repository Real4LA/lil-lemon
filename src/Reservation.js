import React, { useState, useEffect } from "react";
import "./Reservation.css";

const Reservation = ({
  availableTimes,
  onHideReservation,
  dispatch,
  submitForm,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [occaison, setOccaison] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    console.log("Available times updated:", availableTimes);
  }, [availableTimes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, date, occaison, time, guests };
    console.log(formData);
    submitForm(formData);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: "update", date: e.target.value });
  };

  return (
    <div
      className="reservation-container"
      role="dialog"
      aria-labelledby="reservation-header"
    >
      <h2 id="reservation-header" className="reservation-header">
        Table Reservation
      </h2>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-required="true"
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-required="true"
        />
        <div id="occasion-time">
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={handleDateChange}
            required
            aria-required="true"
          />
          <label htmlFor="occaison">Occasion:</label>
          <select
            id="occaison"
            value={occaison}
            onChange={(e) => setOccaison(e.target.value)}
            required
            aria-required="true"
          >
            <option value="">None</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
          </select>
          <label htmlFor="time">Time:</label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            aria-required="true"
          >
            <option value="">Select a time</option>
            {availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="guests">Number of Guests:</label>
        <input
          id="guests"
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          required
          aria-required="true"
        />
        <button type="submit" aria-label="Reserve">
          Reserve
        </button>
      </form>
      <button aria-label="Close Reservation" onClick={onHideReservation}>
        Close Reservation
      </button>
    </div>
  );
};

export default Reservation;
