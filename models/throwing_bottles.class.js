class throwingBottles extends MovableObject {
  width = 60;
  height = 60;
  speedY = 0;
  x = 0;
  y = 0;
  offset = {
    top: 10,
    bottom: 5,
    left: 20,
    right: 15,
  };

  world;

  Images_salsa_bottle_rotation = [
    "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  // Images_salsa_bottle_splash = [
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
  //   ];

  constructor(x, y) {
    super().loadImage(
      "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );

    console.log("Konstruktor aufgerufen mit x:", x, "y:", y); // Debugging
    this.world = world;
    this.x = x;
    this.y = y;

    if (typeof x === "undefined" || typeof y === "undefined") {
      console.error("x oder y sind undefined!"); // Fehlererkennung
    }

    // this.world = world;
    // this.x = x;
    // this.y = y;
    this.loadImages(this.Images_salsa_bottle_rotation);
    this.updatePosition();
    // this.animatethrowingBottles();
    this.applyGravity();
  }

  updatePosition() {
    // this.x;
    //   this.y;
    // // console.log('throwingBottles x', this.x )
    // // console.log('throwingBottles y', this.y )
    // console.log('updatePosition aufgerufen mit x:', this.x, 'y:', this.y); // Debugging
  }

  animatethrowingBottles() {
    setInterval(() => {
      this.playAnimation(this.Images_salsa_bottle_rotation);
    }, 1000);
  }

  applyGravity() {
    setInterval(() => {
      if (this.y < 300 || this.speedY > 0) {
        // 300 ist der Boden
        this.y -= this.speedY; // Bewegung der Flasche nach oben
        this.speedY -= this.acceleration; // Simulation der Schwerkraft
      }
    }, 1000 / 25); // 25 FPS
    console.log("Aktueller Wert von applyGravity speedY:", this.speedY);
  }

  throwingBottles() {
    console.log("animate throwing Bottles");

    this.speedY = 160;
    console.log("Aktueller Wert von speedY:", this.speedY);
  }
}
