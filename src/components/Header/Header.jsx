import './Header.css';
import logo from '../../images/logo-navbar.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to='/'><img src={logo} style={{ width: '100px', height: 'auto' }} alt="Logo do site" /></Link>
                <ul>
                    <li><Link to="/about">Sobre nós</Link></li>
                    <li><Link to="/product">Produto</Link></li>
                    <li><Link to="/dashboard">Estatística</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </nav>
        </header>
    );
}
