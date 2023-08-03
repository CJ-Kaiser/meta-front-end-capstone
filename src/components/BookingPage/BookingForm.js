
import {useState} from 'react';

function BookingForm({timesState}) {

    const [availableTimes, timesDispatch] = timesState;
    const [submitText, setSubmitText] = useState("Make your reservation");

    const [formInputs, setFormInputs] = useState({
        date: Date.now.toString(),
        time: '17:00',
        people: 1,
        occasion: "None"
    });

    function dateChanged(e) {
        setFormInputs({...formInputs, date: e.target.value});
        timesDispatch({
            type: 'changed-date',
            date: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitText("Submitted");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={formInputs.date}
                onChange={e=>dateChanged(e)}
            />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time "
                value={formInputs.time}
                onChange={e=> setFormInputs({...formInputs, time: e.target.value})}
            >
                {availableTimes.map(time => (
                    <option key={time}>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10"
                id="guests"
                value={formInputs.people}
                onChange={e => setFormInputs({...formInputs, people: e.target.value})}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={formInputs.occasion}
                onChange={e => setFormInputs({...formInputs, occasion: e.target.value})}
            >
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value={submitText}/>
        </form>
    );
};

export default BookingForm;