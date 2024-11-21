let hurtSound = new Audio("./audio/hurt.mp3");
let jumpSound = new Audio("./audio/jump.mp3");
let walkingSound = new Audio("audio/walking.mp3");
let sleepSound = new Audio("./audio/sleep.mp3");
let throwSound = new Audio("./audio/throw.mp3");
let angriChickenSound = new Audio("./audio/angri_chicken.mp3");
let chickenSound = new Audio("./audio/chicken.mp3");
let backgrounMusik = new Audio("./audio/background.mp3");

/**
 * Mutes all game sounds and background music.
 *
 * This function mutes all the audio elements used in the game, including sound effects and background music.
 * It ensures that no sound is played during the game by setting the `muted` property of each audio element to `true`.
 */
function enableMute() {
  hurtSound.muted = true;
  jumpSound.muted = true;
  walkingSound.muted = true;
  sleepSound.muted = true;
  throwSound.muted = true;
  angriChickenSound.muted = true;
  chickenSound.muted = true;
  backgrounMusik.muted = true;
}

/**
 * Unmutes all game sounds and background music.
 *
 * This function unmutes all the audio elements used in the game, including sound effects and background music.
 * It ensures that the sounds are played again by setting the `muted` property of each audio element to `false`.
 */
function disableMute() {
  hurtSound.muted = false;
  jumpSound.muted = false;
  walkingSound.muted = false;
  sleepSound.muted = false;
  throwSound.muted = false;
  angriChickenSound.muted = false;
  chickenSound.muted = false;
  backgrounMusik.muted = false;
}
