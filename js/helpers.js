// let keepOverlayFooter = false;

function checkOrientationWithMediaQuery() {
  let isPortrait = window.matchMedia("(orientation: portrait)").matches;
  console.log("Ausrichtung: " + (isPortrait ? "Portrait" : "Landscape"));

  let canvasContainer = document.getElementById("containerCanvas");
  let orientationMessage = document.getElementById("orientationMessage");
  let gameName = document.getElementById("gameName");
  let gameKeys = document.getElementById("gameKeys");

  if (isPortrait) {
    console.log("Ausrichtung: " + (isPortrait ? "Portrait" : "Landscape"));
    orientationMessage.classList.remove("hidden");
    // containerCanvas.classList.add("hidden");
    canvasContainer.classList.add("invisible");
    gameName.classList.add("hidden");
    gameKeys.classList.remove("hidden");

    // keepOverlayFooter = false;
  } else {
    // keepOverlayFooter = trhe;
    if (gameStarted) {
      // containerCanvas.classList.remove("hidden");
      canvasContainer.classList.remove("invisible");
      orientationMessage.classList.add("hidden");
      gameKeys.classList.remove("hidden");
    } else {
      console.log("Ausrichtung: " + (isPortrait ? "Portrait" : "Landscape"));
      orientationMessage.classList.add("hidden");
      // containerCanvas.classList.remove("hidden");
      canvasContainer.classList.remove("invisible");
      gameName.classList.add("hidden");
      gameKeys.classList.remove("hidden");
      footerShowOverlay();
    }
  }
}

let orientationMediaQuery = window.matchMedia("(orientation: portrait)");

orientationMediaQuery.addEventListener(
  "change",
  checkOrientationWithMediaQuery
);

window.addEventListener("load", checkOrientationWithMediaQuery);

function impressum() {
  showImpressumDataPrivacy();
}

function dataPrivacy() {
  showImpressumDataPrivacy();
}

function showImpressumDataPrivacy() {
  let startDisplay = document.getElementById("startDisplay");
  let containerCanvas = document.getElementById("containerCanvas");
  let overlay = document.getElementById("overlay");
  startDisplay.classList.add("hidden");
  containerCanvas.classList.add("hidden");
  overlay.classList.add("hidden");
}
