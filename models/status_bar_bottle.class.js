class StatusbarBottle extends DrawabelObject {

  // height = 40;
  // width = 90;
  percentage = 0;

  Images_Statusbar_bottle = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
  ];

  constructor() {
    super();
    this.loadImages(this.Images_Statusbar_bottle);
    this.x = 10;
    this.y = 15;
    this.height = 40;
    this.width = 200;
    // setPercentageBottle(20);
  }

  // setPercentageBottle(percentage) {
  //   this.percentage = percentage;
  //   let path = this.Images_Statusbar_bottle[this.resolveImageIndex()];
  //   this.img = this.imageCache[path];
  // }

  // resolveImageIndex() {
  //   // console.log('Collision with Caracter', this.character.energy)

  //   if (this.percentage == 100) {
  //     return 5;
  //   } else if (this.percentage > 80) {
  //     return 4;
  //   } else if (this.percentage > 60) {
  //     return 3;
  //   } else if (this.percentage > 40) {
  //     return 2;
  //   } else if (this.percentage > 20) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // }
}
