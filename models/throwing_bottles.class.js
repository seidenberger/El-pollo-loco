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

  animate() {
    setInterval(() => {
      this.playAnimation(this.Images_salsa_bottle_rotation);
    }, 1000 / 60);
  }

  throw() {
    this.otherDirection !== false;
    this.x;
    this.speedY = 20;
    this.applayGravity();
    this.throwSound();

    setInterval(() => {
      if (this.isBroken) {
        this.x += 0;
        this.y += 0;
        this.speedY += 0;

        this.throwSoundplay();
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
}
