class MovableObject extends DrawabelObject {
  x = 50;
  y = 130;
  
  // speed = 0.05;
  otherDirection = false;
  speedY = 0;
  acceleration = 3;

  lastHit = 0;
  lastMove = 0;
  energy = 100;
  // bottle = 0;
  bottle = 50;
  coin = 0;

  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }



  applayGravitty() {
    setInterval(() => {
      
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
        // console.log('this.speedy', this.speedY)
      
      } 
    }, 1000 / 25);
  }

  isAboveGround() {

    // console.log('Character isAboveGround y:', this.y);
    // console.log('Character isAboveGround height:', this.height);
    // console.log('Bottom edge of Character isAboveGround:', this.y + this.height);
    return this.y < 190;
    // return this.y + this.height < 190;

  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  hit() {
    
    this.energy -= 5;
    this.hurtSound();
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {


    let timepassed = new Date().getTime() - this.lastHit; // differenzin ms
    timepassed = timepassed / 1000; // difference in s
    // hurt_sound.pause();

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

  //haracter.iscolliding ()chicken;



  isColliding(mo) {
    return (
        this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
        this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
        this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
        this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
}



chickenDead() {
        
  this.playAnimation(this.Images_chicken_small_dead);
}



hurtSound(){

    hurt_sound.play() 

}

// animateBottleRotation() {
//   setInterval(() => {
//     this. playAnimation(this.Images_salsa_bottle_rotation)
//   }, 1000 / 60);
// }



}
