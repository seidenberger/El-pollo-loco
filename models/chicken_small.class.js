class ChickenSmall extends MovableObject {
  y = 360;
  height = 60;
  width = 50;
  offset = {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5,
  };
  Images_chicken_small = [
    "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];
  Images_chicken_dead = ["img/3_enemies_chicken/chicken_small/2_dead/dead.png"];

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
    this.loadImages(this.Images_chicken_small);
    this.loadImages(this.Images_chicken_dead);
    this.speedRandem();
    this.horizontalPositionRandom();
    this.animate();
  }

  /**
   * Controls the chicken's movement and animation.
   *
   * This method manages the chicken's leftward movement at a constant rate and ensures the
   * correct animation is played based on the chicken's state. If the chicken is not dead,
   * it continuously plays the small chicken animation.
   */
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      if (this.deadChicken) {
      } else {
        this.playAnimation(this.Images_chicken_small);
      }
    }, 250);
  }

  /**
   * Sets a random speed for the object within a specified range.
   * The speed is set to a random value between 0.07 and 0.57.
   */
  speedRandem() {
    this.speed = 0.07 + Math.random() * 0.5;
  }

  /**
   * Sets a random horizontal position for the object within a specified range.
   * The horizontal position (`x`) is set to a random value between 300 and 1000.
   */
  horizontalPositionRandom() {
    this.x = 300 + Math.random() * 700;
  }
}
