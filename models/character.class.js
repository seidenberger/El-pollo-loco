class Character extends MovableObject {
  height = 240;
  width = 120;
  speed = 5;
  currentTimeWalking = 0;
  longIdle = true;
  world;
  longIdleThreshold = 5000;
  deadAnimationStarted = false;
  deadAnimationEndCharacter = false;
  isSleepingSoundPlaying = false;
  offset = {
    top: 100,
    bottom: 10,
    left: 25,
    right: 35,
  };

  Images_Walkin_Pepe = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];

  Images_Jamping = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];

  Images_Idle = [
    "img/2_character_pepe/1_idle/idle/I-1.png",
    "img/2_character_pepe/1_idle/idle/I-2.png",
    "img/2_character_pepe/1_idle/idle/I-3.png",
    "img/2_character_pepe/1_idle/idle/I-4.png",
    "img/2_character_pepe/1_idle/idle/I-5.png",
    "img/2_character_pepe/1_idle/idle/I-6.png",
    "img/2_character_pepe/1_idle/idle/I-7.png",
    "img/2_character_pepe/1_idle/idle/I-8.png",
    "img/2_character_pepe/1_idle/idle/I-9.png",
    "img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  Images_Long_Idle = [
    "img/2_character_pepe/1_idle/long_idle/I-11.png",
    "img/2_character_pepe/1_idle/long_idle/I-12.png",
    "img/2_character_pepe/1_idle/long_idle/I-13.png",
    "img/2_character_pepe/1_idle/long_idle/I-14.png",
    "img/2_character_pepe/1_idle/long_idle/I-15.png",
    "img/2_character_pepe/1_idle/long_idle/I-16.png",
    "img/2_character_pepe/1_idle/long_idle/I-17.png",
    "img/2_character_pepe/1_idle/long_idle/I-18.png",
    "img/2_character_pepe/1_idle/long_idle/I-19.png",
    "img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  Images_Hurt = [
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png",
  ];

  Images_Dead = [
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png",
  ];

  /**
   * Initializes an instance of the object with multiple images and applies gravity and animations.
   * The constructor loads different sets of images for various actions (e.g., walking, jumping, idle, etc.),
   * applies gravity, and starts the animation for the object.
   *
   * @constructor
   */
  constructor(ctx) {
    super().loadImage(this.Images_Walkin_Pepe[0]);
    this.context = ctx;
    this.loadImages(this.Images_Walkin_Pepe);
    this.loadImages(this.Images_Dead);
    this.loadImages(this.Images_Jamping);
    this.loadImages(this.Images_Hurt);
    this.loadImages(this.Images_Idle);
    this.loadImages(this.Images_Long_Idle);
    this.applayGravity();
    this.animate();
    this.idleStartTime = null;
    this.isIdleState = false;
  }

  /**
   * Starts the animation loop for the character.
   *
   * This method sets up two intervals:
   * 1. Calls `moveCharacter` approximately 60 times per second to update the character's position.
   * 2. Calls `playCharacter` once every 60 milliseconds to update the character's animation state.
   */
  animate() {
    setInterval(() => this.moveCharacter(), 500 / 60);
    setInterval(() => this.playCharacter(), 100);
  }

  /**
   * Updates the character's movement and adjusts the camera position.
   *
   * This method handles the character's movement by checking its ability to move
   * in specific directions (right, left, or jumping) and then applying the corresponding
   * actions. Additionally, it pauses the walking sound effect and updates the camera
   * position based on the character's current location.
   */
  moveCharacter() {
    walkingSound.pause();
    if (this.canMoveRight()) this.moveRight();
    if (this.canMoveLeft()) this.moveLeft();
    if (this.canJump()) this.jump();
    this.world.camera_x = -this.x + 150;
  }

  /**
   * Checks if the character can move to the right.
   *
   * This method determines whether the character is allowed to move to the right
   * based on the current keyboard input and the character's position within the level boundaries.
   *
   * @returns {boolean} Returns `true` if the "D" key is pressed and the character's
   * x-coordinate is less than the level's end boundary; otherwise, `false`.
   */
  canMoveRight() {
    return this.world.keyboard.D && this.x < this.world.level.level_end_x;
  }

  /**
   * Moves the character to the right, plays a sound, and updates its direction.
   *
   * This method moves the character to the right by invoking the `moveRight` method
   * of the parent class. Additionally, it plays a walking sound effect and sets the
   * `otherDirection` property to `false`, ensuring the character faces to the right.
   */
  moveRight() {
    super.moveRight();
    walkingSound.play();
    this.otherDirection = false;
  }

  /**
   * Checks if the character can move to the left.
   *
   * This method determines whether the character is allowed to move to the left
   * based on the current keyboard input and the character's position within the level boundaries.
   *
   * @returns {boolean} Returns `true` if the "A" key is pressed and the character's
   * x-coordinate is greater than 0; otherwise, `false`.
   */
  canMoveLeft() {
    return this.world.keyboard.A && this.x > 0;
  }

  /**
   * Moves the character to the left, plays a sound, and updates its direction.
   *
   * This method moves the character to the left by invoking the `moveLeft` method
   * of the parent class. Additionally, it plays the walking sound effect and sets the
   * `otherDirection` property to `true`, ensuring the character faces to the left.
   */
  moveLeft() {
    super.moveLeft();
    walkingSound.play();
    this.otherDirection = true;
  }

  /**
   * Checks if the character can jump.
   *
   * This method checks whether the character is allowed to jump by verifying if the "W" key is pressed
   * and if the character is not currently above the ground (i.e., not already jumping or falling).
   *
   * @returns {boolean} Returns `true` if the "W" key is pressed and the character is not above the ground; otherwise, `false`.
   */
  canJump() {
    return this.world.keyboard.W && !this.isAboveGround();
  }

  /**
   * Plays the appropriate animation or sound based on the character's state.
   *
   * This method checks the character's current state and triggers the corresponding actions:
   * - If the character is dead, it plays the death animation and pauses the character.
   * - If the character is hurt, it plays the hurt animation.
   * - If the character is above the ground, it pauses and plays the jumping animation.
   * - If the "D" or "A" keys are pressed, it plays the walking animation.
   * - If the character is idle, it pauses and plays the idle animation.
   * - Otherwise, it plays the long idle animation.
   */
  playCharacter() {
    if (this.isDead()) {
      this.sleepPause();
      this.deadAnimatio();
    } else if (this.isHurt()) {
      // debugger;
      this.playHurt();
    } else if (this.isAboveGround()) {
      this.sleepPause();
      this.playAnimation(this.Images_Jamping);
    } else if (this.world.keyboard.D || this.world.keyboard.A) {
      this.playWalking();
    } else if (this.isIdle()) {
      this.sleepPause();
      this.playAnimation(this.Images_Idle);
    } else {
      this.sleepPlaying();
      this.playAnimation(this.Images_Long_Idle);
    }
  }

  /**
   * Plays the walking animation and updates the walking state.
   *
   * This method pauses the character (if necessary), then plays the walking animation.
   * Additionally, it triggers the walking timer to track how long the character has been walking.
   */
  playWalking() {
    this.sleepPause();
    this.playAnimation(this.Images_Walkin_Pepe);
    this.timeWalking();
  }

  /**
   * Plays the hurt animation and sound when the character is hurt.
   *
   * This method pauses the character (if necessary), then plays the hurt animation
   * using the provided images. Additionally, it triggers the hurt sound effect to
   * indicate that the character has been injured.
   */
  playHurt() {
    this.sleepPause();
    this.playAnimation(this.Images_Hurt);
    this.hurtSound();
  }

  // neu
  deadAnimatio() {
    if (!this.deadAnimationStarted) {
      this.playDeadAnimation();
    }
    if (this.currentImage < this.Images_Dead.length) {
      this.playAnimation(this.Images_Dead);
      this.incrementCurrentImage();
    } else {
      // this.stopPlay();
      // this.youLostGame();
      // this.clerScreen();
      // this.triggerGameOver();
      this.deadAnimationEndCharacter = true;
      // this.endScreen.youLostGame();
      console.log("daed");
    }
  }

  // triggerGameOver() {
  //   const endScreen = new EndScreen(this.context);
  //   endScreen.showEndScreen(false); // false für "Game Over"
  // }

  /**
   * Initiates the jumping action by adjusting the object's speed and playing the jump sound.
   * This method is called when the object is triggered to jump (e.g., via keyboard input).
   */
  jump() {
    this.speedToJump();
    jumpSound.play();
  }

  /**
   * Pauses the sleep sound and sets the `isSleepingSoundPlaying` flag to false.
   * This method is called when the object is put into a "sleeping" state or when the sleep sound should be stopped.
   */
  sleepPause() {
    sleepSound.pause();
    this.isSleepingSoundPlaying = false;
  }

  /**
   * Plays the sleep sound if it's not already playing and sets the `isSleepingSoundPlaying` flag to true.
   * This method is called when the object enters a "sleeping" state and the sleep sound should be played.
   */
  sleepPlaying() {
    if (!this.isSleepingSoundPlaying) {
      sleepSound.play();
      this.isSleepingSoundPlaying = true;
    }
  }

  /**
   * Checks if the object is in an idle state based on the time elapsed since the last movement.
   * The object is considered idle if less than 3 seconds have passed since the last recorded movement.
   *
   * @returns {boolean} `true` if the object is idle (time passed < 3 seconds), `false` otherwise.
   */
  isIdle() {
    let timepassed = new Date().getTime() - this.currentTimeWalking;
    timepassed = timepassed / 1000;
    return timepassed < 3;
  }

  /**
   * Records the current time as the last time the object was walking.
   * This method updates the `currentTimeWalking` property to the current timestamp.
   */
  timeWalking() {
    this.currentTimeWalking = new Date().getTime();
  }

  /**
   * Sets the vertical speed for the jump.
   * This method adjusts the `speedY` property to control the object's upward movement when jumping.
   */
  speedToJump() {
    this.speedY = 30;
  }
}
