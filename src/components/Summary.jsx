import "/src/styles/Summary.css";

export default function Summary() {
    return (
        <div className="summary common">
            <h1>MERCURY</h1>
            <p>
                Mercury is the smallest planet in the Solar System and the
                closest to the Sun. Its orbit around the Sun takes 87.97 Earth
                days, the shortest of all the Sun's planets. Mercury is one of
                four terrestial planets in the Solar System, and is a rocky body
                like Earth.
            </p>
            <div className="wikipedia">
                <span>Source : </span>
                <a href="#">Wikipedia</a>
                <img src="/src/assets/icon-source.svg" />
            </div>
        </div>
    );
}
