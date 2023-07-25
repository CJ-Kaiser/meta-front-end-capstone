import logo from '../images/logo.svg';
import './styles/Header.css';

function Header() {
    return(
        <header className="imgContainer">
            <img src={logo} alt="Little Lemon Logo"/>
        </header>
    );
}

export default Header;