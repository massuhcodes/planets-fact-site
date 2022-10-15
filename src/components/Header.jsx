import "/src/styles/Header.css";
import hamburger from "/src/assets/icon-hamburger.svg";
import chevron from "/src/assets/icon-chevron.svg";

export default function Header(props) {
    const choices = props.names.map((planet, index) => {
        let color;
        switch (planet) {
            case "mercury":
                color = "#DEF4FC";
                break;
            case "venus":
                color = "#F7CC7F";
                break;
            case "earth":
                color = "#545BFE";
                break;
            case "mars":
                color = "#FF6A45";
                break;
            case "jupiter":
                color = "#ECAD7A";
                break;
            case "saturn":
                color = "#FCCB6B";
                break;
            case "uranus":
                color = "#65F0D5";
                break;
            case "neptune":
                color = "#497EFA";
                break;
            default:
                break;
        }
        return (
            <div
                key={index.toString()}
                className={`planet-choice common ${
                    planet !== "neptune" ? "with-bottom-border" : ""
                }`}
                onClick={() => props.getChoice(index)}
            >
                <div className="dot--name">
                    <span className="dot" style={{ backgroundColor: color }} />
                    <p>{planet.toUpperCase()}</p>
                </div>
                <img src={chevron} />
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
                <h2>THE PLANETS</h2>
                <img id="hamburger" src={hamburger} onClick={expandOverhead} />
            </header>
            <div className="overhead-container common" id="overhead">
                {choices}
            </div>
            <ul className="Header-subheader common">
                <li>OVERVIEW</li>
                <li>STRUCTURE</li>
                <li>SURFACE</li>
            </ul>
        </div>
    );
}
