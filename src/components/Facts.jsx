// Facts.jsx

import "/src/styles/Facts.css";
import { nanoid } from "nanoid";

export default function Facts(props) {
    // gather the given planet's facts in an array
    let facts = [];
    // fact comes from an object
    for (const fact in props.facts) {
        facts.push(props.facts[fact]);
    }

    return (
        <div className="facts-container">
            {/* each div is a fact of the planet */}
            {facts.map((fact) => (
                <div key={nanoid()} className="fact-container">
                    <span>{fact.property.toUpperCase()}</span>
                    <span>{fact.value.toUpperCase()}</span>
                </div>
            ))}
        </div>
    );
}
