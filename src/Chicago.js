import React from "react";
import "./Chicago.css";
import exampleImage from "./assets/chicago.jpg";
const Chicago = ({ onShowReservation }) => {
  return (
    <section id="chicagoSec">
      <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodtempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <button onClick={onShowReservation}>Reserve A Table</button>
      </div>
      <img id="chicago" src={exampleImage} alt="Little Lemon Chicago" />
    </section>
  );
};

export default Chicago;
