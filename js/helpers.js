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
  backShow();
}

function dataPrivacy() {
  showImpressumDataPrivacy();
  backShow();
}

function showImpressumDataPrivacy() {
  let startDisplay = document.getElementById("startDisplay");
  let containerCanvas = document.getElementById("containerCanvas");
  let overlay = document.getElementById("overlay");
  startDisplay.classList.add("hidden");
  containerCanvas.classList.add("hidden_imp");
  overlay.classList.add("hidden_imp");
}
