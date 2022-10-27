// Planet.jsx

import "/src/styles/Planet.css";

export default function Planet(props) {
    return (
        <div id="planet-container" className="planet-container initialFadeIn">
            <img
                className={props.name}
                src={
                    props.feature === "surface"
                        ? props.images.overview
                        : props.images[props.feature]
                }
            />
            <img
                className="with-magnifier"
                src={props.images.surface}
                style={
                    props.feature === "surface"
                        ? { opacity: "1" }
                        : { opacity: "0" }
                }
            />
        </div>
    );
}
