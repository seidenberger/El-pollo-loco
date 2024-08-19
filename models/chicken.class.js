class Chicken extends MovableObject {
  y = 360;

  height = 60;
  width = 50;
  Images_chicken_normal = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  Images_chicken_normal_dead = [
    "img/3_enemies_chicken/chicken_normal/2_dead/dead.png",
  ];

  offset = {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5,
  };

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.Images_chicken_normal);
    this.loadImages(this.Images_chicken_normal_dead);
    this.x = 1200 + Math.random() * 1500;
    // this.x = 300 + Math.random() * 380;
    this.speed = 0.08 + Math.random() * 1.35;
    // this.x =300
    this.animate();
  }

  animate() {
    {
      setInterval(() => {
        this.moveLeft();
      }, 1000 / 60);

      setInterval(() => {
        this.playAnimation(this.Images_chicken_normal);
      }, 250);
    }
  }
}
