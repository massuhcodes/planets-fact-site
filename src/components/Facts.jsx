import "/src/styles/Facts.css";

export default function Facts() {
    const facts = [
        { property: "rotation time", value: "58.6 days" },
        { property: "revolution time", value: "87.97 days" },
        { property: "radius", value: "2,439.7 km" },
        { property: "average temp.", value: "430°C" },
    ];

    const arrayOfFacts = facts.map((fact, index) => (
        <div key={index} className="fact common">
            <span className="property">{fact.property.toUpperCase()}</span>
            <span className="value">{fact.value.toUpperCase()}</span>
        </div>
    ));

    console.log(arrayOfFacts);

    return <div className="facts common">{arrayOfFacts}</div>;
}
