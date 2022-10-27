// Apps.jsx

import "/src/styles/App.css";
import { useState, createContext, useEffect } from "react";
import { planets } from "/src/planet-data";
import { compressOverhead, handlePlanetFade } from "../utils/utils";
import Header from "/src/components/Header";
import Main from "/src/components/Main";

// create a content to pass data over to Main's components
export const PlanetContext = createContext();

export default function App() {
    // get the saved planet
    const storedPlanet = JSON.parse(localStorage.getItem("planet"));
    // if no saved planet, have mercury be the planet state
    const [planet, setPlanet] = useState(
        storedPlanet ? storedPlanet : planets[0]
    );
    // overview will always be the intial feature state
    const [feature, setFeature] = useState("overview");

    // whenever a planet is selected save it here
    useEffect(() => {
        localStorage.setItem("planet", JSON.stringify(planet));
    }, [planet]);

    /**
     * Get the planet the user has chosen
     * @param {String} orientation - whether the index came from a horizontal (above mobile) or vertical (mobile) layout
     * @param {Number} index - chosen planet's index
     */
    function getPlanet(orientation, index) {
        if (orientation === "vertical") compressOverhead();
        // animate planet change
        handlePlanetFade(setPlanet, planets[index]);
    }

    /**
     * Switch to the new feature user chose
     * @param {String} feature - the chosen feature
     */
    function switchFeatureTo(feature) {
        // animate feature change
        handlePlanetFade(setFeature, feature);
    }

    return (
        <PlanetContext.Provider value={[planet, feature, switchFeatureTo]}>
            <div className="app-container">
                <Header
                    planets={planets}
                    chosenPlanet={planet}
                    color={planet.hues.color}
                    chosenFeature={feature}
                    getPlanet={getPlanet}
                    switchFeatureTo={switchFeatureTo}
                />
                <Main />
            </div>
        </PlanetContext.Provider>
    );
}
