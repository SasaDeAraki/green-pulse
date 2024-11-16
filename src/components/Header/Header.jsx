import './Header.css';

export default function Header() {
    return (
      <header style={{ backgroundColor: "#98ff96", padding: "10px", color: "white", textAlign: "center" }}>
        <nav>
            <h1><a href="/">GreenPulse</a></h1>
            <ul>
                <li><a href="/Tutorial">Tutorial</a></li>
                <li><a href="/about">Sobre</a></li>
                <li><a href="/faq">FAQ</a></li>
            </ul>
        </nav>
      </header>
    );
  }
