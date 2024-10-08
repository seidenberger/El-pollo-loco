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

  applayGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        if (!this.isBroken) {
          this.y -= this.speedY;
          this.speedY -= this.acceleration;
        }
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof throwingBottles) {
      return true;
    } else {
      return this.y < 190;
      // console.log("fall", this.y);
    }
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  isDead() {
    return this.energy == 0;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  hurtSound() {
    hurtSound.play();
  }
}
