class StatusbarEndboss extends MovableObject {
  Images_Statusbar_Endboss = [
    // 'img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
    // 'img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
    // 'img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
    // 'img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
    // 'img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
    // 'img/7_statusbars/2_statusbar_endboss/orange/orange100.png'

    "img/7_statusbars/2_statusbar_endboss/green/green0.png",
    "img/7_statusbars/2_statusbar_endboss/green/green20.png",
    "img/7_statusbars/2_statusbar_endboss/green/green40.png",
    "img/7_statusbars/2_statusbar_endboss/green/green60.png",
    "img/7_statusbars/2_statusbar_endboss/green/green80.png",
    "img/7_statusbars/2_statusbar_endboss/green/green100.png",
  ];

  // constructor(endboss) {
  constructor() {
    super();
    this.loadImages(this.Images_Statusbar_Endboss);
    this.y = 5;
    this.height = 40;
    this.width = 200;
    this.setPercentage(100);
  }

  updatePosition(x) {
    this.x = x;
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.Images_Statusbar_Endboss[this.resolveImageIndex()];
    this.img = this.imageCache[path];
    console.log("enbdbos y ");
  }

  resolveImageIndex() {
    // console.log('Collision with Caracter', this.character.energy)

    if (this.percentage == 100) {
      5;
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
