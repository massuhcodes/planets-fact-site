import "/src/styles/Main.css";
import Planet from "/src/components/Planet";
import TextualFacts from "./TextualFacts";
("/src/components/TextualFacts");
import NumericalFacts from "./NumericalFacts";
("/src/components/NumericalFacts");

export default function Main() {
    return (
        <main>
            <Planet />
            <TextualFacts />
            <NumericalFacts />
        </main>
    );
}
