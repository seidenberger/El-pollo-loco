class Endboss extends MovableObject {
  height = 300;
  width = 200;
  y = 140;
  deadAnimationStarted = false;
  deadAnimationEndEndboss = false;
  alertAnimatioStarted = true;
  alertTime = 0;
  isAngriChickenSound = false;
  offset = {
    top: 50,
    bottom: 20,
    left: 10,
    right: 10,
  };
  Images_endboss_walk = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  Images_endboss_alert = [
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  Images_endboss_attack = [
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  Images_endboss_hurt = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  Images_endboss_dead = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  /**
   * Initializes an instance of the Endboss class and sets up its animations, states, and behaviors.
   *
   * This constructor:
   * - Loads the Endboss's animation images for walking, alert, attack, hurt, and death.
   * - Stops the Endboss's movement speed.
   * - Sets the initial points or state for the Endboss.
   * - Starts the Endboss's animation loop.
   */
  constructor(endScreen) {
    super().loadImage(this.Images_endboss_walk[0]);
    this.endScreen = endScreen;
    this.loadImages(this.Images_endboss_walk);
    this.loadImages(this.Images_endboss_alert);
    this.loadImages(this.Images_endboss_attack);
    this.loadImages(this.Images_endboss_hurt);
    this.loadImages(this.Images_endboss_dead);
    this.speedStop();
    this.endbossPoint();
    this.animate();
    this.animationPlayed = false;
    this.attackInProgress = false;
  }

  /**
   * Starts the animation loop for the endboss.
   *
   * This method initiates an interval that repeatedly calls the `playEndboss` method
   * to update and animate the endboss at a fixed interval, effectively creating
   * the animation loop. The interval is set to call the `playEndboss` method every
   * 1/10th of a second (100 milliseconds).
   */
  animate() {
    setInterval(() => this.playEndboss(), 1000 / 10);
  }

  /**
   * Controls the behavior of the end boss based on its current state.
   * Plays animations and performs actions such as attacks or movements.
   */
  playEndboss() {
    if (this.isDead()) {
      this.deadAnimation();
    } else if (this.isHurt()) {
      this.randomAttack();
    } else if (this.x < world.character.x + 450) {
      this.alertAndAtteckEndboss();
    } else {
      this.angriSoundPause();
      this.playAnimation(this.Images_endboss_walk);
      this.moveLeft();
      this.speedslow();
    }
  }

  /**
   * Handles the end boss's death animation sequence.
   * - Starts the death animation if not already started.
   * - Plays the animation frame by frame until it finishes.
   */
  deadAnimation() {
    if (!this.deadAnimationStarted) {
      this.playDeadAnimation();
    }
    if (this.currentImage < this.Images_endboss_dead.length) {
      this.playAnimation(this.Images_endboss_dead);
      this.incrementCurrentImage();
    } else {
      this.deadAnimationEndEndboss = true;
    }
  }

  /**
   * Plays the "angry chicken" sound effect and updates the sound state.
   *
   * This method starts the playback of the angry chicken sound effect and sets
   * the `isAngriChickenSound` property to `true` to indicate that the sound
   * is currently playing.
   */
  angriSoundPause() {
    angriChickenSound.pause();
    this.isAngriChickenSound = false;
  }

  /**
   * Plays the "angry chicken" sound effect and updates the sound state to indicate that it is playing.
   *
   * This method triggers the playback of the angry chicken sound and sets the
   * `isAngriChickenSound` property to `true` to reflect that the sound is currently active.
   */
  angriSoundPlay() {
    angriChickenSound.play();
    this.isAngriChickenSound = true;
  }

  /**
   * Plays the hurt animation for the end boss.
   * - Displays the hurt animation sequence.
   * - Plays an angry sound effect.
   * - Marks the animation as played.
   */
  hurtAnimation() {
    this.playAnimation(this.Images_endboss_hurt);
    this.angriSoundPlay();
    this.animationPlayed = true;
  }

  /**
   * Manages the alert and attack sequence for the Endboss.
   *
   * This method first triggers the alert and attack behavior. If the alert animation hasn't started,
   * it begins the alert sequence. If the Endboss is in the alert state, it plays the alert animation
   * and stops the Endboss's movement. Otherwise, it initiates the attack behavior.
   */
  alertAndAtteckEndboss() {
    if (!this.alertAnimatioStarted) {
      this.alertEndboss();
    }
    if (this.isAlert()) {
      this.playAnimation(this.Images_endboss_alert);
      this.speedslow();
    } else {
      this.enbossAttack();
    }
  }

  /**
   * Triggers the Endboss attack behavior.
   *
   * This method plays the angry sound effect, starts the attack animation for the Endboss,
   * moves the Endboss to the left, and increases its movement speed for the attack phase.
   */
  enbossAttack() {
    this.angriSoundPlay();
    this.playAnimation(this.Images_endboss_attack);
    this.moveLeft();
    this.speedfast();
  }

  /**
   * Checks if the Endboss is still in the alert state.
   *
   * This method calculates the time elapsed since the alert state was triggered and returns `true`
   * if the time elapsed is less than 2 seconds, indicating that the Endboss is still in the alert state.
   *
   * @returns {boolean} `true` if the Endboss is in the alert state, `false` otherwise.
   */
  isAlert() {
    let timepassed = new Date().getTime() - this.alertTime;
    timepassed = timepassed / 1000;
    return timepassed < 2;
  }

  /**
   * Triggers the alert state for the Endboss.
   *
   * This method records the current time as the start of the alert state and sets the
   * `alertAnimatioStarted` flag to `true`, indicating that the alert animation has started.
   */
  alertEndboss() {
    this.alertTime = new Date().getTime();
    this.alertAnimatioStarted = true;
  }

  /**
   * Executes a random attack action for the end boss.
   * - Randomly selects one of three actions: hurt animation, basic attack, or alert attack.
   */
  randomAttack() {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
      this.hurtAnimation();
    } else if (randomChoice === 1) {
      this.enbossAttack();
    } else if (randomChoice === 2) {
      this.alertAndAtteckEndboss();
    }
  }

  /**
   * Stops the Endboss's movement by setting its speed to zero.
   *
   * This method effectively halts the Endboss's movement by setting the `speed` property
   * to `0`, stopping any movement or animation that relies on speed.
   */
  speedStop() {
    this.speed = 0;
  }

  /**
   * Slows down the Endboss by setting its speed to a lower value.
   *
   * This method sets the Endboss's speed to `4`, reducing its movement speed to a slower pace.
   */
  speedslow() {
    this.speed = 4;
  }

  /**
   * Increases the Endboss's movement speed.
   *
   * This method sets the Endboss's speed to `10`, making it move faster during certain actions or states.
   */
  speedfast() {
    this.speed = 10;
  }

  /**
   * Sets the initial position of the Endboss.
   *
   * This method assigns the value `3600` to the `x` property, setting the Endboss's initial
   * position along the x-axis, which likely corresponds to its starting location in the game world.
   */
  endbossPoint() {
    this.x = 3600;
  }

  /**
   * Initiates the jump action for the character.
   * - Calls the method to set the jump speed.
   */
  jump() {
    this.speedToJump();
  }

  /**
   * Initiates the jump action for the character.
   * - Calls the method to set the jump speed.
   */
  speedToJump() {
    this.speedY = 30;
  }
}
