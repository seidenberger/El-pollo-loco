let keyboard = new Keyboard();

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
