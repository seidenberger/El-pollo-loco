class throwingBottles extends MovableObject {
  height = 50;
  width = 70;
  speedY = 0;
  x = 0;
  y = 0;
  isBroken = false;
  throwSoundPlaying = false;
  offset = {
    top: 10,
    bottom: 5,
    left: 20,
    right: 15,
  };

  Images_salsa_bottle_rotation = [
    "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  Images_salsa_bottle_splash = [
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  /**
   * Creates an instance of the object, sets its position, and initializes its state.
   *
   * This constructor loads the image resources for the object, sets its horizontal and vertical position
   * based on the provided coordinates (`x` and `y`), and initializes the `otherDirection` property.
   * Additionally, it triggers the throw action for the object.
   *
   * @param {number} x The horizontal position (x-coordinate) to set for the object.
   * @param {number} y The vertical position (y-coordinate) to set for the object.
   * @param {boolean} otherDirection A flag indicating the direction in which the object is thrown.
   */
  constructor(x, y, otherDirection) {
    super().loadImage(
      "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );
    this.loadImages(this.Images_salsa_bottle_rotation);
    this.loadImages(this.Images_salsa_bottle_splash);
    this.horizontalPosition(x);
    this.verticalPosition(y);
    this.otherDirection = otherDirection;
    this.throw();
  }

  /**
   * Handles the animation loop for the object.
   *
   * This method sets up an interval that repeatedly plays the animation frames specified in `Images_salsa_bottle_rotation`.
   * It continuously updates the object’s appearance, based on the current frame, at a rate defined by `1000 / 60` (approximately 60 frames per second).
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.Images_salsa_bottle_rotation);
    }, 700 / 60);
  }

  /**
   * Initiates the throwing behavior of the bottle.
   *
   * This method triggers the bottle's throw action, determines its movement trajectory,
   * and handles its animation and state updates. It checks if the bottle is broken and
   * executes appropriate logic for both directions (left or right) of the throw.
   *
   * - Calls `throwBottl()` to initialize the throw.
   * - Updates the bottle's position at regular intervals based on its direction and state.
   * - Starts the animation loop for the bottle's movement.
   */
  throw() {
    this.throwBottl();
    setInterval(() => {
      if (this.isBroken) {
        this.bottleIsBroken();
      } else if (this.otherDirection == false) {
        this.horizontalPositionThrowPlus();
      } else {
        this.horizontalPositionThrowMinus();
      }
    }, 50);
    this.animate();
  }

  /**
   * Plays the throwing sound effect.
   *
   * This method ensures the throwing sound effect is played only once during the throw action.
   * It checks if the sound is already playing using the `throwSoundPlaying` flag,
   * and if not, it plays the sound and sets the flag to `true`.
   */
  throwSoundplay() {
    if (!this.throwSoundPlaying) {
      throwSound.play();
      this.throwSoundPlaying = true;
    }
  }

  /**
   * Stops the throwing sound effect.
   *
   * This method pauses the throwing sound effect if it is currently playing
   * and resets the `throwSoundPlaying` flag to `false`, allowing the sound
   * to be played again in the future when needed.
   */
  throwSound() {
    throwSound.pause();
    this.throwSoundPlaying = false;
  }

  /**
   * Initiates the throwing logic for the bottle.
   *
   * This method sets up the necessary state and mechanics for the bottle throw, including:
   * - Determining the initial throwing direction.
   * - Adjusting the bottle's horizontal and vertical positions.
   * - Applying gravity to simulate a realistic arc.
   * - Stopping any currently playing throw sound to prepare for a new one.
   */
  throwBottl() {
    this.otherDirection !== false;
    this.x;
    this.throwingBottlesSppedY();
    this.applayGravity();
    this.throwSound();
  }

  /**
   * Handles the logic when the bottle breaks.
   *
   * This method executes specific actions after the bottle has broken:
   * - Stops the vertical movement of the bottle by setting its vertical speed to zero.
   * - Plays the breaking sound effect if it is not already playing.
   */
  bottleIsBroken() {
    this.bottleIsBrokenSpeedYZero();
    this.throwSoundplay();
  }

  /**
   * Moves the bottle to the right during a throw.
   *
   * This method increases the horizontal position of the bottle by a fixed value of 15 pixels,
   * simulating its movement to the right during the throw action.
   */
  horizontalPositionThrowPlus() {
    this.x += 15;
  }

  /**
   * Moves the bottle to the left during a throw.
   *
   * This method decreases the horizontal position of the bottle by a fixed value of 15 pixels,
   * simulating its movement to the left during the throw action.
   */
  horizontalPositionThrowMinus() {
    this.x -= 15;
  }

  /**
   * Sets the vertical speed for the thrown bottle.
   *
   * This method initializes the vertical speed (`speedY`) of the bottle to a value of 20,
   * simulating an upward motion during the throw.
   */
  throwingBottlesSppedY() {
    this.speedY = 20;
  }

  /**
   * Stops the vertical movement of the bottle when it breaks.
   *
   * This method ensures that the vertical speed (`speedY`) of the bottle remains unchanged
   * (effectively zero), halting any further vertical motion after the bottle breaks.
   */
  bottleIsBrokenSpeedYZero() {
    this.speedY += 0;
  }
}
