import { useState } from "react";
import "/src/styles/App.css";
import Header from "/src/components/Header";
import Main from "/src/components/Main";

function App() {
    return (
        <div className="app">
            <Header />
            <Main />
        </div>
    );
}

export default App;
