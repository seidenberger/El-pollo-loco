let canvas;
let world;
let keyboard = new Keyboard();
let changeAudio = true;
let intervallIds = [];
let gameStarted = false;

function initStartDisplay() {
  document.getElementById("audioButten").classList.add("hidden_imp");
}

function initLevel() {
  if (!gameStarted) {
    gameStarted = true;
    initLevelOne();
    backGroundMusicPlaying();
    showGameElements();
    setupCanvas();
    initializeWorld();
    fingerButtonEvent();
    // footerShow();
  }
}

function backGroundMusicPlaying() {
  backgrounMusik.play();
}

function showGameElements() {
  document.getElementById("containerCanvas").classList.remove("hidden");
  document.getElementById("canvas").classList.remove("hidden");
  document.getElementById("playButton").classList.add("hidden");
  document.getElementById("startDisplay").classList.add("hidden");
  document.getElementById("overlayFooter").innerHTML = "";
  document.getElementById("audioButten").classList.remove("hidden_imp");
}

function setupCanvas() {
  canvas = document.getElementById("canvas");
}

function initializeWorld() {
  world = new World(canvas, keyboard);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !gameStarted) {
    initLevel();
  }
});

function changeSilently() {
  let audioOff = document.getElementById("audioOff");
  let audioOn = document.getElementById("audioOn");
  changeAudio = !changeAudio;
  if (changeAudio) {
    audioOff.classList.remove("hidden");
    audioOn.classList.add("hidden");
    enableMute();
  } else {
    audioOff.classList.add("hidden");
    audioOn.classList.remove("hidden");
    disableMute();
  }
}

function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

function stopGame() {
  gameStarted = false;
  footerShowOverlay();
  enableMute();
  stopGameElements();
}

function stopGameElements() {
  document.getElementById("canvas").classList.add("hidden");
  document.getElementById("containerCanvas").classList.add("hidden");
  document.getElementById("startDisplay").classList.remove("hidden");
  document.getElementById("youWin").classList.add("hidden");
  document.getElementById("gameOver").classList.add("hidden");
  document.getElementById("buttonDiv").classList.add("hidden");
  document.getElementById("playButton").classList.remove("hidden");
  document.getElementById("audioButten").classList.add("hidden_imp");
}

function youWinGamne() {
  clearAllIntervals();
  youWinTime();
}

function youWinTime() {
  document.getElementById("youWin").classList.remove("hidden");
  setTimeout(() => {
    stopGame();
  }, 2000);
}

function gameOver() {
  clearAllIntervals();
  gameOverTime();
}

function gameOverTime() {
  document.getElementById("gameOver").classList.remove("hidden");
  setTimeout(() => {
    stopGame();
  }, 2000);
}
