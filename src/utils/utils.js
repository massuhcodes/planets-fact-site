// utils.js

/**
 * This method only adds the expanded class to the overhead-container in the Header component.
 */
export function toggleOverhead() {
    console.log("here");
    const hamburgerEl = document.getElementById("hamburger");
    const overheadEl = document.getElementById("overhead");
    // opened
    if (hamburgerEl.style.opacity === "0.1") {
        hamburgerEl.style.opacity = "1";
        overheadEl.classList.remove("expanded");
    } else {
        // closed
        hamburgerEl.style.opacity = "0.1";
        overheadEl.classList.add("expanded");
    }
}

/**
 *
 * @param {object} update - a function given by App.jsx that is for updating state (could be for updating planet or feature)
 * @param {String} state - a String given by App.jsx that is for updating state (could be either planet or feature)
 */
export function handlePlanetFade(update, state) {
    const planetContainerEl = document.getElementById("planet-container");
    // perform the animation
    planetContainerEl.classList.add("fadeOut");
    planetContainerEl.classList.remove("fadeIn");
    // wait until animation ends (which is for .4s) then begin
    setTimeout(() => update(state), 400);
    // wait until animation ends (which is again .4s) then begin
    setTimeout(() => {
        planetContainerEl.classList.add("fadeIn");
        planetContainerEl.classList.remove("fadeOut");
    }, 400);
    // the total animation time is 1.6s
}

/**
 * Features that will be used in Header component (mobile layout) and Information component (tablet, desktop, etc. layouts)
 */
export const features = ["overview", "structure", "surface"];
