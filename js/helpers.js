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
  let gameKeys = document.getElementById("gameKeys");

  if (isPortrait) {
    orientationMessage.classList.remove("hidden");
    canvasContainer.classList.add("invisible");
    gameName.classList.add("hidden");
    gameKeys.classList.remove("hidden");
  } else {
    if (gameStarted) {
      canvasContainer.classList.remove("invisible");
      orientationMessage.classList.add("hidden");
      gameKeys.classList.remove("hidden");
    } else {
      orientationMessage.classList.add("hidden");
      canvasContainer.classList.remove("invisible");
      gameName.classList.add("hidden");
      gameKeys.classList.remove("hidden");
      // footerShowOverlay();
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
  // console.log
  clearDisplay();
  // relodeAndHomeNone();
  showImpressum();
  backShow();
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
}

document.addEventListener("DOMContentLoaded", () => {
  function detectDevice() {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    let width = window.innerWidth;
    // let height = window.innerHeight;

    if (width <= 480) {
      console.log("Smartphone erkannt");
    } else if (width > 480 && width <= 1024) {
      if (isTouchDevice) {
        console.log("Tablet erkannt");
      } else {
        console.log("Kleiner Desktop erkannt");
      }
    } else {
      console.log("Desktop erkannt");
    }

    if (isTouchDevice) {
      console.log("Touchscreen-Gerät erkannt");
      document.getElementById("buttonDiv").classList.remove("hidden");
      // debugger;
    }
  }

  window.addEventListener("resize", detectDevice);
  detectDevice();
});
