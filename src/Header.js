import React from "react";
import exampleImage from "./assets/logo.jpg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ onShowReservation }) => {
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
            <Link onClick={onShowReservation}>Reservation</Link>
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
