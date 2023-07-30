import './styles/FoodCard.css';
import iconDelivery from '../../images/iconDelivery.png';

function FoodCard({name, price, description, image}) {
    return (
        <article className='foodCard'>
            <img className="cardImage" src={image}/>
            <div className="cardContent">
                <div className="cardHeader">
                    <h1 className="cardTitle">{name}</h1>
                    <p className="highlightText">${price}</p>
                </div>
                <p className="paragraphText">{description}</p>
                <div className="cardFooter">
                    <p className="sectionCategory">Order a delivery</p>
                    <img className="cardIcon" src={iconDelivery}/>
                </div>
            </div>
        </article>
    );
}

export default FoodCard;