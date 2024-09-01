class throwingBottles extends MovableObject {
  height = 50;
  width = 70;
  speedY = 0;
  x = 0;
  y = 0;
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

  constructor(x, y) {
    super().loadImage(
      "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );
    this.loadImages(this.Images_salsa_bottle_rotation);
    this.loadImages(this.Images_salsa_bottle_splash);
    this.x = x;
    this.y = y;
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
    this.x;
    this.y;
    this.speedY = 20;
    this.applayGravity();
    setInterval(() => {
      this.x += 15;
      // console.log("Updated X:", this.x, "Updated Y:", this.y);
      // debugger;
      // console.log("throw this bottle sped y", this.speedY);
      // console.log("throw this bottle y", this.y);
      // console.log("throw this bottle x", this.x);

      if (!this.isAboveGround()) {
        // debugger;
        // this.stopMovement();
        this.playAnimation(this.Images_salsa_bottle_splash);
      }
    }, 50);
    this.animate();
    // console.log();
    // debugger;
  }

  stopMovement() {
    clearInterval(this.movementInterval); // Bewegung stoppen
    clearInterval(this.animationInterval); // Rotation stoppen
  }
}
