let orientationMediaQuery = window.matchMedia("(orientation: portrait)");

/**
 * Checks the screen orientation and adjusts the visibility of game elements accordingly.
 *
 * This function uses `window.matchMedia` to determine if the screen is in portrait mode.
 * Based on the orientation, it updates the visibility of elements like the canvas container,
 * the orientation message, the game name, and game control instructions.
 */
function checkOrientationWithMediaQuery() {
  let isPortrait = window.matchMedia("(orientation: portrait)").matches;
  let canvasContainer = document.getElementById("containerCanvas");
  let orientationMessage = document.getElementById("orientationMessage");
  let gameName = document.getElementById("gameName");

  if (isPortrait) {
    orientationMessage.classList.remove("hidden");
    canvasContainer.classList.add("invisible");
    gameName.classList.add("hidden");
  } else {
    if (gameStarted) {
      canvasContainer.classList.remove("invisible");
      orientationMessage.classList.add("hidden");
    } else {
      orientationMessage.classList.add("hidden");
      canvasContainer.classList.remove("invisible");
      gameName.classList.add("hidden");
    }
  }
}

orientationMediaQuery.addEventListener(
  "change",
  checkOrientationWithMediaQuery
);

window.addEventListener("load", checkOrientationWithMediaQuery);

/**
 * Displays the Impressum (legal notice) and data privacy information.
 *
 * This function calls `showImpressumDataPrivacy()` to display the Impressum and data
 * privacy details, and then calls `backShow()` to display the back button or hide certain UI elements.
 */
function impressum() {
  clearDisplay();
  showImpressum();
  backShow();
  document.getElementById("gameButtonsMobile").classList.add("hidden_imp");
}

/**
 * Displays the data privacy information.
 *
 * This function calls `showImpressumDataPrivacy()` to display the data privacy details,
 * and then calls `backShow()` to display the back button or hide certain UI elements for navigation.
 */
function dataPrivacy() {
  clearDisplay();
  showDataPrivacy();
  backShow();
  document.getElementById("gameButtonsMobile").classList.add("hidden_imp");
}
