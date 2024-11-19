import './Header.css';
import logo from '../../images/logo-navbar.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to='/'><img className='logo' src={logo} alt="Logo do site" /></Link>
                <ul>
                    <li><Link to="/about"><span>S</span><span>o</span><span>b</span><span>r</span><span>e</span> <span>n</span><span>ó</span><span>s</span></Link></li>
                    <li><Link to="/product"><span>P</span><span>r</span><span>o</span><span>d</span><span>u</span><span>t</span><span>o</span></Link></li>
                    <li><Link to="/dashboard"><span>E</span><span>s</span><span>t</span><span>a</span><span>t</span><span>í</span><span>s</span><span>t</span><span>i</span><span>c</span><span>a</span><span>s</span></Link></li>
                    <li><Link to="/faq"><span>F</span><span>A</span><span>Q</span></Link></li>
                </ul>
            </nav>
        </header>
    );
}
