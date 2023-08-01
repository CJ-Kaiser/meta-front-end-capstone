import './styles/Main.css';

import HomePage from './HomePage/HomePage.js';
import BookingPage from './BookingPage/BookingPage.js';
import {Routes, Route} from "react-router-dom";
import {useReducer} from 'react';

function Main() {

  function updateTimes(state, action){
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
  }

  function initializeTimes() {
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage times={availableTimes}/>}></Route>
      </Routes>
    </main>
  );
}

export default Main;
