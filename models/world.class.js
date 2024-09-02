class World {
  character = new Character();
  throwing_bottles = new throwingBottles();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = -100;
  statusbarHealth = new StatusbarHealth();
  statusbarBottle = new StatusbarBottle();
  statusbarCoin = new StatusbarCoin();
  statusbarEndboss = new StatusbarEndboss();
  throwabeleObjects = [];
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    // let bottleThrown = false;

    this.draw();
    this.setWorld();
    this.checkCollisions();
    this.checkSlowCollisions();
    this.checkCollisionWithObject();
    this.checkCollisionWithbottle();
    //check
    this.checkCollisionWithThrwObject();
    this.playDeathAnimation();
  }

  setWorld() {
    this.character.world = this;
    this.statusbarHealth.world = this;
    this.statusbarBottle.world = this;
    this.statusbarCoin.world = this;
    this.statusbarBottle.world = this;
  }

  // zu schnell oder zu langsam
  checkCollisions() {
    setInterval(() => {
      this.checkCollisionsEnemy();
      this.checkCollisionWithObject();
      this.checkCollisionWithbottle();
      // check
      this.checkCollisionWithThrwObject();
    }, 1000 / 60);
  }

  checkSlowCollisions() {
    setInterval(() => {
      this.checkThrowObjects();
    }, 1000);
  }

  checkCollisionsEnemy() {
    const enemiesToRemove = [];
    this.level.enemies.forEach((enemy, index) => {
      if (this.character.isColliding(enemy)) {
        if (this.character.speedY < 0 && this.character.isAboveGround()) {
          debugger;
          // doppelt
          if (enemy instanceof Chicken) {
          } else if (enemy instanceof ChickenSmall) {
            this.playDeathAnimation(enemy);
            enemiesToRemove.push(index);
          }
        } else {
          this.character.hit();
          this.statusbarHealth.setPercentage(this.character.energy);
        }
      }
    });
    this.removeEnemies(enemiesToRemove);
  }

  checkCollisionWithObject() {
    // setInterval(() => {
    this.level.coin.forEach((coin, index) => {
      if (this.character.isColliding(coin)) {
        this.character.coin += 10;
        this.statusbarCoin.setPercentageCoin(this.character.coin);
        this.level.coin.splice(index, 1);
      }
    });
    // }, 100);
  }

  checkCollisionWithbottle() {
    // setInterval(() => {
    this.level.bottle.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        this.character.bottle += 20;
        this.statusbarBottle.setPercentagebottle(this.character.bottle);
        this.level.bottle.splice(index, 1);
      }
    });
    // }, 100);
  }

  checkThrowObjects() {
    if (this.keyboard.SPACE || this.keyboard.ENTER) {
      let bottle = new throwingBottles(
        this.character.x + 50,
        this.character.y + 50
      );

      this.throwabeleObjects.push(bottle);
      // debugger;
    }
  }

  checkCollisionWithThrwObject() {
    this.throwabeleObjects.forEach((bottle) => {
      this.level.enemies.forEach((enemy, index) => {
        if (bottle.isColliding(enemy)) {
          console.log(
            `Kollision! Bottle bei X: ${bottle.x}, Y: ${bottle.y} trifft Enemy bei X: ${enemy.x}, Y: ${enemy.y}, Index: ${index}`
          );
          this.enemy.energy -= 20;
          console.log("enemy energy", this.enemy.energy);
          //   if (enemy instanceof Endboss) {
          //     this.playDeathAnimation(enemy);
          //     this.removeEnemy(index);
          // } else if (enemy instanceof Chicken || enemy instanceof ChickenSmall) {
          //     this.playDeathAnimation(enemy);
          //     this.removeEnemy(index);
          // }

          // Optional: Entferne die Flasche nach der Kollision
          // this.removeBottle(bottle);
        }
      });
    });
  }

  removeEnemies(enemiesToRemove) {
    enemiesToRemove
      .sort((a, b) => b - a)
      .forEach((index) => {
        this.chickenDead(index);
      });
  }

  playDeathAnimation(enemy) {
    const deathImage =
      enemy instanceof ChickenSmall
        ? enemy.Images_chicken_small_dead[0]
        : enemy.Images_chicken_normal_dead[0];
    enemy.img = deathImage[deathImage];
    // debugger;

    enemy.speed = 0;
    enemy.speedY = 0;

    setTimeout(() => {
      this.removeEnemyFromLevel(enemy);
    }, 1000);
  }

  removeEnemyFromLevel(enemy) {
    const index = this.level.enemies.indexOf(enemy);
    if (index > -1) {
      this.enemies.splice(index, 1);
    }
  }

  chickenDead(index) {
    console.log("Chicken is dead:", this.level.enemies[index]);
    this.level.enemies.splice(index, 1);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObject);
    this.addObjectsToMap(this.level.clouds);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.bottle);
    this.addObjectsToMap(this.level.coin);
    this.addObjectsToMap(this.throwabeleObjects);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusbarHealth);
    this.addToMap(this.statusbarBottle);
    this.addToMap(this.statusbarCoin);
    this.addToMap(this.statusbarEndboss);
    // this.addToMap(this.throwingBottles);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrameOffset(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
