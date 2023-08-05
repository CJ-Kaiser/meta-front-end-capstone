
import { useState } from 'react';
import { todayString } from '../../api';

function BookingForm({ timesState, submitCallback }) {
    const [availableTimes, timesDispatch] = timesState;
    const [submitText, setSubmitText] = useState("Make your reservation");

    const [formInputs, setFormInputs] = useState({
        date: todayString(),
        time: '17:00',
        people: 1,
        occasion: "None"
    });

    function dateChanged(e) {
        setFormInputs({ ...formInputs, date: e.target.value });
        timesDispatch({
            type: 'changed-date',
            date: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target);
        setSubmitText("Submitted");
        submitCallback(e.target);
    }

    return (
        <div className="formBlock">
            <form onSubmit={handleSubmit}>
                <div className="horizontal">
                    <label htmlFor="res-date" className="sectionCategory">Choose date</label>
                    <input
                        className="paragraphText"
                        type="date"
                        name="date"
                        id="res-date"
                        value={formInputs.date}
                        onChange={e => dateChanged(e)}
                    />
                </div>
                <div className="horizontal">
                    <label htmlFor="res-time" className="sectionCategory">Choose time</label>
                    <select id="res-time "
                        name="time"
                        value={formInputs.time}
                        onChange={e => setFormInputs({ ...formInputs, time: e.target.value })}
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
                    <label htmlFor="guests" className="sectionCategory">Number of guests</label>
                    <input
                        className="paragraphText"
                        type="number"
                        name="guestNumber"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={formInputs.people}
                        onChange={e => setFormInputs({ ...formInputs, people: e.target.value })}
                    />
                </div>
                <div className="horizontal">
                    <label htmlFor="occasion" className="sectionCategory">Occasion</label>
                    <select
                        className="paragraphText"
                        name="occasion"
                        id="occasion"
                        value={formInputs.occasion}
                        onChange={e => setFormInputs({ ...formInputs, occasion: e.target.value })}
                    >
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div>
                    <input type="submit" className="btn" value={submitText} />
                </div>
            </form>
        </div>
    );
};

export default BookingForm;