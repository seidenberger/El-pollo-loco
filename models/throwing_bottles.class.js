class throwingBottles extends MovableObject {

  x = 60;
  world;

    Images_salsa_bottle_rotation  = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
        
    ];

      // Images_salsa_bottle_splash = [
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
  //   'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
  //   ];

  constructor() {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.Images_salsa_bottle_rotation)
      // this.x = 170;
      this.y  = 320;
        this.width = 60;
        this.height = 60;
        // this.character = character;
        // this.animateBottleRotation();
        // this.x = this.character.x;
        this.animate();
  }

  animate() {
      setInterval(() => {
        // if(this.world.keyboard.SPACE || this.world.keyboard.ENTER) { 
        this.loadImages(this.Images_salsa_bottle_rotation);
        // }
        this.playAnimation(this.Images_salsa_bottle_rotation)
      }, 1000);
  }

  animateBottleRotation() {
      // debugger
    // setInterval(() => {
      console.log('animateBottleRotation', this.x)
      console.log('bottel x', this.x )

        this.speedY = 20;

      }

  // }


}