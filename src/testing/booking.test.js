import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import ReservationStore from "../store/ResrvationStore";

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
  dropDownListOptions.forEach((elem) => tempArr.push(parseInt(elem.value)));
  // Make sure that all values are found.
  expect(tempArr).toStrictEqual([17, 18, 19, 20, 21, 22]);
});

test("Update Times Values", () => {
  render(
    <ReservationStore>
      <BookingForm />
    </ReservationStore>
  );

  // Testing if the dropdown rendered and testing if Button is rendered.
  const dropDownList = screen.getByTestId("res-time-dropdown");
  const dropDownListOptions = screen.getAllByTestId("res-time-dropdown-option");
  const bookingButton = screen.getByText("Book Now");
  expect(dropDownList).toBeInTheDocument();
  expect(bookingButton).toBeInTheDocument();

  // Select the 20 option in the dropdown.
  fireEvent.change(dropDownList, { target: { value: '20' } });

  // Book the reservation
  fireEvent.click(bookingButton);

  // Check to see if that time was removed.
  expect(dropDownListOptions).toEqual(
    expect.not.arrayContaining(['20'])
  );
});
