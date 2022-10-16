import mercury from "/src/assets/planet-mercury.svg";
import venus from "/src/assets/planet-venus.svg";
import earth from "/src/assets/planet-earth.svg";
import mars from "/src/assets/planet-mars.svg";
import jupiter from "/src/assets/planet-jupiter.svg";
import saturn from "/src/assets/planet-saturn.svg";
import uranus from "/src/assets/planet-uranus.svg";
import neptune from "/src/assets/planet-neptune.svg";

export const planets = [
    {
        name: "mercury",
        summary:
            "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestial planets in the Solar System and is a rocky body like Earth.",
        color: "#DEF4FC",
        facts: {
            one: { property: "rotation time", value: "58.6 days" },
            two: { property: "revolution time", value: "87.97 days" },
            three: { property: "radius", value: "2,439.7 km" },
            four: { property: "average temp.", value: "430°c" },
        },
        meta: { picture: mercury, size: { mobile: 111 } },
    },
    {
        name: "venus",
        summary:
            "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        color: "#F7CC7F",
        facts: {
            one: { property: "rotation time", value: "243 days" },
            two: { property: "revolution time", value: "224.7 days" },
            three: { property: "radius", value: "6,051.8 km" },
            four: { property: "average temp.", value: "471°c" },
        },
        meta: { picture: venus, size: { mobile: 154 } },
    },
    {
        name: "earth",
        summary:
            "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        color: "#545BFE",
        facts: {
            one: { property: "rotation time", value: "0.99 days" },
            two: { property: "revolution time", value: "365.26 days" },
            three: { property: "radius", value: "6,361 km" },
            four: { property: "average temp.", value: "16°c" },
        },
        meta: { picture: earth, size: { mobile: 173 } },
    },
    {
        name: "mars",
        summary:
            'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
        color: "#FF6A45",
        facts: {
            one: { property: "rotation time", value: "1.03 days" },
            two: { property: "revolution time", value: "1.88 years" },
            three: { property: "radius", value: "3,389.5 km" },
            four: { property: "average temp.", value: "-28°c" },
        },
        meta: { picture: mars, size: { mobile: 129 } },
    },
    {
        name: "jupiter",
        summary:
            "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
        color: "#ECAD7A",
        facts: {
            one: { property: "rotation time", value: "9.93 hours" },
            two: { property: "revolution time", value: "11.86 years" },
            three: { property: "radius", value: "69,911 km" },
            four: { property: "average temp.", value: "-108°c" },
        },
        meta: { picture: jupiter, size: { mobile: 224 } },
    },
    {
        name: "saturn",
        summary:
            "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eigth the average density of Earth.",
        color: "#FCCB6B",
        facts: {
            one: { property: "rotation time", value: "10.8 hours" },
            two: { property: "revolution time", value: "29.46 yeaars" },
            three: { property: "radius", value: "58,232 km" },
            four: { property: "average temp.", value: "-138°c" },
        },
        meta: { picture: saturn, size: { mobile: 256 } },
    },
    {
        name: "uranus",
        summary:
            "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky. Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        color: "#65F0D5",
        facts: {
            one: { property: "rotation time", value: "17.2 hours" },
            two: { property: "revolution time", value: "84 years" },
            three: { property: "radius", value: "25,362 km" },
            four: { property: "average temp.", value: "-195°c" },
        },
        meta: { picture: uranus, size: { mobile: 176 } },
    },
    {
        name: "neptune",
        summary:
            "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
        color: "#497EFA",
        facts: {
            one: { property: "rotation time", value: "16.08 hours" },
            two: { property: "revolution time", value: "164.79 years" },
            three: { property: "radius", value: "24,622 km" },
            four: { property: "average temp.", value: "-201°c" },
        },
        meta: { picture: neptune, size: { mobile: 173 } },
    },
];
