import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm.jsx';

test('Renders the Booking Form heading', () => {
  render(<BookingForm />)
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();

})

test('Initial Time Dispatch', async () => {
  render(<BookingForm />);
  let container = null;

  expect(container).
})