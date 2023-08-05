import './styles/Main.css';

import HomePage from './HomePage/HomePage.js';
import BookingPage from './Booking/BookingPage.js';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer, useEffect } from 'react';
import { fetchAPI, submitAPI, todayString } from '../api';
import ConfirmedBooking from './Booking/ConfirmedBooking';

function Main() {

  const [timesState, timesDispatch] = useReducer(updateTimes, initializeTimesData());
  const navigate = useNavigate();

  useEffect(() => {
    if (timesState.date) {
      fetchAPI(new Date(timesState.date))
        .then(response => JSON.parse(response))
        .then(availableTimes =>
          timesDispatch({
            type: 'fetch-times-success',
            times: availableTimes,
          })
        );
    }
  }, [timesState.date]);

  function initializeTimesData() {
    return {
      date: todayString(),
      times: [
        "0:00",
      ]
    };
  }

  function updateTimes(state, action) {
    switch (action.type) {
      case 'changed-date':
        return {
          ...state,
          date: action.date,
        }
      case 'fetch-times-success':
        return {
          ...state,
          times: action.times,
        }
    }
  }

  function submitForm(formData) {
    console.log(formData);
    submitAPI(formData)
      .then(response => JSON.parse(response))
      .then(result => {
        if(result)
          navigate('/confirmedBooking');
      });
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage timesState={[timesState, timesDispatch]} submitCallback={submitForm} />}></Route>
        <Route path="/confirmedBooking" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
