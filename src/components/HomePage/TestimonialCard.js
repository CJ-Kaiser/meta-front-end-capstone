import './styles/TestimonialCard.css';

import Stars from '../Stars';

function TestimonialCard({ rating, customer, imageSrc, reviewText }) {
    return (
        <article className="testimonialCard">
            <Stars rating={rating}/>
            <div className="testimonialBio">
                <img src={imageSrc}/>
                <p className="sectionCategory">{customer}</p>
            </div>
            <p className="paragraphText">{reviewText}</p>
        </article>
    );
}

export default TestimonialCard;