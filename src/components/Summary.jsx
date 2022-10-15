import "/src/styles/Summary.css";
import source from "/src/assets/icon-source.svg";

export default function Summary(props) {
    return (
        <div className="summary common">
            <h1>{props.name.toUpperCase()}</h1>
            <p>{props.summary}</p>
            <div className="wikipedia">
                <span>Source : </span>
                <a href="#">Wikipedia</a>
                <img src={source} />
            </div>
        </div>
    );
}
