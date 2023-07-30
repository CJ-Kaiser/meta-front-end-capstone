import './styles/Footer.css'
import logo2 from '../images/logo2.png';
import Nav from './Nav.js';
import {linksData as siteLinks} from './HeaderNav.js';

const socialLinks = [
    {
        anchor: true,
        text: "Facebook",
        path: "https://www.facebook.com/"
    },
    {
        anchor: true,
        text: "Twitter",
        path: "https://twitter.com/"
    },
    {
        anchor: true,
        text: "Instagram",
        path: "https://www.instagram.com/"
    },
];

function Footer() {
    return(
        <footer className="lg-grid12col">
            <div className="ft-logo imgContainer">
                <img src={logo2} className="logoImg"/>
            </div>
            <div className="ft-doormat">
                <h1 className="cardTitle">Doormat Navigation</h1>
                <Nav links={siteLinks}/>
            </div>
            <div className="ft-contact">
                <h1 className="cardTitle">Contact</h1>
                <ul className='navList'>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="ft-social">
                <h1 className="cardTitle">Social Media Links</h1>
                <Nav links={socialLinks}/>
            </div>
        </footer>
    );
}

export default Footer;