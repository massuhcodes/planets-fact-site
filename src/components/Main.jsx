import "/src/styles/Main.css";
import Planet from "/src/components/Planet";
import Summary from "/src/components/Summary";
import Facts from "/src/components/Facts";
("/src/components/NumericalFacts");

export default function Main() {
    return (
        <main>
            <Planet />
            <Summary />
            <Facts />
        </main>
    );
}
