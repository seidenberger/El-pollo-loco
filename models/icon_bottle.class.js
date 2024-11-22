class Bottle extends MovableObject {
  y = 370;
  x = 250;
  height = 50;
  width = 70;
  offset = {
    top: 10,
    bottom: 5,
    left: 20,
    right: 15,
  };

  Images_salsa_bottle = [
    "img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
  ];

  /**
   * Initializes an instance of the Salsa Bottle object.
   *
   * This constructor:
   * - Loads the image for the Salsa Bottle on the ground.
   * - Loads the images for the Salsa Bottle's animation.
   * - Sets a random initial position along the x-axis within a specific range.
   * - Starts the animation loop for the Salsa Bottle.
   */
  constructor() {
    super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.loadImages(this.Images_salsa_bottle);

    this.x = 250 + Math.random() * 1500;
    this.animate();
  }

  /**
   * Starts the animation loop for the Salsa Bottle.
   *
   * This method uses `setInterval` to repeatedly play the Salsa Bottle's animation
   * at a specified interval (every 0.5 seconds). The animation is played using the
   * images stored in the `Images_salsa_bottle` array.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.Images_salsa_bottle);
    }, 1000 / 2);
  }
}
