import "/src/styles/Planet.css";

export default function Planet() {
    return (
        <div className="planet">
            <img
                src="/src/assets/planet-mercury.svg"
                className="planet-image"
                style={{height:"111px"}}
            />
        </div>
    );
}
