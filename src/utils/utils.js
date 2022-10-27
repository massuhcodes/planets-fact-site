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
 * Features that will be used in Header component (mobile layout) and Information component (tablet, desktop, etc. layouts)
 */
export const features = ["overview", "structure", "surface"];
