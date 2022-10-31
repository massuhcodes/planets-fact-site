// Planet.jsx

import "/src/styles/Planet.css";
import { Mercury } from "./svgs/planets/Mercury";
import { MercuryInternal } from "./svgs/planets/MercuryInternal";
import mercuryMagnifier from "../assets/geology-mercury.png";
import { Venus } from "./svgs/planets/Venus";
import { VenusInternal } from "./svgs/planets/VenusInternal";
import venusMagnifier from "../assets/geology-venus.png";
import { Earth } from "./svgs/planets/Earth";
import { EarthInternal } from "./svgs/planets/EarthInternal";
import earthMagnifier from "../assets/geology-earth.png";
import { Mars } from "./svgs/planets/Mars";
import { MarsInternal } from "./svgs/planets/MarsInternal";
import marsMagnifier from "../assets/geology-mars.png";
import { Jupiter } from "./svgs/planets/Jupiter";
import { JupiterInternal } from "./svgs/planets/JupiterInternal";
import jupiterMagnifier from "../assets/geology-jupiter.png";
import { Saturn } from "./svgs/planets/Saturn";
import { SaturnInternal } from "./svgs/planets/SaturnInternal";
import saturnMagnifier from "../assets/geology-saturn.png";
import { Uranus } from "./svgs/planets/Uranus";
import { UranusInternal } from "./svgs/planets/UranusInternal";
import uranusMagnifier from "../assets/geology-uranus.png";
import { Neptune } from "./svgs/planets/Neptune";
import { NeptuneInternal } from "./svgs/planets/NeptuneInternal";
import neptuneMagnifier from "../assets/geology-neptune.png";

export default function Planet(props) {
    // shorten
    const name = props.name;
    // for title and alt
    const capitalizedName = name[0].toUpperCase() + name.slice(1);
    // planet component to show based on user selection
    let planetComponent;
    // planet's magnifier when user wants to view surface feature
    let magnifier;
    // get both planet component and magnifier
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
                className={`${name}-wrapper`}
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
