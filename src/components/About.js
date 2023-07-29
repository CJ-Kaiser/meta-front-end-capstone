import './styles/About.css';
import twoChefs from '../images/marioAdrian.jpg';
import oneChef from '../images/chefB.jpg';

function About() {
    return (
        <section className='about middle8columns'>
            <div className='aboutLeft'>
                <h1 className='displayTitle'>
                    Little Lemon
                </h1>
                <h1 className='subtitle'>Chicago</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
            </div>
            <div className='aboutRight'>
                <img src={oneChef} className='oneChef'/>
                <img src={twoChefs} className='twoChefs'/>
            </div>
        </section>
    );
}

export default About;
