// element that opens up `overhead`
let hamburgerEl;
// element that is opened or compressed
let overheadEl;

// wait for everything to load to assign
window.onload = (event) => {
    hamburgerEl = document.getElementById("hamburger");
    overheadEl = document.getElementById("overhead");
};

/**
 * Expands Header component's overhead container when hamburger is clicked-on
 */
export function expandOverhead() {
    hamburgerEl.style.opacity = "0.1";
    hamburgerEl.style.cursor = "auto";
    overheadEl.classList.add("expanded");
}
/**
 * Compress Header component's overhead container when a planet has been picked
 */
export function compressOverhead() {
    hamburgerEl.style.opacity = "1";
    hamburgerEl.style.cursor = "pointer";
    overheadEl.classList.remove("expanded");
}
/**
 * Features that will be used in Header component (mobile layout) and Information component (tablet, desktop, etc. layouts)
 */
export const features = ["overview", "structure", "surface"];
