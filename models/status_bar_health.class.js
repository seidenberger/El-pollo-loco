class StatusbarHealth extends DrawabelObject {
  y = 0;
  Images_Statusbar_health = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
  ];

  /**
   * Initializes an instance of the status bar for the bottle.
   *
   * This constructor loads the initial image for the bottle status bar,
   * sets up the image set for the status bar, and applies specific positions,
   * height, width, and the percentage value for the bottle's status.
   */
  constructor() {
    super();
    this.loadImages(this.Images_Statusbar_health);
    this.horizontalPositionTen();
    this.verticalPosition();
    this.statusbarheight();
    this.statusbarwidth();
    this.setPercentage(100);
  }

  /**
   * Sets the percentage value for the bottle and updates the displayed image based on the percentage.
   *
   * This method updates the `percentage` property and selects the appropriate image for the bottle status bar
   * based on the current percentage. It then updates the `img` property to display the correct image from the image cache.
   *
   * @param {number} percentage - The percentage value (from 0 to 100) to set for the bottle.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.Images_Statusbar_health[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Resolves the appropriate image index based on the current percentage of the bottle.
   *
   * This method checks the `percentage` property and returns an index corresponding to a specific image
   * for the bottle status bar. The image index varies depending on the percentage value.
   *
   * @returns {number} The index of the image corresponding to the current percentage.
   */
  resolveImageIndex() {
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

  /**
   * Sets the horizontal position of the object to a fixed value of 10.
   *
   * This method updates the `x` property to set the object's position at 10 units on the horizontal axis.
   */
  horizontalPositionTen() {
    this.x = 10;
  }

  /**
   * Sets the vertical position of the object.
   *
   * This method assigns a value to the `y` property to set the vertical position of the object.
   * The method currently references `this.y`, but does not explicitly change or set a value.
   *
   * (Consider adding logic or a default value to this method.)
   */
  verticalPosition() {
    this.y;
  }

  /**
   * Sets the height of the status bar to a fixed value of 40.
   *
   * This method updates the `height` property to set the height of the status bar to 40 units.
   */
  statusbarheight() {
    this.height = 40;
  }

  /**
   * Sets the width of the status bar to a fixed value of 200.
   *
   * This method updates the `width` property to set the width of the status bar to 200 units.
   */
  statusbarwidth() {
    this.width = 200;
  }
}
