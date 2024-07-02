class Character extends MovableObject {
  // x = 50;
  // y = 190;
  y = 130;

  height = 240;
  width = 120;
  speed = 5;
  longIdle = true;

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

  // Images_Long_Idle = [
  //     'img/2_character_pepe/1_idle/long_idle/I-11.png',
  //     'img/2_character_pepe/1_idle/long_idle/I-12.png',
  //     'img/2_character_pepe/1_idle/long_idle/I-13.png',
  //     'img/2_character_pepe/1_idle/long_idle/I-14.png',
  //     'img/2_character_pepe/1_idle/long_idle/I-15.png',
  //     'img/2_character_pepe/1_idle/long_idle/I-16.png',
  //     'img/2_character_pepe/1_idle/long_idle/I-17.png',
  //     'img/2_character_pepe/1_idle/long_idle/I-18.png',
  //     'img/2_character_pepe/1_idle/long_idle/I-19.png',
  //     'img/2_character_pepe/1_idle/long_idle/I-20.png',

  // ];

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

  world;
  walking_sound = new Audio("audio/walking.mp3");

  constructor() {
    super().loadImage(this.Images_Walkin_Pepe[0]);
    this.loadImages(this.Images_Walkin_Pepe);
    this.loadImages(this.Images_Dead);
    this.loadImages(this.Images_Jamping);
    this.loadImages(this.Images_Hurt);
    this.loadImages(this.Images_Idle);

    this.applayGravitty();
    this.animate();
  }

  animate() {
    setInterval(() => {
      // console.log('Aktuelle Position character y:', this.y);
      // console.log('Aktuelle Position character x:', this.x);
      // console.log('Ende des Levels level_end_x:', this.world.level.level_end_x);
      this.walking_sound.pause();
      if (this.world.keyboard.D && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        this.walking_sound.play();
        // console.log('this.keybord')
      }

      if (this.world.keyboard.A && this.x > 0) {
        this.moveLeft();
        this.walking_sound.play();
        this.otherDirection = true;
      }

      // console.log('this.speedY', this.speedY)

      if (this.world.keyboard.UP && !this.isAboveGround()) {
        this.jump();
        // this.playAnimation(this.Images_Jamping);
      }
      this.world.camera_x = -this.x + 150;
    }, 100 / 60);

    setInterval(() => {
      // if (this.statusbar()) {

      // }
      if (this.isDead()) {
        this.playAnimation(this.Images_Dead);
      } else if (this.isHurt()) {
        this.playAnimation(this.Images_Hurt);
        // debugger
      } else if (this.isAboveGround()) {
        this.playAnimation(this.Images_Jamping);
        // debugger
      } else if (this.world.keyboard.D || this.world.keyboard.A) {
        this.playAnimation(this.Images_Walkin_Pepe);
      } else {
        this.isIdle();
      }
    }, 60);
  }

  jump() {
    this.speedY = 30;
  }

  isIdle() {
    setTimeout(() => {
      this.playAnimation(this.Images_Idle);
      this.longIdle = true;
      // console.log(this.longIdle);
    }, 1000);
    // setInterval(() => {
    // this.playAnimation(this.Images_Idle);
    // this.longIdle = true;
    // console.log(this.longIdle)
    // }, 1000);
  }
}

// console.log('Aktuelle Position x:', this.x);
// console.log('Ende des Levels level_end_x:', this.world.level.level_end_x);

// if (this.world.keyboard.D && this.x < this.world.level.level_end_x) {
//     // Bewegungscode hier
// } else {
//     console.log('Bewegung gestoppt. x ist größer oder gleich level_end_x.');
// }
