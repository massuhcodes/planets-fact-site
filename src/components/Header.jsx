import "/src/styles/Header.css";
import hamburger from "/src/assets/icon-hamburger.svg";

export default function Header(props) {
    const planetChoices = [
        "MERCURY",
        "VENUS",
        "EARTH",
        "MARS",
        "JUPITER",
        "SATURN",
        "URANUS",
        "NEPTUNE",
    ].map((planet, index) => {
        let color;
        switch (planet) {
            case "MERCURY":
                color = "#DEF4FC";
                break;
            case "VENUS":
                color = "#F7CC7F";
                break;
            case "EARTH":
                color = "#545BFE";
                break;
            case "MARS":
                color = "#FF6A45";
                break;
            case "JUPITER":
                color = "#ECAD7A";
                break;
            case "SATURN":
                color = "#FCCB6B";
                break;
            case "URANUS":
                color = "#65F0D5";
                break;
            case "NEPTUNE":
                color = "#497EFA";
                break;
            default:
                break;
        }
        return (
            <div
                key={index.toString()}
                className={`planet-choice common ${
                    planet !== "NEPTUNE" ? "with-bottom-border" : ""
                }`}
                onClick={props.compressOverhead}
            >
                <div className="dot--name">
                    <span className="dot" style={{ backgroundColor: color }} />
                    <p>{planet}</p>
                </div>
                <img src="/src/assets/icon-chevron.svg" />
            </div>
        );
    });

    function expandOverhead() {
        document.getElementById("hamburger").style.opacity = "0.1";
        document.getElementById("overhead").classList.add("expanded");
    }

    return (
        <div className="Header-container">
            <header className="common">
                <nav>
                    <h2>THE PLANETS</h2>
                    <img
                        id="hamburger"
                        src={hamburger}
                        onClick={expandOverhead}
                    />
                </nav>
            </header>
            <div className="overhead-container common" id="overhead">
                {planetChoices}
            </div>
            <ul className="Header-subheader common">
                <li>OVERVIEW</li>
                <li>STRUCTURE</li>
                <li>SURFACE</li>
            </ul>
        </div>
    );
}
