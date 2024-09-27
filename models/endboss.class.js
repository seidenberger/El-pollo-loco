class Endboss extends MovableObject {
  height = 300;
  width = 200;
  y = 140;
  deadAnimationStarted = false;
  alertAnimatioStarted = true;
  alertTime = 0;
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
        angri_chicken_sound.play();
        this.playAnimation(this.Images_endboss_hurt);
      } else if (this.x < world.character.x + 350) {
        this.enbossAttack();
      } else if (this.x < world.character.x + 450) {
        // neu
        if (!this.alertAnimatioStarted) {
          this.alertTime = new Date().getTime();
          this.alertAnimatioStarted = true;
        }
        if (this.isAlert()) {
          angri_chicken_sound.play();
          this.playAnimation(this.Images_endboss_alert);
          this.speed = 0;
        } else {
          this.enbossAttack();
        }
        // angri_chicken_sound.play();
        // this.playAnimation(this.Images_endboss_alert);
        // this.speed = 0;

        // setTimeout(() => {
        //   this.enbossAttack();
        // }, 500);
      } else {
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
      clearAllIntervals();
    }
  }

  enbossAttack() {
    angri_chicken_sound.play();
    this.playAnimation(this.Images_endboss_attack);
    this.moveLeft();
    this.speed = 4;
  }

  isAlert() {
    let timepassed = new Date().getTime() - this.alertTime;
    timepassed = timepassed / 1000;
    return timepassed < 2;
  }
  // isIdle() {
  //   let timepassed = new Date().getTime() - this.currentTimeWalking;
  //   timepassed = timepassed / 1000;

  //   return timepassed < 3;
  // }
}
