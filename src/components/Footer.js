
import logo from '../images/logo.svg';

function Footer() {
    return(
        <footer>
            <div>
                <img src={logo}/>
            </div>
            <div>
                <p>Doormat Navigation</p>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order Online</a></li>
                    <li><a>Login</a></li>
                </ul>
            </div>
            <div>
                <p>Contact</p>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
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