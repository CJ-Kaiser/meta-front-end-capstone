import './styles/Footer.css'
import logo from '../images/logo.svg';

function Footer() {
    return(
        <footer className="lg-grid12col">
            <div className="ft-logo imgContainer">
                <img src={logo} className="logoImg"/>
            </div>
            <div className="ft-doormat">
                <p className="sectionCategory">Doormat Navigation</p>
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
                <p className="sectionCategory">Contact</p>
                <ul className="navList">
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="ft-social">
                <p className="sectionCategory">Social Media Links</p>
                <ul className="navList">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;