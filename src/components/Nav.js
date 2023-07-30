import { Link } from 'react-router-dom';

function Nav({links, style=""}) {
    return(
        <nav className={style}>
            <ul className='navList'>
                {links.map((data) => (
                    data.anchor === true ? <li><a href={data.path}>{data.text}</a></li>
                                : <li><Link to={data.path}>{data.text}</Link></li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;