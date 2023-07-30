import './styles/HomePage.css';
import Hero from './Hero.js';
import Highlights from './Highlights.js';
import Testimonials from './Testimonials.js';
import About from './About';

function HomePage() {
    return(
        <div className='home lg-grid12col sm-grid1col'>
            <Hero/>
            <Highlights/>
            <Testimonials/>
            <About/>
        </div>
    );
}

export default HomePage;


