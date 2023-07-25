import './styles/Hero.css';
import food from '../images/restaurantfood.jpg';

function Hero() {
    return (
        <section className="hero lg-grid12col">
            <div className="heroInner middle8columns">
                <div className="heroInfo">
                    <h1 className="displayTitle">Little Lemon</h1>
                    <h1 className="subtitle">Chicago</h1>
                </div>
                <div className="heroImgContainer">
                    <img src={food}/>
                </div>
            </div>
        </section>
    );
}

export default Hero;