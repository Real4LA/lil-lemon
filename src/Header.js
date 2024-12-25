import React from "react";
import exampleImage from "./assets/logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={exampleImage} alt="Little Lemon Logo" />
      <nav>
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
            <a>Reservation</a>
          </li>
          <li>
            <a>Order Online</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
