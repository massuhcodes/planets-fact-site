import { useState, createContext } from "react";
import { planets } from "/src/planet-data";
import "/src/styles/App.css";
import Header from "/src/components/Header";
import Main from "/src/components/Main";

export const PlanetContext = createContext();

export default function App() {
    const [planet, setPlanet] = useState(planets[0]);

    function getChoice(index) {
        document.getElementById("hamburger").style.opacity = "1";
        document.getElementById("overhead").classList.remove("expanded");
        setPlanet(planets[index]);
    }

    return (
        <PlanetContext.Provider value={planet}>
            <div className="app">
                <Header
                    getChoice={getChoice}
                    names={planets.map((planet) => planet.name)}
                />
                <Main />
            </div>
        </PlanetContext.Provider>
    );
}