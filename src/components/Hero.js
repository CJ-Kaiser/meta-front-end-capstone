import './styles/Hero.css';
import food from '../images/restaurantfood.jpg';

function Hero() {
    return (
        <section className="hero lg-grid12col">
            <div className="hero-bg"></div>
            <div className="heroInner middle8columns">
                <div className="heroInfo">
                    <h1 className="displayTitle"style={{marginTop:30 + 'px'}}>Little Lemon</h1>
                    <h1 className="subtitle" style={{marginTop:-16 + 'px', marginBottom:12 + 'px'}}>Chicago</h1>
                    <p className="heroText" style={{width:270 + 'px', lineHeight:140 + '%'}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
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