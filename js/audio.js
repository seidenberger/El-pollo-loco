let hurtSound = new Audio("./audio/hurt.mp3");
let jumpSound = new Audio("./audio/jump.mp3");
let walkingSound = new Audio("audio/walking.mp3");
let sleepSound = new Audio("./audio/sleep.mp3");
let throwSound = new Audio("./audio/throw.mp3");
let angriChickenSound = new Audio("./audio/angri_chicken.mp3");
let chickenSound = new Audio("./audio/chicken.mp3");
let backgrounMusik = new Audio("./audio/background.mp3");

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
