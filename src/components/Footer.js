import './styles/Footer.css'
import logo2 from '../images/logo2.png';

function Footer() {
    return(
        <footer className="lg-grid12col">
            <div className="ft-logo imgContainer">
                <img src={logo2} className="logoImg"/>
            </div>
            <div className="ft-doormat">
                <h1 className="cardTitle">Doormat Navigation</h1>
                <ul className="navList">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div className="ft-contact">
                <h1 className="cardTitle">Contact</h1>
                <ul className="navList">
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="ft-social">
                <h1 className="cardTitle">Social Media Links</h1>
                <ul className="navList">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;