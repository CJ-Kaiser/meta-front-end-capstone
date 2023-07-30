import './styles/Hero.css';
import food from '../../images/restaurantfood.jpg';

function Hero() {
    return (
        <section className="hero lg-grid12col">
            <div className="hero-bg"></div>
            <div className="heroInner middle8columns">
                <div className="heroInfo">
                    <h1 className="displayTitle">Little Lemon</h1>
                    <h1 className="subtitle">Chicago</h1>
                    <p className="heroText">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button style={{marginTop:20+'px'}}>Reserve a table</button>
                </div>
                <div className="heroImgContainer">
                    <img src={food} />
                </div>
            </div>
        </section>
    );
}

export default Hero;