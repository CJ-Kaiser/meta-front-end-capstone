import logo from '../images/logo.svg';
import HeaderNav from './HeaderNav';
import './styles/Header.css';

function Header() {
    return(
        <header className='homepageMaxWidth'>
            <div className='imgContainer'>
                <img src={logo} className="logoImg" alt="Little Lemon Logo"/>
            </div>
            <HeaderNav/>
        </header>
    );
}

export default Header;