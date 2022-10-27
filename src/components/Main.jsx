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
    return (
        <main>
            {/* provide the data each component requires through props */}
            <div className="planet-information-container">
                <Planet
                    images={planet.featureImages}
                    feature={feature}
                    name={planet.name}
                />
                <Information
                    info={planet.info[feature]}
                    name={planet.name}
                    linkColor={planet.hues.color}
                    feature={feature}
                    featureBackgroundColor={planet.hues.backgroundColor}
                    switchFeatureTo={switchFeatureTo}
                />
            </div>
            <Facts facts={planet.facts} />
        </main>
    );
}
