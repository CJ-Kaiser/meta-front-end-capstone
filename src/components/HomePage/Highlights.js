import './styles/Highlights.css';

import bruschetta from '../../images/bruschetta.png';
import greekSalad from '../../images/greekSalad.jpg';
import lemonDessert from '../../images/lemonDessert.jpg';
import FoodCard from './FoodCard.js';
import { Link } from 'react-router-dom';

const cardData = [
    {
        name: 'Greek Salad',
        price: 12.99,
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary crutons.',
        image: greekSalad,
    },
    {
        name: 'Bruschetta',
        price: 5.99,
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        image: bruschetta,
    },
    {
        name: 'Lemon Dessert',
        price: 5.00,
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        image: lemonDessert,
    },
];

function Highlights() {
    return (
        <section className="highlights middle8columns homepageMaxWidth">
            <div className="highlightsHeader">
                <h1 className="displayTitle">This Week's Specials!</h1>
                <Link to="/" className="btn">Order Online</Link>
            </div>
            <div className="cardHolder">
                {cardData.map((data) => (
                    <FoodCard 
                        key={data.name}
                        name={data.name}
                        price={data.price}
                        description={data.description}
                        image={data.image}
                    />
                ))}
            </div>
        </section>
    );
}

export default Highlights;