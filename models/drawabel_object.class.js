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

  /**
   * Draws a frame offset for specific game objects on the canvas.
   *
   * This method checks if the current instance belongs to certain classes
   * (e.g., `Character`, `Chicken`, `Endboss`, etc.) and, if so, initiates a
   * drawing path on the canvas context.
   *
   * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
   */
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

  /**
   * Loads multiple images and caches them in the `imageCache` object.
   *
   * @param {string[]} array - An array of image paths to be loaded.
   */
  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * Animates the sequence of images for a throwing bottle.
   *
   * This method cycles through a set of images stored in `imageCache`,
   * updating the current image based on the `currentImage` index.
   */
  animateThrowingBottles() {
    let i = this.currentImage % images.length;
    this.img = this.imageCache[images[i]];
    this.incrementCurrentImage();
  }

  /**
   * Increments the `currentImage` index to progress the animation.
   */
  incrementCurrentImage() {
    this.currentImage++;
  }
}
