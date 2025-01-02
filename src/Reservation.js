import React, { useState } from "react";
import "./Reservation.css";

const Reservation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [occaison, setOccaison] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [availableTimes, setAvailableTimes] = useState([
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, date, occaison, time, guests });
    alert(
      `Reservation successful!\nName: ${name}\nEmail: ${email}\nDate: ${date}\nOccaison: ${occaison}\nTime: ${time}\nGuests: ${guests}`
    );
    // Clear the input fields
    setName("");
    setEmail("");
    setDate("");
    setOccaison("");
    setTime("");
    setGuests(1);
  };

  return (
    <div className="reservation-container">
      <h2 className="reservation-header">Table Reservation</h2>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div id="occasion-time">
          <label> Date: </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label> Occaison: </label>
          <select
            id="occasion"
            value={occaison}
            onChange={(e) => setOccaison(e.target.value)}
            required
          >
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
          </select>
          <label> Time: </label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
        </div>

        <label>Number of Guests:</label>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          required
        />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default Reservation;
