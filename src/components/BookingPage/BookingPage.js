import BookingForm from './BookingForm';
import './styles/BookingPage.css';

function BookingPage({timesState}) {
    return (
        <div className='booking'>
            <h1>Booking Page</h1>
            <BookingForm timesState={timesState}/>
        </div>
    );
};

export default BookingPage;