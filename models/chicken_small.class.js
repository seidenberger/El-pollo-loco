class ChickenSmall extends MovableObject {
  y = 360;

  height = 60;
  width = 50;

  Images_chicken_small = [
    "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  Images_chicken_dead = ["img/3_enemies_chicken/chicken_small/2_dead/dead.png"];

  offset = {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5,
  };
  // neu
  isDead = false;

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.Images_chicken_small);
    this.loadImages(this.Images_chicken_dead);
    this.x = 300 + Math.random() * 700;
    // this.x = 100
    this.speed = 0.07 + Math.random() * 0.5;
    this.deadChicken = false;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    // chicken_sound.play();

    setInterval(() => {
      if (this.deadChicken) {
        this.playAnimation(this.Images_chicken_small_dead);
      } else {
        this.playAnimation(this.Images_chicken_small);
      }
    }, 250);
  }

  // chickenSmallDead() {
  //   this.playAnimation(this.Images_chicken_small_dead);
  // }
  chickenSmallDead() {
    this.isDead = true; // Setze den Status auf tot
    clearInterval(this.moveInterval); // Stoppe die Bewegungsanimation
    clearInterval(this.animationInterval); // Stoppe die normale Animation
    this.playAnimation(this.Images_chicken_small_dead); // Spiele Todesanimation
  }
}

// class ChickenSmall extends MovableObject {
//   constructor() {
//       super();
//       this.dead = false; // Standardmäßig lebt das Huhn
//       this.animate();
//   }

//   isDead() {
//       return this.dead;
//   }

//   die() {
//       this.deadChicken = true;
//       setTimeout(() => {
//           this.remove(); // Entferne das Huhn nach einer bestimmten Zeit oder setze es in einen inaktiven Zustand
//       }, 1000); // Das Huhn bleibt für 1 Sekunde sichtbar bevor es entfernt wird
//   }

//   animate() {
//       this.moveInterval = setInterval(() => {
//           this.moveLeft();
//       }, 1000 / 60);

//       this.animationInterval = setInterval(() => {
//           if (this.isDead()) {
//               this.playAnimation(this.Images_chicken_small_dead);
//           } else {
//               this.playAnimation(this.Images_chicken_small);
//           }
//       }, 250);
//   }

//   hit() {
//       if (!this.isDead()) {
//           this.die(); // Töte das Huhn nur, wenn es noch nicht tot ist
//       }
//   }
// }
