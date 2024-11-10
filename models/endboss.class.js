class Endboss extends MovableObject {
  height = 300;
  width = 200;
  y = 140;
  deadAnimationStarted = false;
  alertAnimatioStarted = true;
  alertTime = 0;
  isAngriChickenSound = false;
  offset = {
    top: 50,
    bottom: 20,
    left: 10,
    right: 10,
  };

  Images_endboss_walk = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  Images_endboss_alert = [
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  Images_endboss_attack = [
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  Images_endboss_hurt = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  Images_endboss_dead = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  constructor() {
    super().loadImage(this.Images_endboss_walk[0]);
    this.loadImages(this.Images_endboss_walk);
    this.loadImages(this.Images_endboss_alert);
    this.loadImages(this.Images_endboss_attack);
    this.loadImages(this.Images_endboss_hurt);
    this.loadImages(this.Images_endboss_dead);
    this.speed = 0;
    this.x = 3600;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.isDead()) {
        this.deadAnimation();
      } else if (this.isHurt()) {
        this.angriSoundPlay();
        this.playAnimation(this.Images_endboss_hurt);
        this.isAngriChickenSound = false;
      } else if (this.x < world.character.x + 350) {
        this.enbossAttack();
      } else if (this.x < world.character.x + 450) {
        if (!this.alertAnimatioStarted) {
          this.alertTime = new Date().getTime();
          this.alertAnimatioStarted = true;
        }
        if (this.isAlert()) {
          this.playAnimation(this.Images_endboss_alert);
          this.speed = 0;
        } else {
          this.enbossAttack();
        }
      } else {
        this.angriSoundPause();
        this.playAnimation(this.Images_endboss_walk);
        this.moveLeft();
        this.speed = 2;
      }
    }, 1000 / 10);
  }

  deadAnimation() {
    if (!this.deadAnimationStarted) {
      this.currentImage = 0;
      this.deadAnimationStarted = true;
    }
    if (this.currentImage < this.Images_endboss_dead.length) {
      this.playAnimation(this.Images_endboss_dead);
      this.currentImage++;
    } else {
      youWinGamne();
    }
  }

  angriSoundPause() {
    angriChickenSound.pause();
    this.isAngriChickenSound = false;
  }

  angriSoundPlay() {
    angriChickenSound.play();
    this.isAngriChickenSound = true;
    // console.log("angriSoundPlay()");
  }

  enbossAttack() {
    this.angriSoundPlay();
    this.playAnimation(this.Images_endboss_attack);
    this.moveLeft();
    this.speed = 4;
  }

  isAlert() {
    let timepassed = new Date().getTime() - this.alertTime;
    timepassed = timepassed / 1000;
    return timepassed < 2;
  }
}
