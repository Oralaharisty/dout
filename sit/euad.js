/**
 * Returns a CSS filter that applies a brightness adjustment.
 * @param {number} brightness - The brightness level (1.0 for no change, >1 for brighter, <1 for darker).
 * @returns {string} - The filter string to be used with CSS.
 */
function getBrightnessFilter(brightness) {
  return `brightness(${brightness})`;
}

// Example usage with a CSS filter
const imgElement = document.getElementById('myImage');
imgElement.style.filter = getBrightnessFilter(1.5); // Increase brightness by 50%
