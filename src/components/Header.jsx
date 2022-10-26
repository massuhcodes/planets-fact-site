import "/src/styles/Header.css";
import { nanoid } from "nanoid";
import { expandOverhead, features } from "../utils/utils";
import hamburger from "/src/assets/icon-hamburger.svg";
import chevron from "/src/assets/icon-chevron.svg";

export default function Header(props) {
    // planet choices for mobile layout
    const verticalPlanetChoices = props.planets.map((planet, index) => (
        <li
            key={nanoid()}
            className="vertical-planet-choice-container"
            onClick={() => props.getPlanet("vertical", index)}
        >
            <div className="dot-name-container">
                <span
                    className="dot"
                    style={{ backgroundColor: planet.color }}
                />
                <span className="name">{planet.name.toUpperCase()}</span>
            </div>
            <img src={chevron} />
        </li>
    ));

    // planet choices for tablet, desktop, etc. layouts
    const horizontalPlanetChoices = props.planets.map((planet, index) => (
        <li
            key={nanoid()}
            className="horizontal-planet-choice"
            onClick={() => props.getPlanet("horizontal", index)}
            style={
                planet.name === props.chosenPlanet.name
                    ? { color: props.color }
                    : {}
            }
        >
            {planet.name.toUpperCase()}
        </li>
    ));

    // Header component's features (mobile)
    const headerFeatures = features.map((feature) => (
        <li
            key={nanoid()}
            id={feature}
            className={`header-feature-wrapper ${
                props.chosenFeature === feature ? "selected" : ""
            }`}
            onClick={() => props.switchFeatureTo(feature)}
            style={
                props.chosenFeature === feature
                    ? {
                          color: "white",
                          "--selected-feature-after-background-color":
                              props.color,
                      }
                    : {}
            }
        >
            {feature.toUpperCase()}
        </li>
    ));

    return (
        <div className="header-container">
            <header>
                <h2>{"the planets".toUpperCase()}</h2>
                {/* will be removed for larger-than-mobile screens */}
                <img id="hamburger" src={hamburger} onClick={expandOverhead} />
                {/* tablet, desktop, etc. */}
                <ul className="horizontal-planet-choice-container">
                    {horizontalPlanetChoices}
                </ul>
            </header>
            {/* will be removed for larger-than-mobile screens */}
            <ul className="overhead-container" id="overhead">
                {verticalPlanetChoices}
            </ul>
            {/* will be removed for larger-than-mobile screens */}
            <ul className="header-features-container">{headerFeatures}</ul>
        </div>
    );
}
