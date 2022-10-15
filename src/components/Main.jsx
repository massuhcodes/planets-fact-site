import { useContext } from "react";
import "/src/styles/Main.css";
import Planet from "/src/components/Planet";
import Summary from "/src/components/Summary";
import Facts from "/src/components/Facts";
import { PlanetContext } from "./App";

export default function Main() {
    const planet = useContext(PlanetContext);
    return (
        <main>
            <Planet meta={planet.meta} />
            <Summary summary={planet.summary} name={planet.name} />
            <Facts facts={planet.facts} />
        </main>
    );
}
