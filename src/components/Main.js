import './styles/Main.css';
import Hero from './Hero.js';

function Main() {
    return(
        <main className="lg-grid12col sm-grid1col">
            <Hero/>
            <section className="highlights middle8columns">
                Highlights
            </section>
            <section className="testimonials middle8columns">
                Testimonials
            </section>
            <section className="about middle8columns">
                About
            </section>
        </main>
    );
}

export default Main;