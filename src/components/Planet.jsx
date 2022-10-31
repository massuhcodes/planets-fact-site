// Planet.jsx

import "/src/styles/Planet.css";

export default function Planet(props) {
    const name = props.name[0].toUpperCase() + props.name.slice(1);
    return (
        <div id="planet-container" className="planet-container initialFadeIn">
            <img
                title={
                    props.feature === "overview"
                        ? `The planet ${name}.`
                        : props.feature === "structure"
                        ? `${name}'s interior structure.`
                        : `${name}'s surface.`
                }
                alt={
                    props.feature === "overview"
                        ? `The planet ${name}.`
                        : props.feature === "structure"
                        ? `${name}'s interior structure.`
                        : "${name}'s surface."
                }
                className={props.name}
                src={
                    props.feature === "overview" || props.feature === "surface"
                        ? `/src/assets/planet-${name}.svg`
                        : `/src/assets/planet-${name}-internal.svg`
                }
                alt={`image of ${name}`}
            />
            <img
                className="with-magnifier"
                src={`/src/assets/geology-${name}.png`}
                style={
                    props.feature === "surface"
                        ? { opacity: "1" }
                        : { opacity: "0" }
                }
            />
        </div>
    );
}
