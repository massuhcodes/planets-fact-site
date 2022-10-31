// Main.jsx

import "/src/styles/Main.css";
import { useContext } from "react";
import Planet from "/src/components/Planet";
import Information from "/src/components/Information";
import Facts from "/src/components/Facts";
import { PlanetContext } from "./App";

export default function Main() {
    // useContext is useful because it bypasses the need to propagate props through the hierchy
    const [planet, feature, switchFeatureTo] = useContext(PlanetContext);
    const name = planet.name;
    const info = planet.info[feature];
    const hues = planet.hues;
    const facts = planet.facts;
    return (
        <main>
            {/* provide the data each component requires through props */}
            <div className="planet-information-container">
                <Planet feature={feature} name={name} />
                <Information
                    info={info}
                    name={name}
                    hues={hues}
                    feature={feature}
                    switchFeatureTo={switchFeatureTo}
                />
            </div>
            <Facts facts={facts} />
        </main>
    );
}
