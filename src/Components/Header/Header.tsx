import {Link} from 'react-router-dom';
import {HeaderStyles} from './Header.styles.tw';

function Header() {
    return (
        <HeaderStyles className="header">
            <nav className={'header-navigation'}>
                <ul className="header-navigation-list">
                    <li className="header-navigation-list__item"><Link to="/street1" className="">Улица №1</Link></li>
                    <li className="header-navigation-list__item"><Link to="/street2" className="">Улица №2</Link></li>
                    <li className="header-navigation-list__item"><Link to="/street3" className="">Улица №3</Link>
                    </li>
                </ul>
            </nav>
        </HeaderStyles>
    );
}

export default Header;
