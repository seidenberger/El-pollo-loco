let canvas;
let world;
let keyboard = new Keyboard();
let changeAudio = false;
let intervallIds = [];
let gameStarted = false;

function initStartDisplay() {
  initStartDisplayButten();
  document.getElementById("buttonDiv").classList.add("hidden");
  // checkOrientationWithMediaQuery();
}

function initStartDisplayButten() {
  document.getElementById("playButton").addEventListener("click", initLevel);
  document.getElementById("playButton").addEventListener("touchstart", (e) => {
    e.preventDefault();
    initLevel();
  });
}

function initLevel() {
  if (!gameStarted) {
    gameStarted = true;
    initLevelOne();
    document.getElementById("containerCanvas").style.display = "flex";
    document.getElementById("canvas").classList.remove("hidden");
    document.getElementById("playButton").classList.add("hidden");
    document.getElementById("startDisplay").classList.add("hidden");

    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    enableMute();
    fingerButtonEvent();

    console.log("my character is", world.character);
    console.log("my world is", world);
    console.log(world.level.enemies);
  }
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
  console.log("world", world);
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

function stopGame() {
  gameStarted = false;
  document.getElementById("canvas").classList.add("hidden");
  document.getElementById("containerCanvas").style.display = "none";
  document.getElementById("startDisplay").classList.remove("hidden");
  document.getElementById("youWin").classList.add("hidden");
  document.getElementById("gameOver").classList.add("hidden");
  document.getElementById("buttonDiv").classList.add("hidden");
  // document.getElementById("buttonDiv").classList.remove("hidden");
}

function youWinGamne() {
  clearAllIntervals();
  setTimeout(() => {
    document.getElementById("youWin").classList.remove("hidden");
    setTimeout(() => {
      stopGame();
    }, 2000);
  }, 3000);
}

function gameOver() {
  clearAllIntervals();
  setTimeout(() => {
    document.getElementById("gameOver").classList.remove("hidden");
    setTimeout(() => {
      stopGame();
    }, 2000);
  }, 3000);
}

function checkOrientationWithMediaQuery() {
  let isPortrait = window.matchMedia("(orientation: portrait)").matches;

  if (isPortrait) {
    console.log("Ausrichtung: " + (isPortrait ? "Portrait" : "Landscape"));
    document.getElementById("orientationMessage").classList.remove("hidden");
    document.getElementById("containerCanvas").classList.add("hidden");
    document.getElementById("containerCanvas").style.display = "none";
    document.getElementById("startDisplay").style.display = "none";
    // document.getElementById("overlay").classList.add("hidden");
    document.getElementById("gameName").classList.add("hidden");
    document.getElementById("gameKeys").classList.remove("hidden");
  } else {
    if (gameStarted) {
      document.getElementById("containerCanvas").style.display = "flex";
      document.getElementById("orientationMessage").classList.add("hidden");
      document.getElementById("gameKeys").classList.remove("hidden");
    } else {
      console.log("Ausrichtung: " + (isPortrait ? "Portrait" : "Landscape"));
      document.getElementById("orientationMessage").classList.add("hidden");
      document.getElementById("containerCanvas").style.display = "flex";
      // document.getElementById("overlay").classList.remove("hidden");
      document.getElementById("startDisplay").style.display = "block";
      document.getElementById("gameName").classList.add("hidden");
      document.getElementById("gameKeys").classList.remove("hidden");
    }
  }
}

let orientationMediaQuery = window.matchMedia("(orientation: portrait)");

orientationMediaQuery.addEventListener(
  "change",
  checkOrientationWithMediaQuery
);

window.addEventListener("load", checkOrientationWithMediaQuery);

function fingerButtonEvent() {
  document.getElementById("playButton").addEventListener("touchstart", (e) => {
    e.preventDefault();
    initLevel();
  });
  document.getElementById("playButton").addEventListener("touchend", (e) => {
    e.preventDefault();
    console.log("Touch beendet auf dem Play-Button.");
  });
  document.getElementById("btnLeft").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.A = true;
  });

  document.getElementById("btnLeft").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.A = false;
  });
  document.getElementById("btnRight").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.D = true;
  });

  document.getElementById("btnRight").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.D = false;
  });

  document.getElementById("btnUp").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.W = true;
  });

  document.getElementById("btnUp").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.W = false;
  });

  document.getElementById("btnThrowing").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });

  document.getElementById("btnThrowing").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 39 || event.keyCode == 68) {
    keyboard.RIGHT = true;
    keyboard.D = true;
  }

  if (event.keyCode == 38 || event.keyCode == 87) {
    keyboard.UP = true;
    keyboard.W = true;
  }

  if (event.keyCode == 37 || event.keyCode == 65) {
    keyboard.LEFT = true;
    keyboard.A = true;
  }

  if (event.keyCode == 40 || event.keyCode == 83) {
    keyboard.DOWN = true;
    keyboard.S = true;
  }

  if (event.keyCode == 32) {
    keyboard.SPACE = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39 || e.keyCode == 68) {
    keyboard.RIGHT = false;
    keyboard.D = false;
  }

  if (event.keyCode == 38 || event.keyCode == 87) {
    keyboard.UP = false;
    keyboard.W = false;
  }

  if (event.keyCode == 37 || event.keyCode == 65) {
    keyboard.LEFT = false;
    keyboard.A = false;
  }

  if (event.keyCode == 40 || event.keyCode == 83) {
    keyboard.DOWN = false;
    keyboard.S = false;
  }

  if (event.keyCode == 32) {
    keyboard.SPACE = false;
  }
});
