import React from "react";
import "./Chicago2.css";
import exampleImage1 from "./assets/chicago1.jpg";
const Chicago = () => {
  return (
    <section id="chicagoSec2">
      <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodtempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut
          labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
      <div id="pics">
        <img id="chicago1" src={exampleImage1} alt="Little Lemon Chicago" />
      </div>
    </section>
  );
};

export default Chicago;
