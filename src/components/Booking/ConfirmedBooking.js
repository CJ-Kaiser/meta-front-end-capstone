import { Link } from 'react-router-dom';
import './styles/ConfirmedBooking.css';

function ConfirmedBooking() {
    return (
        <section className="confirmedBooking">
            <h1 className="displayTitle">Booking Confirmed</h1>
            <Link to="/"><button class="btn">Back</button></Link>
        </section>
    );
}

export default ConfirmedBooking;