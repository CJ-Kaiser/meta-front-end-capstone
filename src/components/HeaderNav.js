import './styles/HeaderNav.css'
import Nav from './Nav.js';

export const linksData = [
    {
        anchor: false,
        text: "Home",
        path: "/"
    },
    {
        anchor: false,
        text: "About",
        path: "/"
    },
    {
        anchor: false,
        text: "Menu",
        path: "/"
    },
    {
        anchor: false,
        text: "Reservations",
        path: "/booking"
    },
    {
        anchor: false,
        text: "Order Online",
        path: "/"
    },
    {
        anchor: false,
        text: "Login",
        path: "/"
    },
]

function HeaderNav() {
    return(
        <Nav
            links={linksData}
            style='headerNav'
        />
    );
}

export default HeaderNav;