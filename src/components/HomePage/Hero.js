import './styles/Hero.css';
import food from '../../images/restaurantfood.jpg';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-bg"></div>
            <div className="heroInner homepageMaxWidth">
                <div className="heroInfo">
                    <div className="heroInfoBackdrop">
                        <h1 className="displayTitle">Little Lemon</h1>
                        <h1 className="subtitle">Chicago</h1>
                        <p className="heroText">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <Link to="/booking" style={{marginTop:20+'px'}} className="btn">Reserve a table</Link>
                </div>
                <div className="heroImgContainer">
                    <img src={food} alt="Chef holding a tray of food"/>
                </div>
            </div>
        </section>
    );
}

export default Hero;