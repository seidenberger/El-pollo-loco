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
    document.getElementById("containerCanvas").classList.remove("hidden");
    document.getElementById("canvas").classList.remove("hidden");
    document.getElementById("playButton").classList.add("hidden");
    document.getElementById("startDisplay").classList.add("hidden");
    document.getElementById("overlayFooter").innerHTML = "";
    canvas = document.getElementById("canvas");
    document.getElementById("audioButten").classList.remove("hidden_imp");
    world = new World(canvas, keyboard);
    fingerButtonEvent();
    // footerShow();
  }
}

function backGroundMusicPlaying() {
  backgrounMusik.play();
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
  footerShowOverlay();
  gameStarted = false;
  enableMute();
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
  document.getElementById("youWin").classList.remove("hidden");
  setTimeout(() => {
    stopGame();
  }, 2000);
}

function gameOver() {
  clearAllIntervals();

  document.getElementById("gameOver").classList.remove("hidden");
  setTimeout(() => {
    stopGame();
  }, 2000);
}
