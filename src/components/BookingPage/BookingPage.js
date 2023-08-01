import BookingForm from './BookingForm';
import './styles/BookingPage.css';

function BookingPage(props) {
    
    return (
        <div className='booking'>
            <h1>Booking Page</h1>
            <BookingForm times={props.times}/>
        </div>
    );
};

export default BookingPage;