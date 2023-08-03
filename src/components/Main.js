import './styles/Main.css';

import HomePage from './HomePage/HomePage.js';
import BookingPage from './BookingPage/BookingPage.js';
import {Routes, Route} from "react-router-dom";
import {useReducer} from 'react';


export function initializeTimes() {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
}

export function updateTimes(state, action){
  console.log(action);
  console.log(state);
  return state;
  /*
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  */
}

function Main() {

  const [availableTimes, timesDispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage timesState={[availableTimes, timesDispatch]}/>}></Route>
      </Routes>
    </main>
  );
}

export default Main;
