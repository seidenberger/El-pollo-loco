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
  }

  Images_salsa_bottle = [
    "img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
  ];

  Images_salsa_bottle_rotation  = [
    'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    
  ];

  // Images_salsa_bottle_splash = [
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
  //   ];

  constructor() {
    super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
    this.loadImages(this.Images_salsa_bottle);
    this.loadImages(this.Images_salsa_bottle_rotation);
    this.x = 250 + Math.random() *1500;
    this.animate();


  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.Images_salsa_bottle)
    }, 1000/ 2);
  }


}