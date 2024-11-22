class Coin extends MovableObject {
  y = 300;
  x = 300;
  height = 90;
  width = 90;
  offset = {
    top: 30,
    bottom: 30,
    left: 30,
    right: 30,
  };

  Images_coin = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

  /**
   * Initializes an instance of the Coin object at a specific position.
   *
   * This constructor:
   * - Loads the image for the Coin.
   * - Loads the images for the Coin's animation.
   * - Sets the horizontal and vertical position of the Coin using the provided `x` and `y` coordinates.
   * - Starts the animation loop for the Coin.
   *
   * @param {number} x The horizontal position of the Coin on the x-axis.
   * @param {number} y The vertical position of the Coin on the y-axis.
   */
  constructor(x, y) {
    super().loadImage("img/8_coin/coin_1.png");
    this.loadImages(this.Images_coin);
    this.horizontalPosition(x);
    this.verticalPosition(y);
    this.animate();
  }

  /**
   * Starts the animation loop for the Coin.
   *
   * This method uses `setInterval` to repeatedly play the Coin's animation
   * at a specified interval (every 1 second). The animation is played using the
   * images stored in the `Images_coin` array.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.Images_coin);
    }, 1000);
  }
}
