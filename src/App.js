import React, { useState, useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Reservation from "./Reservation";
import ConfirmedBooking from "./ConfirmedBooking";
import Chicago from "./Chicago";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Chicago2 from "./Chicago2";
import Footer from "./Footer";

// Function to fetch available times for today's date
export const initializeTimes = () => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  console.log("Fetching available times for today:", today);
  const times = window.fetchAPI ? window.fetchAPI(today) : [];
  console.log("Available times:", times);
  return times;
};

// Function to fetch available times for the selected date
export const updateTimes = (state, action) => {
  if (action.type === "update" && window.fetchAPI) {
    console.log("Fetching available times for date:", action.date);
    const times = window.fetchAPI(action.date);
    console.log("Available times:", times);
    return times;
  }
  return state;
};

function App() {
  const [showReservation, setShowReservation] = useState(false);
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const navigate = useNavigate();

  const handleShowReservation = () => {
    setShowReservation(true);
  };

  const handleHideReservation = () => {
    setShowReservation(false);
  };

  const submitForm = (formData) => {
    if (window.submitAPI && window.submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <>
      <Header onShowReservation={handleShowReservation} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              showReservation ? (
                <>
                  <Reservation
                    availableTimes={availableTimes}
                    onHideReservation={handleHideReservation}
                    dispatch={dispatch}
                    submitForm={submitForm}
                  />
                  <button
                    style={{ position: "relative", right: "50%" }}
                    id="CloseRes"
                    onClick={handleHideReservation}
                    aria-label="Close Reservation"
                  >
                    Close Reservation
                  </button>
                </>
              ) : (
                <>
                  <Chicago onShowReservation={handleShowReservation} />
                  <Specials />
                  <Testimonials />
                  <Chicago2 />
                  <Footer />
                </>
              )
            }
          />
          <Route
            path="/confirmed"
            element={
              <ConfirmedBooking onHideReservation={setShowReservation} />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
