/**
 * Expands Header component's overhead container when hamburger is clicked-on
 */
export function expandOverhead() {
    document.getElementById("hamburger").style.opacity = "0.1";
    document.getElementById("overhead").classList.add("expanded");
}

/**
 * Features that will be used in Header component (mobile layout) and Information component (tablet, desktop, etc. layouts)
 */
export const features = ["overview", "structure", "surface"];
