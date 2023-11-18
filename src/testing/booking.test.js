import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import ReservationStore from "../api/ResrvationStore";

test("Renders the BookingForm Button", () => {
  render(
    <ReservationStore>
      <BookingForm />
    </ReservationStore>
  );
  // Play testing to see if render works on component.

  const bookingButton = screen.getByText("Book Now");
  expect(bookingButton).toBeInTheDocument();
});

test("Initialize Times Values", () => {
  render(
    <ReservationStore>
      <BookingForm />
    </ReservationStore>
  );

  // Testing if the dropdown rendered.
  const dropDownList = screen.getByTestId("res-time-dropdown");
  expect(dropDownList).toBeInTheDocument();

  // Testing if the dropdown shows all the options.
  const dropDownListOptions = screen.getAllByTestId("res-time-dropdown-option");
  let tempArr = [];
    // Add all found values for the dropdown to temp array as actual ints.
  dropDownListOptions.forEach(elem => tempArr.push(parseInt(elem.value)))
  // Make sure that all values are found.
  expect(tempArr).toStrictEqual([17, 18, 19, 20, 21, 22]);
});

test("Update Times Values", () => {
  render(
    <ReservationStore>
      <BookingForm />
    </ReservationStore>
  );

  // Testing if the dropdown rendered.
  const dropDownList = screen.getByTestId("res-time-dropdown");
  expect(dropDownList).toBeInTheDocument();


  const dropDownListOptions = screen.getAllByTestId("res-time-dropdown-option");
  let originalList = [];
  dropDownListOptions.forEach(elem => originalList.push(parseInt(elem.value)))

  // Select the 20 option in the dropdown.
    // TODO: Implement
  // Book the reservation
  const bookingButton = screen.getByText("Book Now");
    // TODO: Implement
  // Check to see if that time was removed.
    // TODO: Implement

})
