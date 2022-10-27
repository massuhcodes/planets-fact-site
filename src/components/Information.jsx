// Information.jsx

import "/src/styles/Information.css";
import { nanoid } from "nanoid";
import { features } from "../utils/utils";
import source from "/src/assets/icon-source.svg";

export default function Information(props) {
    const link = "https://en.wikipedia.org/wiki/";
    // features for tablet, desktop, and larger screens
    const informationFeatures = features.map((feature, index) => (
        <div
            className={`feature-container ${
                props.feature === feature ? "selected" : ""
            }`}
            key={nanoid()}
            onClick={() => props.switchFeatureTo(feature)}
            style={
                props.feature === feature
                    ? {
                          "--selected-Information-feature-background-color":
                              props.featureBackgroundColor,
                      }
                    : {}
            }
        >
            <span>{`0${index + 1}`}</span>
            <span style={props.feature === feature ? { color: "white" } : {}}>
                {feature === "structure"
                    ? "internal structure".toUpperCase()
                    : feature === "surface"
                    ? "surface geology".toUpperCase()
                    : "overview".toUpperCase()}
            </span>
        </div>
    ));

    return (
        <div className="information-features-container">
            <div className="information-container">
                <h1>{props.name.toUpperCase()}</h1>
                <p>{props.info}</p>
                <div className="wikipedia-container">
                    <span>Source</span>
                    {/** mercury's is the only link that needs to be addressed */}
                    <a
                        href={
                            props.name === "mercury"
                                ? `${link}${props.name}_(planet)`
                                : `${link}${props.name}`
                        }
                        target="_blank"
                        className={`${props.name}-link`}
                        title={`A wikipedia link to the planet ${
                            props.name[0].toUpperCase() + props.name.slice(1)
                        }`}
                    >
                        Wikipedia
                    </a>
                    <img
                        src={source}
                        alt={
                            "An image indicating further information is available"
                        }
                    />
                </div>
            </div>
            {/** this div will not appear for mobile screens, only for screens larger than mobile */}
            <div className="features-container">{informationFeatures}</div>
        </div>
    );
}
