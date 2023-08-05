
import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from '../components/Booking/BookingPage.js';
import BookingForm from '../components/Booking/BookingForm.js';
import { todayString } from '../api.js';

test('Choose date text exists', ()=> {

    const timesData = [{
        date: todayString(),
        times: ["17:00", "18:00"],
    },
    jest.fn()]

    render(<BookingForm timesState={timesData}/>);
    let label = screen.getByText("Choose date");
    expect(label).toBeInTheDocument();
})

test('Submit button calls function', ()=>{
    const timesData = [{
        date: todayString(),
        times: ["17:00", "18:00"],
    },
    jest.fn()]

    const mockCallback = jest.fn();

    const {getByText} = render(<BookingForm timesState={timesData} submitCallback={mockCallback}/>);
    const button = getByText("Make your reservation");
    expect(mockCallback).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(mockCallback).toHaveBeenCalled();
})

