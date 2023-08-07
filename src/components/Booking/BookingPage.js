import BookingForm from './BookingForm';
import './styles/BookingPage.css';

function BookingPage({timesState, submitCallback}) {
    return (
        <section className='booking'>
            <div className='titleWrap'>
                <h1 className="displayTitle">Reserve a Table</h1>
            </div>
            <BookingForm timesState={timesState} submitCallback={submitCallback}/>
        </section>
    );
};

export default BookingPage;