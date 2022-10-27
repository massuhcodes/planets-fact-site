// utils.js

/**
 * Expands Header component's overhead container when hamburger is clicked-on
 */
export function expandOverhead() {
    const hamburgerEl = document.getElementById("hamburger");
    const overheadEl = document.getElementById("overhead");
    hamburgerEl.style.opacity = "0.1";
    hamburgerEl.style.cursor = "auto";
    overheadEl.classList.add("expanded");
}
/**
 * Compress Header component's overhead container when a planet has been picked
 */
export function compressOverhead() {
    const hamburgerEl = document.getElementById("hamburger");
    const overheadEl = document.getElementById("overhead");
    hamburgerEl.style.opacity = "1";
    hamburgerEl.style.cursor = "pointer";
    overheadEl.classList.remove("expanded");
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
