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
    }, 1000 / 60);
  }

  throw() {
    this.throwBottl();
    setInterval(() => {
      if (this.isBroken) {
        this.bottleIsBroken();
      } else if (this.otherDirection == false) {
        this.x += 15;
      } else {
        this.x - 10;
        this.x -= 15;
      }
    }, 50);
    this.animate();
  }

  throwSoundplay() {
    if (!this.throwSoundPlaying) {
      throwSound.play();
      this.throwSoundPlaying = true;
    }
  }

  throwSound() {
    throwSound.pause();
    this.throwSoundPlaying = false;
  }

  throwBottl() {
    this.otherDirection !== false;
    this.x;
    this.speedY = 20;
    this.applayGravity();
    this.throwSound();
  }

  bottleIsBroken() {
    this.x += 0;
    this.y += 0;
    this.speedY += 0;

    this.throwSoundplay();
  }
}
