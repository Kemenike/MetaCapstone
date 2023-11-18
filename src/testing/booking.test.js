import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('Renders the BookingForm Button', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test('Initialize Times Values', () => {
  render(<BookingForm/>);
  const dropdownList = screen.getAllBy
})