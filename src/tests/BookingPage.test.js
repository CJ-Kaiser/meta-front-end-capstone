
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

test('Submit succeeds with valid data', ()=>{
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

test('form fields are all required', ()=>{
    const timesData = [{
        date: todayString(),
        times: ["17:00", "18:00"],
    },
    jest.fn()]

    const mockCallback = jest.fn();

    render(<BookingForm timesState={timesData} submitCallback={mockCallback}/>);

    const dateInput = screen.getByLabelText(/date/);
    const timeInput = screen.getByLabelText(/time/);
    const guestsInput = screen.getByLabelText(/guests/);
    const occasionInput =screen.getByLabelText(/Occasion/);

    const arr = [dateInput, timeInput, guestsInput, occasionInput];

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      expect(element.hasAttribute("required")).toBe(true);
    }
})

test('guests field has min and max attributes', ()=>{
    const timesData = [{
        date: todayString(),
        times: ["17:00", "18:00"],
    },
    jest.fn()]

    const mockCallback = jest.fn();

    render(<BookingForm timesState={timesData} submitCallback={mockCallback}/>);
    const guestsInput = screen.getByLabelText(/guests/);

    expect(guestsInput.hasAttribute("min")).toBe(true);
    expect(guestsInput.hasAttribute("max")).toBe(true);
})

test('Submit fails with bad date', ()=>{
    const timesData = [{
        date: todayString(),
        times: ["17:00", "18:00"],
    },
    jest.fn()]

    const mockCallback = jest.fn();

    const result = render(<BookingForm timesState={timesData} submitCallback={mockCallback}/>);

    const dateInput = result.container.querySelector('#res-date');
    fireEvent.change(dateInput, {target: {value:"not date"}});

    const button = screen.getByText("Make your reservation");
    fireEvent.click(button);
    expect(mockCallback).not.toHaveBeenCalled();
})

test('Submit fails with bad guest count', ()=>{
    const timesData = [{
        date: todayString(),
        times: ["17:00", "18:00"],
    },
    jest.fn()]

    const mockCallback = jest.fn();

    const result = render(<BookingForm timesState={timesData} submitCallback={mockCallback}/>);

    const guestInput = result.container.querySelector('#res-guests');
    fireEvent.change(guestInput, {target: {value: 11}});

    const button = screen.getByText("Make your reservation");
    fireEvent.click(button);
    expect(mockCallback).not.toHaveBeenCalled();
})

