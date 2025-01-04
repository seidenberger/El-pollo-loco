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
  document.getElementById("audioButten").classList.add("hidden_imp");
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
    // neu
    world = null;
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
    gameStarted = false;

    // initStartDisplayNext();
  }
}

function home() {
  clearAllIntervals();
  stopGameElements();
}

function relod() {
  clearAllIntervals();
  stopGameElements();
  initLevel();
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
  document.getElementById("audioButten").classList.remove("hidden_imp");
  // document.getElementById("relodeHome").classList.add("hidden");
  // document.getElementById()
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

function stopGameElements() {
  // confirm.log
  relodeAndHomeNone();
  footerShowOverlay();
  enableMute();
  document.getElementById("canvas").classList.add("hidden");
  document.getElementById("containerCanvas").classList.add("hidden");
  document.getElementById("startDisplay").classList.remove("hidden");
  document.getElementById("youWin").classList.add("hidden");
  document.getElementById("gameOver").classList.add("hidden");
  document.getElementById("gameButtonsMobile").classList.add("hidden");
  document.getElementById("playButton").classList.remove("hidden");
  document.getElementById("audioButten").classList.add("hidden_imp");
  changeAudio = false;
}

function youWinGame() {
  // console.log
  clearAllIntervals();
  youWinTime();
  // document.getElementById("relodeHome").classList.remove("hidden");
}

function youWinTime() {
  document.getElementById("youWin").classList.remove("hidden");
  // setTimeout(() => {
  stopGame();
  // }, 2000);
}

function gameOver() {
  // console.log
  clearAllIntervals();
  gameOverTime();
}

function gameOverTime() {
  document.getElementById("gameOver").classList.remove("hidden");
  // setTimeout(() => {
  // document.getElementById("gameButtonsMobile").classList.add("hidden");
  stopGame();
  // }, 2000);
}

function stopGame() {
  // console.log
  gameStarted = false;
  changeAudio = false;
  document.getElementById("gameButtonsMobile").classList.add("hidden_imp");
  // footerShowOverlay();
  enableMute();
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

function clearDisplay() {
  footerShow();
  document.getElementById("canvas").classList.add("hidden");
  document.getElementById("containerCanvas").classList.add("hidden");
  document.getElementById("startDisplay").classList.add("hidden");
  document.getElementById("youWin").classList.add("hidden");
  document.getElementById("gameOver").classList.add("hidden");
  document.getElementById("gameButtonsMobile").classList.add("hidden");
  document.getElementById("playButton").classList.add("hidden");
  document.getElementById("audioButten").classList.add("hidden_imp");
}
