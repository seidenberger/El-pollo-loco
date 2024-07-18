class throwingBottles extends MovableObject {

  y = 60;
  

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
        this.width = 60;
        this.height = 60;
        // this.animateBottleRotation();
        }

    animateBottleRotation() {
    setInterval(() => {
      if(this.world.keyboard.SPACE || this.world.keyboard.ENTER) { 
        // this.speedY = 20;
      }
    }, 1000);

      console.log('animateBottleRotation', this.x)
      }



}
        // debugger
        // setInterval(() => {
        //   this.playAnimation(this.Images_salsa_bottle_rotation)
        // }, 1000 / 2 ) 
            // bottelThrow() {


    //     debugger
       
       
    //    // in welche richtung schau ich 
    //      // hit() = 20 %
    //      // isColliding(mo)
    //      // applayGravitty()
    //    }