import "/src/styles/Header.css";
import hamburger from "/src/assets/icon-hamburger.svg";

export default function Header() {
    return (
        <div className="Header-container">
            <header className="common">
                <nav>
                    <h1>THE PLANETS</h1>
                    <img src={hamburger} />
                </nav>
            </header>
            <ul className="Header-subheader common">
                <li>OVERVIEW</li>
                <li>STRUCTURE</li>
                <li>SURFACE</li>
            </ul>
        </div>
    );
}
