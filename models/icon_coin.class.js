class Coin extends MovableObject {
  y = 300;
  x = 300;

  height = 90;
  width = 90;

  offset = {
    top: 30,
    bottom: 30,
    left: 30,
    right: 30,
  };

  Images_coin = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

  constructor(x, y) {
    super().loadImage("img/8_coin/coin_1.png");
    this.loadImages(this.Images_coin);
    this.x = x;
    this.y = y;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.Images_coin);
    }, 1000);
  }
}
