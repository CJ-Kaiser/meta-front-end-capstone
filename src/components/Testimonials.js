import TestimonialCard from "./TestimonialCard";


const testimonialData = [
    {
        rating: 5,
        customer: 'Dara',
        text: "You HAVE to try the cake! Excellent service.",
    },
    {
        rating: 5,
        customer: 'John',
        text: "Amazing blend of flavors and atmosphere",
    },
    {
        rating: 4,
        customer: 'Nikos',
        text: "Very American, but the food still reminds me of home",
    },
    {
        rating: 5,
        customer: 'Maria',
        text: "Mario and Adrian are top class!",
    },
]

function Testimonials() {
    return (
        <section className="testimonials middle8columns">
            <h1 className="displayTitle">Testimonials</h1>
            <div className="testimonyContainer">
                {testimonialData.map((data) => (
                    <TestimonialCard
                        rating={data.rating}
                        customer={data.customer}
                        reviewText={data.text}
                    />
                ))}
            </div>
        </section>
    );
}

export default Testimonials;

