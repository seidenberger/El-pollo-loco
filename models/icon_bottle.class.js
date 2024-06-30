class Bottle extends DrawabelObject {
  y = 250;
  x = 250;

  height = 30;
  width = 25;

  Images_salsa_bottle = [
    "img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
  ];

  constructor() {
    super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
    this.loadImages(this.Images_salsa_bottle);
    // this.animate();
  }

  animate() {
    
  }
}