import React from "react";
import "./Footer.css";
import exampleImage1 from "./assets/tallLogo.png";
const Footer = () => {
  return (
    <div id="Sum">
      <section id="Footer">
        <div id="TLogoDiv">
          <img id="TLogo" src={exampleImage1} alt="Little Lemon Chicago" />
        </div>
        <div class="panel">
          <h2>Doomat Navigation</h2>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Menu</a>
            </li>
            <li>
              <a>Reservations</a>
            </li>
            <li>
              <a>Order Online</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
        <div class="panel">
          <h2>Contact</h2>
          <ul>
            <li>
              <a>123 Citrus LaneFL 34567, United States</a>
            </li>
            <li>
              <a>+1 (555) 678-9101</a>
            </li>
            <li>
              <a>contact@littlelemon.com</a>
            </li>
          </ul>
        </div>
        <div class="panel">
          <h2>Socials</h2>
          <ul>
            <li>
              <a>Facebook</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
            <li>
              <a>TikTok</a>
            </li>
          </ul>
        </div>
      </section>
      <footer> Mohamed Alaa Elabed &copy; All Rights Reserved</footer>
    </div>
  );
};

export default Footer;
