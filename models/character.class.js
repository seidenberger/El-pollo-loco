class Character extends MovableObject {
  height = 240;
  width = 120;
  speed = 5;
  currentTimeWalking = 0;
  longIdle = true;
  world;
  longIdleThreshold = 5000;
  deadAnimationStarted = false;
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
  constructor() {
    super().loadImage(this.Images_Walkin_Pepe[0]);
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
   * Controls the animations and movement of the object based on keyboard input and state.
   * This method handles various actions such as walking, jumping, and playing specific animations
   * depending on whether the object is idle, hurt, dead, or jumping.
   *
   * It also updates the camera position and manages the timing for animations and sound effects.
   */
  animate() {
    setInterval(() => {
      walkingSound.pause();
      if (this.world.keyboard.D && this.x < this.world.level.level_end_x) {
        this.moveRight();
        walkingSound.play();
        this.otherDirection = false;
      }

      if (this.world.keyboard.A && this.x > 0) {
        this.moveLeft();
        walkingSound.play();
        this.otherDirection = true;
      }

      if (this.world.keyboard.W && !this.isAboveGround()) {
        this.jump();
      }
      this.world.camera_x = -this.x + 150;
    }, 100 / 60);

    setInterval(() => {
      if (this.isDead()) {
        this.sleepPause();
        this.deadAnimatio();
      } else if (this.isHurt()) {
        this.sleepPause();
        this.playAnimation(this.Images_Hurt);
        this.hurtSound();
      } else if (this.isAboveGround()) {
        this.sleepPause();
        this.playAnimation(this.Images_Jamping);
      } else if (this.world.keyboard.D || this.world.keyboard.A) {
        this.sleepPause();
        this.playAnimation(this.Images_Walkin_Pepe);
        this.timeWalking();
      } else if (this.isIdle()) {
        this.sleepPause();
        this.playAnimation(this.Images_Idle);
      } else {
        this.sleepPlaying();
        this.playAnimation(this.Images_Long_Idle);
      }
    }, 60);
  }

  /**
   * Handles the animation sequence for when the object is dead.
   * This method checks if the death animation has started, and if not, it initiates it.
   * Then, it plays the death animation frames. Once all frames are played, it triggers the game over state.
   */
  deadAnimatio() {
    if (!this.deadAnimationStarted) {
      this.playDeadAnimation();
    }
    if (this.currentImage < this.Images_Dead.length) {
      this.playAnimation(this.Images_Dead);
      this.incrementCurrentImage();
    } else {
      gameOver();
    }
  }

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
