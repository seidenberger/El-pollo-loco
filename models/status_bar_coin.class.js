class StatusbarCoin extends DrawabelObject {
  Images_Statusbar_Coin = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png",
  ];

  // für was brauch ich  ?
  percentage = 0;

  constructor() {
    super().loadImage(
      "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png"
    );
    // super();
    // debugger
    this.loadImages(this.Images_Statusbar_Coin);
    this.x = 10;
    this.y = 70;

    this.height = 40;
    this.width = 200;

    this.setPercentageCoin(this.percentage);
  }

  setPercentageCoin(percentage) {
    this.percentage = percentage;
    let path = this.Images_Statusbar_Coin[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    // console.log('Collision with Caracter', this.character.energy)

    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
