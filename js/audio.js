let hurt_sound = new Audio("./audio/hurt.mp3");
let jump_sound = new Audio("./audio/jump.mp3");
let walking_sound = new Audio("audio/walking.mp3");
let sleep_sound = new Audio("./audio/sleep.mp3");
let throw_sound = new Audio("./audio/throw.mp3");

let angri_chicken_sound = new Audio("./audio/angri_chicken.mp3");
let chicken_sound = new Audio("./audio/chicken.mp3");

function enableMute() {
  hurt_sound.muted = true;
  jump_sound.muted = true;
  walking_sound.muted = true;
  sleep_sound.muted = true;
  throw_sound.muted = true;
  angri_chicken_sound.muted = true;
  chicken_sound.muted = true;
}

function disableMute() {
  hurt_sound.muted = false;
  jump_sound.muted = false;
  walking_sound.muted = false;
  sleep_sound.muted = false;
  throw_sound.muted = false;
  angri_chicken_sound.muted = false;
  chicken_sound.muted = false;
}
