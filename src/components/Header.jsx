// Header.jsx

import "/src/styles/Header.css";
import { nanoid } from "nanoid";
import { BurgerClose } from "react-icons-animated";
import { features } from "/src/utils/utilities";
import chevron from "/src/assets/icon-chevron.svg";

export default function Header(props) {
    // planet choices for mobile layout
    const verticalPlanetChoices = props.planets.map((planet, index) => (
        <li
            key={nanoid()}
            className="vertical-planet-choice-container"
            tabIndex="0"
            onKeyUp={(event) => {
                if (event.key === "Enter") props.getPlanet("vertical", index);
            }}
            onClick={() => props.getPlanet("vertical", index)}
        >
            <div className="dot-name-container">
                <span
                    className="dot"
                    style={{ backgroundColor: planet.hues.color }}
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
            className={`horizontal-planet-choice ${
                planet.name === props.chosenPlanet.name ? "selected" : ""
            }`}
            tabIndex="0"
            onKeyUp={(event) => {
                if (event.key === "Enter") props.getPlanet("horizontal", index);
            }}
            onClick={() => props.getPlanet("horizontal", index)}
            style={
                planet.name === props.chosenPlanet.name
                    ? {
                          "--selected-planet-color": props.color,
                      }
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
            tabIndex="0"
            onKeyUp={(event) => {
                if (event.key === "Enter") props.switchFeatureTo(feature);
            }}
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
                <div
                    className="toggler-wrapper"
                    tabIndex="0"
                    onKeyUp={(event) => {
                        if (event.key === "Enter") props.toggleBurger();
                    }}
                    onClick={props.toggleBurger}
                    title="The BurgerClose component along with its animation was made by Joe (a.k.a. frontend-joe). See the rest of his work at https://github.com/frontend-joe."
                >
                    <BurgerClose isClosed={props.burgerIsClosed} />
                </div>
                <ul className="horizontal-planet-choice-container">
                    {horizontalPlanetChoices}
                </ul>
            </header>
            {/* will be removed for larger-than-mobile screens */}
            <ul className="overhead-container hide" id="overhead">
                {verticalPlanetChoices}
            </ul>
            {/* will be removed for larger-than-mobile screens */}
            <ul className="header-features-container">{headerFeatures}</ul>
        </div>
    );
}
