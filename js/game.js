let canvas;
let world;
let keyboard = new Keyboard();
let changeAudio = false;
let intervallIds = [];
let gameStarted = false;

function initStardDisply() {
  handleMediaChange(mediaQuery);
  checkOrientationWithMediaQuery();
}

function initLevel() {
  if (!gameStarted) {
    gameStarted = true;
    initLevelOne();
    document.getElementById("canvas").classList.remove("hidden");
    // document.getElementById("containerCanvas").classList.remove("hidden");
    document.getElementById("overlay").classList.remove("hidden");
    document.getElementById("start_display").classList.add("hidden");
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
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
  gameStarted = false;
  document.getElementById("canvas").classList.add("hidden");
  document.getElementById("overlay").classList.add("hidden");

  document.getElementById("start_display").classList.remove("hidden");
  // setTimeout((world.character.energy = 0) => {
  //   if(world.character.energy = 0){
  //     img/9_intro_outro_screens/game_over/oh no you lost!.png
  //   }
  // }, 1000);
}

let mediaQuery = window.matchMedia("(min-width: 750px)");

function handleMediaChange(e) {
  if (e.matches) {
    document.getElementById("gameName").classList.remove("hidden");
    document.getElementById("gameKeys").classList.remove("hidden");
    console.log("Elemente angezeigt (Breite >= 750px)");
  } else {
    document.getElementById("gameName").classList.add("hidden");
    document.getElementById("gameKeys").classList.add("hidden");
    console.log("add name min-width: 750px");
  }
}

mediaQuery.addEventListener("change", handleMediaChange);

function checkOrientationWithMediaQuery() {
  let isPortrait = window.matchMedia("(orientation: portrait)").matches;

  if (isPortrait) {
    document.getElementById("orientationMessage").classList.remove("hidden");
    document.getElementById("containerCanvas").classList.add("hidden");
    document.getElementById("start_display_img").classList.add("hidden");
  } else {
    document.getElementById("orientationMessage").classList.add("hidden");
    document.getElementById("containerCanvas").classList.remove("hidden");
    document.getElementById("start_display_img").classList.remove("hidden");
  }
}

let orientationMediaQuery = window.matchMedia("(orientation: portrait)");

orientationMediaQuery.addEventListener(
  "change",
  checkOrientationWithMediaQuery
);

window.addEventListener("load", checkOrientationWithMediaQuery);

function fingerButtonEvent() {
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

  if (event.keyCode == 13) {
    keyboard.ENTER = true;
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

  if (event.keyCode == 13) {
    keyboard.ENTER = false;
  }
});
