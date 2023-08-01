
import {useState} from 'react';

function BookingForm(props) {

    const [form, setForm] = useState({
        time: '17:00',
        people: 1,
        occasion: "None"
    });

    const availableTimes = props.times;
    
    return (
        <form>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date"/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time "
                value={form.time}
                onChange={e=> setForm({...form, time: e.target.value})}
            >
                {availableTimes.map(time => (
                    <option>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10"
                id="guests"
                value={form.people}
                onChange={e => setForm({...form, people: e.target.value})}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={form.occasion}
                onChange={e => setForm({...form, occasion: e.target.value})}
            >
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    );
};

export default BookingForm;