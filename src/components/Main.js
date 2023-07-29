import './styles/Main.css';
import Hero from './Hero.js';
import Highlights from './Highlights.js';
import Testimonials from './Testimonials.js';
import About from './About';

function Main() {
    return(
        <main className='lg-grid12col sm-grid1col'>
            <Hero/>
            <Highlights/>
            <Testimonials/>
            <About/>
        </main>
    );
}

export default Main;


