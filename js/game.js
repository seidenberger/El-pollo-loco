let canvas;
let world;
let keyboard = new Keyboard();
let changeAudio = true;
let intervallIds = [];
let gameStarted = false;

/**
 * Initializes the start display by hiding the audio button.
 *
 * This function adds the `hidden_imp` class to the element with the ID `audioButten`,
 * making it hidden or styled as per the CSS class definition.
 */
function initStartDisplay() {
  document.getElementById("audioButten").classList.add("hidden_imp");
}

/**
 * Initializes the game level if it hasn't started yet.
 *
 * This function sets up the game for level one by calling various functions, such as
 * initializing the level, playing background music, displaying game elements,
 * setting up the canvas, initializing the game world, handling finger button events,
 * and showing the footer.
 */
function initLevel() {
  if (!gameStarted) {
    gameStarted = true;
    initLevelOne();
    backGroundMusicPlaying();
    showGameElements();
    setupCanvas();
    initializeWorld();
    fingerButtonEvent();
    footerShow();
    disableMute();
    disableMuteButten();
  }
}

/**
 * Plays the background music of the game.
 *
 * This function triggers the playback of the `backgrounMusik` audio object.
 */
function backGroundMusicPlaying() {
  backgrounMusik.play();
}

/**
 * Displays the game elements on the screen and hides the start screen elements.
 *
 * This function shows the game canvas, hides the play button and start display,
 * clears the footer overlay, and makes the audio button visible.
 */
function showGameElements() {
  document.getElementById("containerCanvas").classList.remove("hidden");
  document.getElementById("canvas").classList.remove("hidden");
  document.getElementById("playButton").classList.add("hidden");
  document.getElementById("startDisplay").classList.add("hidden");
  document.getElementById("overlayFooter").innerHTML = "";
  document.getElementById("audioButten").classList.remove("hidden_imp");
}

/**
 * Sets up the game canvas by retrieving the canvas element from the DOM.
 *
 * This function assigns the HTML canvas element with the ID `canvas` to the
 * `canvas` variable for further manipulation or rendering.
 */
function setupCanvas() {
  canvas = document.getElementById("canvas");
}

/**
 * Initializes the game world by creating a new instance of the `World` class.
 *
 * This function sets up the game world with the provided `canvas` and `keyboard`
 * objects, allowing interaction and rendering within the game.
 */
function initializeWorld() {
  world = new World(canvas, keyboard);
}

/**
 * Listens for the "Enter" key press and initializes the game level if the game has not started yet.
 *
 * This function adds an event listener for the `keydown` event, checking if the pressed key is
 * the "Enter" key. If the game has not started (`gameStarted` is `false`), it calls the
 * `initLevel` function to start the game.
 */
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !gameStarted) {
    initLevel();
  }
});

/**
 * Toggles the mute state of the audio and updates the audio button icons.
 *
 * This function switches the visibility of the "audioOff" and "audioOn" elements
 * to indicate whether the audio is muted or unmuted. It also calls `enableMute`
 * to mute the audio or `disableMute` to unmute it, depending on the state.
 */
function toggleMuteState() {
  changeAudio = !changeAudio;
  if (changeAudio) {
    enableMuteButten();
    enableMute();
  } else {
    disableMuteButten();
    disableMute();
  }
}

/**
 * Clears all intervals that were set using `setInterval`.
 *
 * This function iterates through possible interval IDs (from 1 to 9999) and calls
 * `window.clearInterval()` to stop each interval.
 */
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

/**
 * Stops the game and resets relevant elements and states.
 *
 * This function sets the `gameStarted` flag to `false`, shows the footer overlay,
 * mutes the audio, and stops the game elements by calling various helper functions.
 */
function stopGame() {
  gameStarted = false;
  footerShowOverlay();
  enableMute();
  stopGameElements();
}

/**
 * Stops the game elements by hiding or showing specific HTML elements.
 *
 * This function hides the canvas and game-related elements, displays the
 * start screen, and updates the visibility of other elements like the
 * "Play" button, win/loss messages, and audio button.
 */
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

/**
 * Handles actions when the player wins the game.
 *
 * This function clears all active intervals and triggers the `youWinTime` function,
 * which likely manages the "You Win" state or animation.
 */
function youWinGamne() {
  clearAllIntervals();
  youWinTime();
}

/**
 * Displays the "You Win" message and stops the game after a short delay.
 *
 * This function makes the "You Win" message visible by removing the `hidden` class.
 * After a 2-second delay, it calls the `stopGame` function to end the game.
 */
function youWinTime() {
  document.getElementById("youWin").classList.remove("hidden");
  setTimeout(() => {
    stopGame();
  }, 2000);
}

/**
 * Handles actions when the game is over.
 *
 * This function clears all active intervals and triggers the `gameOverTime` function,
 * which likely manages the "Game Over" state or animation.
 */
function gameOver() {
  clearAllIntervals();
  gameOverTime();
}

/**
 * Displays the "Game Over" message and stops the game after a short delay.
 *
 * This function makes the "Game Over" message visible by removing the `hidden` class.
 * After a 2-second delay, it calls the `stopGame` function to end the game.
 */
function gameOverTime() {
  document.getElementById("gameOver").classList.remove("hidden");
  setTimeout(() => {
    stopGame();
  }, 2000);
}

/**
 * Displays the "audio off" icon and hides the "audio on" icon.
 *
 * This function manipulates the DOM elements with IDs "audioOff" and "audioOn"
 * by toggling the "hidden" class. It ensures that the "audioOff" element becomes
 * visible and the "audioOn" element is hidden.
 */
function enableMuteButten() {
  document.getElementById("audioOff").classList.remove("hidden");
  document.getElementById("audioOn").classList.add("hidden");
}

/**
 * Disables the mute state visually by toggling the audio button icons.
 *
 * This function hides the "audioOff" icon and shows the "audioOn" icon
 * by manipulating their CSS classes. It is typically called when unmuting audio.
 */
function disableMuteButten() {
  document.getElementById("audioOff").classList.add("hidden");
  document.getElementById("audioOn").classList.remove("hidden");
}
