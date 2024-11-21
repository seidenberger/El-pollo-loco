class BackObject extends MovableObject {
  height = 480;
  width = 720;

  /**
   * Initializes an instance of the object with a specified image, horizontal position, and vertical position.
   *
   * @constructor
   * @param {string} imagePath - The file path to the image that will be loaded.
   * @param {number} x - The horizontal position (x-coordinate) for the object.
   */
  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.horizontalPosition(x);
    this.verticalPosition();
  }

  /**
   * Sets the horizontal position (x-coordinate) of the object.
   *
   * @param {number} x - The horizontal position to assign to the object.
   */
  // horizontalPosition(x) {
  //   this.x = x;
  // }

  /**
   * Sets the vertical position (y-coordinate) of the object based on its height.
   * The vertical position is calculated as `480 - this.height`, which places the object
   * at the bottom of the screen or container.
   */
  verticalPosition() {
    this.y = 480 - this.height;
  }
}
