/**
 * Sets up touch event listeners for mobile game controls.
 *
 * This function adds event listeners for the touchstart and touchend events on various
 * buttons like the "playButton", directional buttons (left, right, up), and the "throwing" button.
 * When the user touches the buttons, it updates the `keyboard` object to simulate key presses,
 * allowing the game to respond to mobile input.
 */
function fingerButtonEvent() {
  document.getElementById("playButton").addEventListener("touchstart", (e) => {
    e.preventDefault();
    initLevel();
  });
  document.getElementById("playButton").addEventListener("touchend", (e) => {
    e.preventDefault();
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

/**
 * Listens for keydown events to simulate keyboard input for game controls.
 *
 * This function listens for specific key presses (arrow keys and WASD keys) and updates
 * the `keyboard` object to reflect which keys are pressed. This allows the game to respond
 * to both physical keyboard input (e.g., arrow keys) and alternative keys (e.g., WASD).
 */
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

/**
 * Listens for keyup events to stop simulating key presses for game controls.
 *
 * This function listens for specific key releases (arrow keys and WASD keys) and updates
 * the `keyboard` object to reflect that the keys are no longer pressed. This allows the game
 * to stop responding to input once the user releases the keys.
 */
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
