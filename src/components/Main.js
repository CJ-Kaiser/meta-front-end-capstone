import './styles/Main.css';

import HomePage from './HomePage/HomePage.js';
import BookingPage from './BookingPage/BookingPage.js';
import {Routes, Route} from "react-router-dom";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
