import "/src/styles/Header.css";
import { nanoid } from "nanoid";
import { expandOverhead, features } from "../utils/utils";
import hamburger from "/src/assets/icon-hamburger.svg";
import chevron from "/src/assets/icon-chevron.svg";

export default function Header(props) {
    // planet choices for mobile layout
    const verticalPlanetChoices = props.planets.map((planet, index) => {
        return (
            <div
                key={nanoid()}
                className="vertical-planet-choice"
                onClick={() => props.getChoice(index)}
            >
                <div className="dot-name-container">
                    <span
                        className="dot"
                        style={{ backgroundColor: planet.color }}
                    />
                    <span className="name">{planet.name.toUpperCase()}</span>
                </div>
                <img src={chevron} />
            </div>
        );
    });

    // planet choices for tablet, desktop, etc. layouts
    const horizontalPlanetChoices = props.planets.map((planet, index) => (
        <li
            key={nanoid()}
            className="horizontal-planet-choice"
            onClick={() => props.getChoice(index)}
            style={
                planet === props.chosenPlanet
                    ? { color: props.color }
                    : { color: "#ffffff80" }
            }
        >
            {planet.name.toUpperCase()}
        </li>
    ));

    // Header component's features (mobile)
    const featureElements = features.map((feature) => (
        <li
            key={nanoid()}
            id={feature}
            onClick={() => props.switchFeatureTo(feature)}
            style={
                props.feature === feature
                    ? { color: "#fff", borderBottomColor: props.color }
                    : {}
            }
        >
            {feature.toUpperCase()}
        </li>
    ));

    return (
        <div className="Header-container">
            <header>
                <h2>{"the planets".toUpperCase()}</h2>
                <img id="hamburger" src={hamburger} onClick={expandOverhead} />
                {/** tablet, desktop, etc. */}
                <ul className="horizontal-planet-choice-container">
                    {horizontalPlanetChoices}
                </ul>
            </header>
            <div className="overhead-container" id="overhead">
                {verticalPlanetChoices}
            </div>
            <ul className="features">{featureElements}</ul>
        </div>
    );
}
