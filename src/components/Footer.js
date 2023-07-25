import './styles/Footer.css'
import logo from '../images/logo.svg';

function Footer() {
    return(
        <footer className="lg-grid12col">
            <div className="ft-logo imgContainer">
                <img src={logo} className="imgFill"/>
            </div>
            <div className="ft-doormat">
                <p>Doormat Navigation</p>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div className="ft-contact">
                <p>Contact</p>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="ft-social">
                <p>Social Media Links</p>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;