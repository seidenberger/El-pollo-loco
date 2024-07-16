class Character extends MovableObject {

  y = 130;
  height = 240;
  width = 120;
  speed = 3;
  currentTimeWalking = 0;
  longIdle = true;
  world;
  // walking_sound = new Audio("audio/walking.mp3");
  longIdleThreshold = 5000;

  offset = {
    top: 100,
    bottom: 10,
    left: 25,
    right: 35,
  };

  Images_Walkin_Pepe = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];

  Images_Jamping = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];

  Images_Idle = [
    "img/2_character_pepe/1_idle/idle/I-1.png",
    "img/2_character_pepe/1_idle/idle/I-2.png",
    "img/2_character_pepe/1_idle/idle/I-3.png",
    "img/2_character_pepe/1_idle/idle/I-4.png",
    "img/2_character_pepe/1_idle/idle/I-5.png",
    "img/2_character_pepe/1_idle/idle/I-6.png",
    "img/2_character_pepe/1_idle/idle/I-7.png",
    "img/2_character_pepe/1_idle/idle/I-8.png",
    "img/2_character_pepe/1_idle/idle/I-9.png",
    "img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  Images_Long_Idle = [
    "img/2_character_pepe/1_idle/long_idle/I-11.png",
    "img/2_character_pepe/1_idle/long_idle/I-12.png",
    "img/2_character_pepe/1_idle/long_idle/I-13.png",
    "img/2_character_pepe/1_idle/long_idle/I-14.png",
    "img/2_character_pepe/1_idle/long_idle/I-15.png",
    "img/2_character_pepe/1_idle/long_idle/I-16.png",
    "img/2_character_pepe/1_idle/long_idle/I-17.png",
    "img/2_character_pepe/1_idle/long_idle/I-18.png",
    "img/2_character_pepe/1_idle/long_idle/I-19.png",
    "img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  Images_Hurt = [
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png",
  ];

  Images_Dead = [
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png",
  ];


  constructor() {
    super().loadImage(this.Images_Walkin_Pepe[0]);
    this.loadImages(this.Images_Walkin_Pepe);
    this.loadImages(this.Images_Dead);
    this.loadImages(this.Images_Jamping);
    this.loadImages(this.Images_Hurt);
    this.loadImages(this.Images_Idle);
    this.loadImages(this.Images_Long_Idle);
    this.applayGravitty();
    this.animate();
    // this.bottelThrow();

    this.idleStartTime = null; 
    this.isIdleState = false;
  }

  animate() {
    setInterval(() => {
      walking_sound.pause();
      if (this.world.keyboard.D && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        walking_sound.play();     
      }

      if (this.world.keyboard.A && this.x > 0) {
        this.moveLeft();
        walking_sound.play();
        this.otherDirection = true;
      }


      if (this.world.keyboard.UP && !this.isAboveGround()) {
        this.jump();
      }
      this.world.camera_x = -this.x + 150;
    }, 100 / 60);

    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.Images_Dead);
      } else if (this.isHurt()) {
        this.playAnimation(this.Images_Hurt);
      } else if (this.isAboveGround()) {
        this.playAnimation(this.Images_Jamping);
      } else if (this.world.keyboard.D || this.world.keyboard.A || this.world.keyboard.W) { //sprung und wurf was amcht der carater
        this.playAnimation(this.Images_Walkin_Pepe);
        this.currentTimeWalking = new Date().getTime();
      // } else if (this.world.keyboard.SPACE || this.world.keyboard.ENTER) {
      //   debugger
      //   this.bottelThrow();

      } else if (this.isIdle()) {

        this.playAnimation(this.Images_Idle);
      } else {
        this.playAnimation(this.Images_Long_Idle);
      }
    }, 60);
  }

  jump() {
    this.speedY = 30;

  }

  isIdle() {
    sleep_sound.play();
    let timepassed = new Date().getTime() - this.currentTimeWalking;
    timepassed = timepassed / 1000; 
    sleep_sound.pause();
    return timepassed < 3;
  }

}





