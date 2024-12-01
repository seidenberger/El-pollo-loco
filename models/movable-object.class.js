class MovableObject extends DrawabelObject {
  x = 50;
  y = 130;
  otherDirection = false;
  speedY = 0;
  acceleration = 4;
  lastHit = 0;
  lastMove = 0;
  energy = 100;
  bottle = 0;
  coin = 0;
  enemyIsDead = false;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };
  endpiont = 4000;

  /**
   * Applies gravity to the object by adjusting its vertical speed and acceleration.
   *
   * This method uses `setInterval` to apply gravity at a regular interval (every 1/25th of a second).
   * It checks whether the object is above the ground or falling (speedY > 0). If the object is still
   * in the air and not broken, it reduces its vertical speed (`speedY`) and applies a reduction to its
   * acceleration, simulating the effect of gravity.
   */
  applayGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        if (!this.isBroken) {
          this.minusSpeedY();
          this.minusAcceleration();
        }
      }
    }, 1000 / 25);
  }

  /**
   * Checks if the object is above the ground.
   *
   * This method checks if the current object is an instance of `throwingBottles`, in which case
   * it always returns `true`, indicating the object is above the ground. If the object is not
   * a `throwingBottles` instance, it compares the object's `y` position to a threshold value (`190`).
   * If the `y` position is less than `190`, the object is considered above the ground.
   *
   * @returns {boolean} `true` if the object is above the ground, `false` otherwise.
   */
  isAboveGround() {
    if (this instanceof throwingBottles) {
      return true;
    } else {
      return this.y < 190;
    }
  }

  /**
   * Moves the object to the right by updating its horizontal position.
   *
   * This method increases the object's `x` position by its current `speed`, effectively moving it
   * to the right on the screen or in the game world.
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * Moves the object to the left by updating its horizontal position.
   *
   * This method decreases the object's `x` position by its current `speed`, effectively moving it
   * to the left on the screen or in the game world.
   */

  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Handles the logic when the object is hit, reducing its energy.
   *
   * This method decreases the object's energy by 5 units using `hitEenergyMinusFive()`.
   * If the energy falls below 0, it calls `energyZero()` to handle the case when the object runs out of energy.
   * If the energy is still positive, it updates the `lastHit` timestamp to the current time.
   */
  hit() {
    this.hitEenergyMinusFive();
    if (this.energy < 0) {
      this.energyZero();
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Checks if the object is still in a hurt state based on the time since the last hit.
   *
   * This method calculates the time that has passed since the last hit by comparing
   * the current time (`new Date().getTime()`) with the `lastHit` timestamp. If less than 1 second
   * has passed since the last hit, the object is considered to be in a hurt state and the method returns `true`.
   * Otherwise, it returns `false`.
   *
   * @returns {boolean} `true` if the object is still hurt (less than 1 second has passed since the last hit),
   * `false` otherwise.
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  /**
   * Checks if the object is dead based on its energy level.
   *
   * This method checks whether the object's energy has reached 0. If the energy is 0, the object
   * is considered dead and the method returns `true`. Otherwise, it returns `false`.
   *
   * @returns {boolean} `true` if the object's energy is 0 (dead), `false` otherwise.
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * Plays the animation by cycling through the provided images.
   *
   * This method selects the current image in the animation sequence by using the `currentImage` index,
   * then sets the `img` property of the object to the corresponding image path from the `images` array.
   * After updating the `img`, it increments the `currentImage` index to move to the next image in the sequence
   * for the next animation cycle.
   *
   * @param {Array<string>} images An array of image paths representing the animation sequence.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.incrementCurrentImage();
  }

  /**
   * Checks if the current object is colliding with another object.
   *
   * This method determines if the current object is colliding with the provided object `mo`.
   * It compares the positions and dimensions (width, height) of both objects, including any offsets,
   * to check if their boundaries overlap. The collision check accounts for the object's bounding box
   * relative to the offsets (left, right, top, bottom).
   *
   * @param {Object} mo The other object to check for a collision.
   * @param {number} mo.x The x position of the other object.
   * @param {number} mo.y The y position of the other object.
   * @param {number} mo.width The width of the other object.
   * @param {number} mo.height The height of the other object.
   * @param {Object} mo.offset The offsets (left, right, top, bottom) of the other object.
   * @returns {boolean} `true` if the objects are colliding, `false` otherwise.
   */
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  /**
   * Plays the hurt sound effect.
   *
   * This method plays the sound effect associated with the object being hurt. It calls the
   * `play()` method on the `hurtSound` object, which is expected to be a sound resource.
   */
  hurtSound() {
    hurtSound.play();
  }

  /**
   * Starts the dead animation for the object.
   *
   * This method initializes the dead animation by resetting the `currentImage` to 0,
   * which points to the first frame of the dead animation. It also sets the `deadAnimationStarted`
   * flag to `true` to indicate that the animation has begun.
   */
  playDeadAnimation() {
    this.currentImage = 0;
    this.deadAnimationStarted = true;
  }

  /**
   * Decreases the vertical position of the object based on its vertical speed.
   *
   * This method updates the object's vertical position (`y`) by subtracting the current vertical speed
   * (`speedY`). This is typically used to simulate gravity or other forces acting on the object,
   * causing it to move downwards over time.
   */
  minusSpeedY() {
    this.y -= this.speedY;
  }

  /**
   * Decreases the vertical speed of the object based on its acceleration.
   *
   * This method reduces the object's vertical speed (`speedY`) by subtracting the current
   * acceleration (`acceleration`). This is typically used to simulate the effect of gravity or
   * friction, where the object gradually slows down in the vertical direction.
   */
  minusAcceleration() {
    this.speedY -= this.acceleration;
  }

  /**
   * Reduces the object's energy by 5.
   *
   * This method decreases the object's energy by 5 units. It is typically called when the object
   * is hit or takes damage, simulating a loss of energy.
   */
  hitEenergyMinusFive() {
    this.energy -= 5;
    console.log();
  }

  /**
   * Sets the object's energy to zero.
   *
   * This method resets the object's energy to 0, typically used when the object has no remaining
   * energy, indicating that it is in a defeated or inactive state.
   */
  energyZero() {
    this.energy = 0;
  }

  /**
   * Sets the horizontal position of the object.
   *
   * This method sets the `x` coordinate (horizontal position) of the object to the given value `x`.
   * It is typically used to move the object to a specific horizontal location in the game world.
   *
   * @param {number} x The new horizontal position (x-coordinate) to set for the object.
   */
  horizontalPosition(x) {
    this.x = x;
  }

  /**
   * Sets the vertical position of the object.
   *
   * This method sets the `y` coordinate (vertical position) of the object to the given value `y`.
   * It is typically used to move the object to a specific vertical location in the game world.
   *
   * @param {number} y The new vertical position (y-coordinate) to set for the object.
   */
  verticalPosition(y) {
    this.y = y;
  }
}
