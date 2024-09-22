class throwingBottles extends MovableObject {
  height = 50;
  width = 70;
  speedY = 0;
  x = 0;
  y = 0;
  isBroken = false;
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
    this.x = x;
    this.y = y;
    this.otherDirection = otherDirection;
    this.throw();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.Images_salsa_bottle_rotation);
      // console.log("throw this bottle sped y", this.speedY);
      // console.log("throw this bottle y", this.y);
      // console.log("throw this bottle x", this.x);
    }, 1000 / 60);
  }

  throw() {
    // neu
    if (this.otherDirection !== false) {
      //otherDirection truh dann mache wurf -

      this.speedY = -10;
      this.x -= 20;
      this.applayGravity();
    } else {
      this.x; //+ 20;
      // this.y; //+ 20;
      this.speedY = 20;
      console.log("throw rechts x", this.x, "rechts speed y", this.speedY);
      this.applayGravity();
    }

    // this.x;
    // this.y;
    // this.speedY = 20;
    // this.applayGravity();

    setInterval(() => {
      if (this.isBroken) {
        this.x += 0;
        this.y += 0;
        this.speedY += 0;
      } else {
        this.x += 15;
      }
    }, 50);

    this.animate();
  }
}
