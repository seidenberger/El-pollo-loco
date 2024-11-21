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

  constructor() {
    super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.loadImages(this.Images_salsa_bottle);

    this.x = 250 + Math.random() * 1500;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.Images_salsa_bottle);
    }, 1000 / 2);
  }
}
