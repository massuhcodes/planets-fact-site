import "/src/styles/Planet.css";

export default function Planet(props) {
    return (
        <div className="planet">
            <img
                src={props.meta.picture}
                className="planet-image"
                style={{ height: `${props.meta.size.mobile}px` }}
            />
        </div>
    );
}
