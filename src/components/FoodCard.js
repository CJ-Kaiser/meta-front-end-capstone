import './styles/FoodCard.css';
import iconDelivery from '../images/iconDelivery.png';

function FoodCard({name, price, description, image}) {
    return (
        <article className='foodCard'>
            <img src={image}/>
            <div>
                <p>{name}</p>
                <p>${price}</p>
            </div>
            <p>{description}</p>
            <div>
                <p>Order a delivery</p>
                <img src={iconDelivery}/>
            </div>
        </article>
    );
}

export default FoodCard;