class DrawabelObject {
  x = 50;
  y = 270;
  img;
  imageCache = {};
  currentImage = 0;

  /**
   * Loads an image from the specified path and assigns it to the `img` property.
   *
   * @param {string} path - The path to the image file.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Draws the loaded image onto a canvas.
   *
   * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas where the image will be drawn.
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrameOffset(ctx) {
    if (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof Endboss ||
      this instanceof ChickenSmall ||
      this instanceof Coin ||
      this instanceof Bottle ||
      this instanceof throwingBottles
    ) {
      ctx.beginPath();
      ctx.stroke();
    }
  }

  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  animateThrowingBottles() {
    let i = this.currentImage % images.length;
    this.img = this.imageCache[images[i]];
    this.incrementCurrentImage();
  }

  incrementCurrentImage() {
    this.currentImage++;
  }
}
