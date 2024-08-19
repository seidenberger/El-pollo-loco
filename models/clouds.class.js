class Cloud extends MovableObject {
  // y = 50;
  height = 180;
  width = 500;

  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
    // this.x = 200 + Math.random() * 2500;
    this.speed = 0.05 + Math.random() * 0.55;

    this.animate();
  }
  animate() {
    setInterval(() => {
      // this.moveLeft();
      this.x -= 0.2;
    }, 1000 / 60);
  }
}
