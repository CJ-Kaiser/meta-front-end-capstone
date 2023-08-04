import './styles/Main.css';

import HomePage from './HomePage/HomePage.js';
import BookingPage from './BookingPage/BookingPage.js';
import {Routes, Route} from "react-router-dom";
import {useReducer, useEffect} from 'react';
import { fetchAPI, todayString } from '../api';

function Main() {

  const [timesState, timesDispatch] = useReducer(updateTimes, initializeTimesData());

  function initializeTimesData() {
    return {
      date: todayString(),
      times: [
      "0:00",
      ]
    };
  }

  function updateTimes(state, action){
    switch(action.type) {
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

  useEffect(() => {
    if(timesState.date) {
      fetchAPI(new Date(timesState.date))
      .then(response=>JSON.parse(response))
      .then(availableTimes => 
        timesDispatch({
          type:'fetch-times-success',
          times: availableTimes,
      }));
    }
  }, [timesState.date]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage timesState={[timesState, timesDispatch]}/>}></Route>
      </Routes>
    </main>
  );
}

export default Main;
