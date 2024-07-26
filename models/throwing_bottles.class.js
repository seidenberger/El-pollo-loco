class throwingBottles extends MovableObject {


  // world;

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

  // constructor() {
  //       super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
  //       this.loadImages(this.Images_salsa_bottle_rotation)
  //     // this.x = 170;
  //     // this.y  = 320;
  //       this.width = 60;
  //       this.height = 60;
  //       this.animate();
  // }

  constructor(x) {
    super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
    this.world = world;
    this.x = x;
    // this.y = y;
    this.loadImages(this.Images_salsa_bottle_rotation)

    this.width = 60;
    this.height = 60;
    this.update();
    this.animate();
}

update() {
  if (this.world && this.world.character) {
    console.log('Character X position:', this.world.character.x);
    console.log('Character Y position:', this.world.character.y);
  } else {
    console.error('World or Character is undefined');
  }
}

  animate() {
      setInterval(() => {
        if(this.world.keyboard.SPACE || this.world.keyboard.ENTER) { 
          this.speedY = 30;
        this.loadImages(this.Images_salsa_bottle_rotation);
        this.playAnimation(this.Images_salsa_bottle_rotation)
        console.log(throwingBottles, 'this.world.x')
        }
      }, 1000 / 60);
  }



}
