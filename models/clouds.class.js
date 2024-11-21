class Cloud extends MovableObject {
  height = 180;
  width = 500;

  /**
   * Initializes an instance of the cloud object, loading its image, setting its position,
   * applying random speed, and starting its animation.
   *
   * The constructor loads the image for the cloud, sets its horizontal and vertical positions
   * based on the provided `x` and `y` coordinates, assigns a random speed to the cloud,
   * and starts the animation.
   *
   * @constructor
   * @param {string} imagePath - The path to the image to load for the cloud.
   * @param {number} x - The horizontal position (x-coordinate) of the cloud.
   * @param {number} y - The vertical position (y-coordinate) of the cloud.
   */
  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.horizontalPosition(x);
    this.verticalPosition(y);
    this.cloudSpeeedRandom();
    this.animate();
  }

  /**
   * Animates the cloud by moving it horizontally to the left.
   *
   * This method decreases the cloud's horizontal position (`x`) by 0.2 units every frame,
   * causing the cloud to move left over time. The movement happens at a rate of 60 frames per second.
   *
   * @returns {void} This method does not return anything. It directly modifies the cloud's `x` position.
   */
  animate() {
    setInterval(() => {
      this.x -= 0.2;
    }, 1000 / 60);
  }

  /**
   * Sets a random speed for the cloud.
   *
   * This method assigns a random speed to the cloud by generating a value between 0.05 and 0.60.
   * The speed is used to control how fast the cloud moves.
   *
   * @returns {void} This method does not return anything. It modifies the `speed` property of the cloud.
   */
  cloudSpeeedRandom() {
    this.speed = 0.05 + Math.random() * 0.55;
  }
}
