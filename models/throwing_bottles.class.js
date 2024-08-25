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

  constructor(x, y, otherDirection) {
    super().loadImage(
      "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );
    // this.world = world;
    this.x = x;
    this.y = y;
    this.otherDirection = otherDirection;
    this.loadImages(this.Images_salsa_bottle_rotation);
    // this.updatePosition();
    // this.applayGravitty();
  }

  updatePosition(x, y, otherDirection) {
    this.x = x;
    this.y = y;
    this.otherDirection = otherDirection;
    console.log("throwingBottles x", this.x);
    console.log("throwingBottles y", this.y);
  }

  animateThrowingBottles() {
    // debugger;
    setInterval(() => {
      this.playAnimation(this.Images_salsa_bottle_rotation);
    }, 1000);
  }

  throwingBottles() {
    console.log("Flasche wird geworfen!");
    this.animateThrowingBottles();
    this.bottleFlies();

    // if (this.otherDirection) {
    //   this.x -= 10; // Beispielwert für links
    //   this.bottleFlies();
    //   console.log("left", this.x);
    // } else {
    //   this.x += 10; // Beispielwert für rechts
    //   this.bottleFlies();
    //   console.log("right", this.x);
    // }
  }

  bottleFlies() {
    this.speedY = 20;
    this.applayGravitty();
    // const interval =
    setInterval(() => {
      if (this.otherDirection) {
        this.x -= 10; // Bewegt sich nach links
      } else {
        this.x += 10; // Bewegt sich nach rechts
      }

      // Überprüfen, ob die Flasche den Boden erreicht hat oder aus dem Bildschirm ist'
      // if (!this.isAboveGround() || this.x < 0 || this.x > this.world.level.level_end_x) {
      //     clearInterval(interval); // Beendet die Bewegun''g der Flasche
      //     this.stopAnimation(); // Beendet die Animation'
      // }
    }, 1000 / 25);
  }

  //   // Methode für die Bewegung der Flasche
  //   throw() {
  //     if (this.otherDirection) {
  //         this.x -= 10; // Beispielwert für links
  //     } else {
  //         this.x += 10; // Beispielwert für rechts
  //     }
  // }

  // applyGravity() {
  //   setInterval(() => {
  //     if (this.y < 300 || this.speedY > 0) {
  //       this.y -= this.speedY;
  //       this.speedY -= this.acceleration;
  //     }
  //   }, 1000 / 25);
  //   console.log("Aktueller Wert von applyGravity speedY:", this.speedY);
  // }
}
