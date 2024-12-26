import "./App.css";
import "./Header.js";
import Header from "./Header.js";
import Chicago from "./Chicago.js";
import Chicago2 from "./Chicago2.js";
import Specials from "./Specials.js";
import Testimonials from "./Testimonials.js";
import Reservation from "./Reservation.js";
import Footer from "./Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [showReservation, setShowReservation] = useState(false);

  const handleShowReservation = () => {
    setShowReservation(true);
  };

  const handleHideReservation = () => {
    setShowReservation(false);
  };
  return (
    <>
      <meta name="description" content="your text goes here" />
      <meta name="og:title" content="" />
      <meta name="og:description" content="" />
      <meta name="og:image" content="" />
      <main>
        <BrowserRouter>
          <Header onShowReservation={handleShowReservation} />
          <Routes>
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </BrowserRouter>

        {showReservation ? (
          <Reservation />
        ) : (
          <>
            <Chicago onShowReservation={handleShowReservation} />
            <Specials />
            <Testimonials />
            <Chicago2 />
            <Footer />
          </>
        )}
        {showReservation && (
          <button
            style={{ position: "relative", right: "-77%" }}
            id="CloseRes"
            onClick={handleHideReservation}
          >
            Close Reservation
          </button>
        )}
      </main>
    </>
  );
}

export default App;
