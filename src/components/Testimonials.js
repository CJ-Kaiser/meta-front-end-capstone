import TestimonialCard from "./TestimonialCard";
import './styles/Testimonials.css';

const testimonialData = [
    {
        rating: 5,
        customer: 'Dara',
        imageSrc: 'https://i.pravatar.cc/150?img=5',
        text: "Mario and Adrian are top class chefs.",
    },
    {
        rating: 4,
        customer: 'John',
        imageSrc: 'https://i.pravatar.cc/150?img=52',
        text: "Amazing blend of flavors and atmosphere.",
    },
    {
        rating: 5,
        customer: 'Nikos',
        imageSrc: 'https://i.pravatar.cc/150?img=68',
        text: "The food reminds me of home.",
    },
    {
        rating: 5,
        customer: 'Maria',
        imageSrc: 'https://i.pravatar.cc/150?img=10',
        text: "You HAVE to try the cake! Excellent service.",
    },
]

function Testimonials() {
    return (
        <section className="testimonials lg-grid12col">
            <div className="middle8columns">
                <h1 className="displayTitle">Testimonials</h1>
                <div className="testimonialContainer">
                    {testimonialData.map((data) => (
                        <TestimonialCard
                            rating={data.rating}
                            customer={data.customer}
                            imageSrc={data.imageSrc}
                            reviewText={data.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;

