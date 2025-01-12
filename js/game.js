let canvas;
let world;
let keyboard = new Keyboard();
let changeAudio = false;
let intervallIds = [];
let gameStarted = false;

/**
 * Initializes the start display by hiding the audio button.
 *
 * This function adds the `hidden_imp` class to the element with the ID `audioButten`,
 * making it hidden or styled as per the CSS class definition.
 */
function initStartDisplay() {
  document.getElementById("home").classList.add("hidden_imp");
  footerShowOverlay();
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
    world = null;
    gameStarted = true;
    initLevelOne();
    backGroundMusicPlaying();
    showGameElements();
    setupCanvas();
    initializeWorld();
    fingerButtonEvent();
    footerShow();
    gameStarted = false;
  }
}

/**
 * Returns the game to the home state by clearing all intervals and stopping game elements.
 * This method is typically used to reset or pause the game, ensuring no active intervals or animations are running.
 */
function home() {
  clearAllIntervals();
  stopGameElements();
  backNone();
  document.getElementById("gameButtonsMobile").classList.remove("hidden_imp");
}

/**
 * Reloads the game by clearing all intervals, stopping game elements, and reinitializing the level.
 * This method resets the game to its starting state, preparing it for a fresh start.
 */
function relod() {
  clearAllIntervals();
  stopGameElements();
  initLevel();
  document.getElementById("gameButtonsMobile").classList.remove("hidden_imp");
}

/**
 * Plays the background music of the game.
 *
 * This function triggers the playback of the `backgrounMusik` audio object.
 */
function backGroundMusicPlaying() {
  backgroundMusic.loop = true;
  backgroundMusic.play();
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
  document.getElementById("home").classList.remove("hidden_imp");
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
 * Stops all active game elements and resets the user interface for the start or home screen.
 * This method hides or shows various elements of the game interface, enabling a transition back to a non-game state.
 * It also prepares the UI for restarting or returning to the main menu.
 */
function stopGameElements() {
  relodeAndHomeNone();
  footerShowOverlay();
  document.getElementById("canvas").classList.add("hidden");
  document.getElementById("containerCanvas").classList.add("hidden");
  document.getElementById("startDisplay").classList.remove("hidden");
  document.getElementById("youWin").classList.add("hidden");
  document.getElementById("gameOver").classList.add("hidden");
  document.getElementById("playButton").classList.remove("hidden");
  document.getElementById("home").classList.add("hidden_imp");
  changeAudio = false;
}

/**
 * Handles the end-of-game scenario when the player wins.
 * This method clears all active intervals and triggers the win screen display logic.
 */
function youWinGame() {
  clearAllIntervals();
  youWinTime();
}

/**
 * Displays the "You Win" screen and stops the game.
 * This method makes the "You Win" message visible and halts all game activities.
 */
function youWinTime() {
  document.getElementById("youWin").classList.remove("hidden");
  stopGame();
}

/**
 * Handles the end-of-game scenario when the player loses.
 * This method clears all active intervals and triggers the game-over screen display logic.
 */
function gameOver() {
  clearAllIntervals();
  gameOverTime();
}

/**
 * Displays the "Game Over" screen and stops the game.
 * This method makes the "Game Over" message visible and halts all game activities.
 */
function gameOverTime() {
  document.getElementById("gameOver").classList.remove("hidden");
  stopGame();
}

/**
 * Stops the game by disabling game states and resetting UI elements.
 * This method sets the `gameStarted` flag to `false`, disables audio changes, hides mobile game buttons,
 * enables the mute functionality, and prepares the UI for the reload and home options.
 */
function stopGame() {
  gameStarted = false;
  changeAudio = false;
  document.getElementById("gameButtonsMobile").classList.add("hidden_imp");
  // enableMute();
  relodeAndHome();
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

/**
 * Clears the game display by hiding all major UI components.
 * This method adjusts the visibility of various game elements, ensuring a clean display state.
 */
function clearDisplay() {
  footerShow();
  document.getElementById("canvas").classList.add("hidden");
  document.getElementById("containerCanvas").classList.add("hidden");
  document.getElementById("startDisplay").classList.add("hidden");
  document.getElementById("youWin").classList.add("hidden");
  document.getElementById("gameOver").classList.add("hidden");
  document.getElementById("gameButtonsMobile").classList.add("hidden");
  document.getElementById("playButton").classList.add("hidden");
  document.getElementById("home").classList.add("hidden_imp");
}
