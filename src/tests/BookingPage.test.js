
import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from '../components/BookingPage/BookingPage.js';
import BookingForm from '../components/BookingPage/BookingForm.js';

test('choose date text exists', ()=> {

    let timesData = [["17:00", "18:00"], jest.fn()]

    render(<BookingForm timesState={timesData}/>);
    let label = screen.getByText("Choose date");
    expect(label).toBeInTheDocument();
})

test('Submit button calls function', ()=>{
    const timesData = [["17:00", "18:00"], jest.fn()]

    const {getByText} = render(<BookingForm timesState={timesData}/>);
    const button = getByText("Make your reservation");
    expect(screen.queryByText("Submitted")).toBeNull();
    fireEvent.click(button);
    expect(getByText("Submitted")).toBeInTheDocument();
})

