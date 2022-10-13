import { useState } from "react";
import { planetData } from "/src/planet-data";
import "/src/styles/App.css";
import Header from "/src/components/Header";
import Main from "/src/components/Main";

function App() {
    function compressOverhead() {
        document.getElementById("hamburger").style.opacity = "1";
        document.getElementById("overhead").classList.remove("expanded");
    }

    return (
        <div className="app">
            <Header compressOverhead={compressOverhead} />
            <Main />
        </div>
    );
}

export default App;
