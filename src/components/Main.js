import './styles/Main.css';

function Main() {
    return(
        <main className="lg-grid12col sm-grid1col">
            <section className="hero middle8columns">
                <h1 className="displayTitle">Little Lemon</h1>
                <h1 className="subtitle">Chicago</h1>
            </section>
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