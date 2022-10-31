// Apps.jsx

import "/src/styles/App.css";
import { useState, createContext, useEffect } from "react";
import { planetData } from "/src/planet-data";
import { toggleOverhead, handlePlanetFade } from "/src/utils/utilities";
import Header from "/src/components/Header";
import Main from "/src/components/Main";

// create a content to pass data over to Main's components
export const PlanetContext = createContext();

export default function App() {
    // get the saved planet
    const storedPlanet = JSON.parse(localStorage.getItem("planet"));
    // if no saved planet, have mercury be the planet state
    const [planet, setPlanet] = useState(
        storedPlanet ? storedPlanet : planetData[0]
    );
    // overview will always be the intial feature state
    const [feature, setFeature] = useState("overview");
    // switch boolean values for BurgerClose in Header
    // will be called in getPlanet and in the Header component itself (user canceled)
    const [isClosed, setIsClosed] = useState(false);

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
        if (orientation === "vertical") {
            toggleBurger();
            setTimeout(
                () => handlePlanetFade(setPlanet, planetData[index]),
                300
            );
        }
        // animate planet change
        handlePlanetFade(setPlanet, planetData[index]);
    }

    /**
     * Switch to the new feature user chose
     * @param {String} feature - the chosen feature
     */
    function switchFeatureTo(feature) {
        // animate feature change
        handlePlanetFade(setFeature, feature);
    }

    /**
     * This function calls the toggleOverhead function to
     * handle the overhead-container animation and
     * updates the BurgerClose's isClosed state which
     * is needed for the correct configuration
     */
    function toggleBurger() {
        toggleOverhead();
        setIsClosed((prevIsClosed) => !prevIsClosed);
    }

    return (
        <PlanetContext.Provider value={[planet, feature, switchFeatureTo]}>
            <div className="app-container">
                <Header
                    planets={planetData}
                    color={planet.hues.color}
                    chosenPlanet={planet}
                    getPlanet={getPlanet}
                    chosenFeature={feature}
                    switchFeatureTo={switchFeatureTo}
                    burgerIsClosed={isClosed}
                    toggleBurger={toggleBurger}
                />
                <Main />
            </div>
        </PlanetContext.Provider>
    );
}
