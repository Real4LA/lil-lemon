import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from "./App";
import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";
import Reservation from "./Reservation";

test("Reservation form can be submitted by the user", () => {
  const availableTimes = [
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
  ];
  const handleHideReservation = jest.fn();
  const dispatch = jest.fn();

  render(
    <Reservation
      availableTimes={availableTimes}
      onHideReservation={handleHideReservation}
      dispatch={dispatch}
    />
  );

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/Name/i), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: "john@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/Date/i), {
    target: { value: "2023-10-10" },
  });
  fireEvent.change(screen.getByLabelText(/Occasion/i), {
    target: { value: "Birthday" },
  });
  fireEvent.change(screen.getByLabelText(/Time/i), {
    target: { value: "18:00" },
  });
  fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
    target: { value: "2" },
  });

  // Submit the form
  fireEvent.click(screen.getByRole("button", { name: /Reserve/i }));

  // Check if the form was submitted
  expect(handleHideReservation).toHaveBeenCalled();
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import { initializeTimes, updateTimes } from "./App";

// Mock the fetchAPI function
global.fetchAPI = jest.fn();

describe("initializeTimes", () => {
  it("should return available booking times", () => {
    // Mock the fetchAPI function to return a non-empty array
    fetchAPI.mockReturnValue(["18:00", "18:30", "19:00"]);

    const times = initializeTimes();
    expect(times).toEqual(["18:00", "18:30", "19:00"]);
  });
});

describe("updateTimes", () => {
  it("should return available booking times for the selected date", () => {
    // Mock the fetchAPI function to return a non-empty array
    fetchAPI.mockReturnValue(["18:00", "18:30", "19:00"]);

    const state = [];
    const action = { type: "update", date: "2023-10-10" };
    const times = updateTimes(state, action);
    expect(times).toEqual(["18:00", "18:30", "19:00"]);
  });
});
