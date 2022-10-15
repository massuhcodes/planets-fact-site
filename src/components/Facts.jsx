import "/src/styles/Facts.css";

export default function Facts(props) {
    const facts = [
        props.facts.one,
        props.facts.two,
        props.facts.three,
        props.facts.four,
    ];

    const arrayOfFacts = facts.map((fact, index) => (
        <div key={index} className="fact common">
            <span className="property">{fact.property.toUpperCase()}</span>
            <span className="value">{fact.value.toUpperCase()}</span>
        </div>
    ));

    return <div className="facts common">{arrayOfFacts}</div>;
}
