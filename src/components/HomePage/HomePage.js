import './styles/HomePage.css';
import Hero from './Hero.js';
import Highlights from './Highlights.js';
import Testimonials from './Testimonials.js';
import About from './About';

function HomePage() {
    return(
        <div className='home'>
            <Hero/>
            <Highlights/>
            <Testimonials/>
            <About/>
        </div>
    );
}

export default HomePage;


