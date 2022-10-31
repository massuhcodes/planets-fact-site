// Planet.jsx

import "/src/styles/Planet.css";
import { Mercury } from "./planets/Mercury";
import { MercuryInternal } from "./planets/MercuryInternal";
import { Venus } from "./planets/Venus";
import { VenusInternal } from "./planets/VenusInternal";
import { Earth } from "./planets/Earth";
import { EarthInternal } from "./planets/EarthInternal";
import { Mars } from "./planets/Mars";
import { MarsInternal } from "./planets/MarsInternal";
import { Jupiter } from "./planets/Jupiter";
import { JupiterInternal } from "./planets/JupiterInternal";
import { Saturn } from "./planets/Saturn";
import { SaturnInternal } from "./planets/SaturnInternal";
import { Uranus } from "./planets/Uranus";
import { UranusInternal } from "./planets/UranusInternal";
import { Neptune } from "./planets/Neptune";
import { NeptuneInternal } from "./planets/NeptuneInternal";

export default function Planet(props) {
    const name = props.name;
    const capitalizedName = props.name[0].toUpperCase() + props.name.slice(1);
    let planetComponent;
    switch (name) {
        case "mercury":
            planetComponent =
                props.feature === "structure" ? (
                    <MercuryInternal />
                ) : (
                    <Mercury />
                );
            break;
        case "venus":
            planetComponent =
                props.feature === "structure" ? <VenusInternal /> : <Venus />;
            break;
        case "earth":
            planetComponent =
                props.feature === "structure" ? <EarthInternal /> : <Earth />;
            break;
        case "mars":
            planetComponent =
                props.feature === "structure" ? <MarsInternal /> : <Mars />;
            break;
        case "jupiter":
            planetComponent =
                props.feature === "structure" ? (
                    <JupiterInternal />
                ) : (
                    <Jupiter />
                );
            break;
        case "saturn":
            planetComponent =
                props.feature === "structure" ? <SaturnInternal /> : <Saturn />;
            break;
        case "uranus":
            planetComponent =
                props.feature === "structure" ? <UranusInternal /> : <Uranus />;
            break;
        case "neptune":
            planetComponent =
                props.feature === "structure" ? (
                    <NeptuneInternal />
                ) : (
                    <Neptune />
                );
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
                src={`/src/assets/geology-${props.name}.png`}
                style={
                    props.feature === "surface"
                        ? { opacity: "1" }
                        : { opacity: "0" }
                }
            />
        </div>
    );
}
