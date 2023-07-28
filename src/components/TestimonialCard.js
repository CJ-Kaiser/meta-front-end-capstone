import './styles/TestimonialCard.css';

import Stars from './Stars';
import test from '../images/iconDelivery.png';

function TestimonialCard({ rating, customer, reviewText }) {
    return (
        <article className="testimonialCard">
            <Stars rating={rating}/>
            <div className="testimonialBio">
                <img src={test}/>
                <p className="sectionCategory">{customer}</p>
            </div>
            <p className="paragraphText">{reviewText}</p>
        </article>
    );
}

export default TestimonialCard;