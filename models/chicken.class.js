class Chicken extends MovableObject {
  y = 360;
  height = 60;
  width = 50;
  offset = {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5,
  };
  Images_chicken_normal = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  Images_chicken_dead = [
    "img/3_enemies_chicken/chicken_normal/2_dead/dead.png",
  ];

  /**
   * Initializes an instance of the chicken enemy, loading its images, setting its initial state,
   * and applying random speeds and positions.
   *
   * The constructor loads the initial image for the chicken, sets the initial state as not dead,
   * loads various image sets (such as small and dead chicken images), applies a random speed,
   * assigns a random horizontal position, and starts the animation.
   *
   * @constructor
   */
  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.deadChicken = false;
    this.loadImages(this.Images_chicken_normal);
    this.loadImages(this.Images_chicken_dead);
    this.speedRandem();
    this.horizontalPositionRandom();
    this.animate();
  }

  /**
   * Starts the animation loop for character movement and chicken animations.
   *
   * This method sets up two intervals:
   * - One interval calls `moveLeft()` every 1/60th of a second (approximately 16.67 milliseconds),
   *   which allows the character to move left at a frame rate of 60 FPS.
   * - The second interval calls `playChicken()` every 250 milliseconds to update the chicken's animation.
   */
  animate() {
    setInterval(() => this.moveLeft(), 1000 / 60);
    setInterval(() => this.playChicken(), 250);
  }

  /**
   * Plays the appropriate chicken animation based on its state.
   *
   * This method checks if the chicken is dead. If the chicken is dead, it plays the dead chicken animation.
   * If the chicken is not dead, it plays the normal chicken animation.
   */
  playChicken() {
    if (this.deadChicken) {
      this.playAnimation(this.Images_chicken_dead);
    } else {
      this.playAnimation(this.Images_chicken_normal);
    }
  }

  /**
   * Sets a random speed for the object within a specified range.
   * The speed is set to a random value between 0.08 and 1.35.
   */
  speedRandem() {
    this.speed = 0.08 + Math.random() * 1.35;
  }

  /**
   * Sets a random horizontal position for the object within a specified range.
   * The horizontal position (`x`) is set to a random value between 1200 and 1500.
   */
  horizontalPositionRandom() {
    this.x = 1200 + Math.random() * 1500;
  }
}
