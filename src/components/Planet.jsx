// Planet.jsx

import "/src/styles/Planet.css";
import { Mercury } from "./planets/Mercury";
import { MercuryInternal } from "./planets/MercuryInternal";
import mercuryMagnifier from "../assets/geology-mercury.png";
import { Venus } from "./planets/Venus";
import { VenusInternal } from "./planets/VenusInternal";
import venusMagnifier from "../assets/geology-venus.png";
import { Earth } from "./planets/Earth";
import { EarthInternal } from "./planets/EarthInternal";
import earthMagnifier from "../assets/geology-earth.png";
import { Mars } from "./planets/Mars";
import { MarsInternal } from "./planets/MarsInternal";
import marsMagnifier from "../assets/geology-mars.png";
import { Jupiter } from "./planets/Jupiter";
import { JupiterInternal } from "./planets/JupiterInternal";
import jupiterMagnifier from "../assets/geology-jupiter.png";
import { Saturn } from "./planets/Saturn";
import { SaturnInternal } from "./planets/SaturnInternal";
import saturnMagnifier from "../assets/geology-saturn.png";
import { Uranus } from "./planets/Uranus";
import { UranusInternal } from "./planets/UranusInternal";
import uranusMagnifier from "../assets/geology-uranus.png";
import { Neptune } from "./planets/Neptune";
import { NeptuneInternal } from "./planets/NeptuneInternal";
import neptuneMagnifier from "../assets/geology-neptune.png";

export default function Planet(props) {
    const name = props.name;
    const capitalizedName = props.name[0].toUpperCase() + props.name.slice(1);
    let planetComponent;
    let magnifier;
    switch (name) {
        case "mercury":
            planetComponent =
                props.feature === "structure" ? (
                    <MercuryInternal />
                ) : (
                    <Mercury />
                );
            magnifier = mercuryMagnifier;
            break;
        case "venus":
            planetComponent =
                props.feature === "structure" ? <VenusInternal /> : <Venus />;
            magnifier = venusMagnifier;
            break;
        case "earth":
            planetComponent =
                props.feature === "structure" ? <EarthInternal /> : <Earth />;
            magnifier = earthMagnifier;
            break;
        case "mars":
            planetComponent =
                props.feature === "structure" ? <MarsInternal /> : <Mars />;
            magnifier = marsMagnifier;
            break;
        case "jupiter":
            planetComponent =
                props.feature === "structure" ? (
                    <JupiterInternal />
                ) : (
                    <Jupiter />
                );
            magnifier = jupiterMagnifier;
            break;
        case "saturn":
            planetComponent =
                props.feature === "structure" ? <SaturnInternal /> : <Saturn />;
            magnifier = saturnMagnifier;
            break;
        case "uranus":
            planetComponent =
                props.feature === "structure" ? <UranusInternal /> : <Uranus />;
            magnifier = uranusMagnifier;
            break;
        case "neptune":
            planetComponent =
                props.feature === "structure" ? (
                    <NeptuneInternal />
                ) : (
                    <Neptune />
                );
            magnifier = neptuneMagnifier;
            break;
    }
    return (
        <div id="planet-container" className="planet-container initialFadeIn">
            <div
                className={props.name}
                title={
                    props.feature === "overview"
                        ? `The planet ${name}.`
                        : props.feature === "structure"
                        ? `${capitalizedName}'s interior structure.`
                        : `${capitalizedName}'s surface.`
                }
                alt={
                    props.feature === "overview"
                        ? `The planet ${name}.`
                        : props.feature === "structure"
                        ? `${capitalizedName}'s interior structure.`
                        : "${capitalizedName}'s surface."
                }
            >
                {planetComponent}
            </div>
            <img
                className="with-magnifier"
                src={magnifier}
                style={
                    props.feature === "surface"
                        ? { opacity: "1" }
                        : { opacity: "0" }
                }
            />
        </div>
    );
}
