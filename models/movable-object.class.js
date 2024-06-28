class MovableObject extends DrawabelObject {
  speed = 0.05;
  otherDirection = false;
  speedY = 0;
  acceleration = 3;

  lastHit = 0;
  lastMove = 0;
  energy = 100;
  bottle = 0;

  applayGravitty() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 190;
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
    let timepassed = new Date().getTime() - this.lastHit; // differenzin ms
    timepassed = timepassed / 1000; // difference in s
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

  // character.iscolliding ()chicken;
  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  // isColliding (obj) {
  //     return  (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) &&
  //             (this.Y + this.offsetY + this.height) >= obj.Y &&
  //             (this.Y + this.offsetY) <= (obj.Y + obj.height) &&
  //             obj.onCollisionCourse;
  // }
}
