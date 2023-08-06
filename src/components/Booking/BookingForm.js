
import { useState } from 'react';
import { todayString } from '../../api';

function BookingForm({ timesState, submitCallback }) {
    const [availableTimes, timesDispatch] = timesState;

    const [formInputs, setFormInputs] = useState({
        date: todayString(),
        time: '17:00',
        people: 1,
        occasion: "None"
    });

    function validateForm(newState) {
        const dateValid = !isNaN(Date.parse(newState.date));
        const people = newState.people;
        const peopleValid = people > 0 && people < 11;
        
        const disableButton = !(dateValid && peopleValid);
        const form = document.getElementById("form");
        const submitBtn = document.getElementById("submit");
        if(disableButton){
            submitBtn.setAttribute("disabled", true);
            form.reportValidity();
        } else {
            submitBtn.removeAttribute("disabled");
        }
    }
    
    function dateChanged(e) {
        const newState = { ...formInputs, date: e.target.value };
        setFormInputs(newState);

        timesDispatch({
            type: 'changed-date',
            date: e.target.value,
        });
        validateForm(newState);
    };

    function timeChanged(e) {
        setFormInputs({ ...formInputs, time: e.target.value });
    }

    function guestsChanged(e) {
        const newState = { ...formInputs, people: e.target.value };
        console.log(newState);
        setFormInputs(newState);
        validateForm(newState);
    }

    function handleSubmit(e) {
        e.preventDefault();
        submitCallback(e.target);
    }

    return (
        <div className="formBlock">
            <form onSubmit={handleSubmit} id="form">
                <div className="horizontal">
                    <label htmlFor="res-date" className="sectionCategory">Choose date</label>
                    <input
                        className="paragraphText"
                        type="date"
                        name="date"
                        id="res-date"
                        required
                        value={formInputs.date}
                        onChange={e => dateChanged(e)}
                    />
                </div>
                <div className="horizontal">
                    <label htmlFor="res-time" className="sectionCategory">Choose time</label>
                    <select
                        className="paragraphText"
                        id="res-time"
                        name="time"
                        value={formInputs.time}
                        required
                        onChange={e => timeChanged(e)}
                    >
                        {availableTimes === undefined ? <option>Loading</option>
                            : availableTimes.times.map(time => (
                                <option key={time}>{time}</option>
                            )
                            )
                        }
                    </select>
                </div>
                <div className="horizontal">
                    <label htmlFor="res-guests" className="sectionCategory">Number of guests</label>
                    <input
                        className="paragraphText"
                        type="number"
                        name="guests"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="res-guests"
                        required
                        value={formInputs.people}
                        onChange={e => guestsChanged(e)}
                    />
                </div>
                <div className="horizontal">
                    <label htmlFor="res-occasion" className="sectionCategory">Occasion</label>
                    <select
                        className="paragraphText"
                        name="occasion"
                        id="res-occasion"
                        required
                        value={formInputs.occasion}
                        onChange={e => setFormInputs({ ...formInputs, occasion: e.target.value })}
                    >
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div>
                    <input type="submit" id="submit" className="btn" value={"Make your reservation"} />
                </div>
            </form>
        </div>
    );
};

export default BookingForm;