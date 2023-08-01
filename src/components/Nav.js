import { Link } from 'react-router-dom';

function Nav({links, style=""}) {
    return(
        <nav className={style}>
            <ul className='navList'>
                {links.map((data) => (
                    data.anchor === true ? <li key={data.text}><a href={data.path}>{data.text}</a></li>
                                : <li key={data.text}><Link to={data.path}>{data.text}</Link></li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;