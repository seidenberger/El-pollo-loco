class World {
  character = new Character();
  throwing_bottles = new throwingBottles();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = -100;
  deadChicken = false;
  statusbarHealth = new StatusbarHealth();
  statusbarBottle = new StatusbarBottle();
  statusbarCoin = new StatusbarCoin();
  statusbarEndboss = new StatusbarEndboss();
  throwabeleObjects = [];
  lastDeadChicken = 0;

  constructor(canvas, keyboard) {
    this.enemiesToRemove = [];
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions();
    this.checkSlowCollisions();
    this.checkCollisionWithObject();
    this.checkCollisionWithbottle();
    this.checkCollisionWithThrwObject();
  }

  setWorld() {
    this.character.world = this;
    this.statusbarHealth.world = this;
    this.statusbarBottle.world = this;
    this.statusbarCoin.world = this;
    this.statusbarBottle.world = this;
  }

  alertEndboss() {
    if (this.character.x === 3200) {
    }
  }

  updatStatusEndboss() {
    let endboss = this.level.enemies.find((enemy) => enemy instanceof Endboss);
    if (this.statusbarEndboss && endboss) {
      let x = endboss.x;
      this.statusbarEndboss.updatePosition(x);
    }
  }

  checkCollisions() {
    setInterval(() => {
      this.checkCollisionsEnemy();
      this.checkCollisionWithObject();
      this.checkCollisionWithbottle();
      this.checkCollisionWithThrwObject();
      this.checkSpliceChicken();
      this.updatStatusEndboss();
      this.alertEndboss();
    }, 1000 / 60);
  }

  checkSlowCollisions() {
    setInterval(() => {
      this.checkThrowObjects();
    }, 1000 / 10);
  }

  checkCollisionsEnemy() {
    this.level.enemies.forEach((enemy, index) => {
      if (this.character.isColliding(enemy)) {
        if (this.character.speedY < 0 && this.character.isAboveGround()) {
          if (enemy instanceof Chicken || enemy instanceof ChickenSmall) {
            if (!this.deadChicken) {
              enemy.deadChicken = true;
              enemy.speed = 0;
              enemy.playAnimation(enemy.Images_chicken_dead);
              this.lastDeadChicken = new Date().getTime();
            } else {
              this.enemiesToRemove.push(index);
            }
          }
        } else {
          if (
            enemy instanceof Chicken ||
            enemy instanceof ChickenSmall ||
            enemy instanceof Endboss
          ) {
            if (!enemy.deadChicken) {
              this.character.hit();
              this.statusbarHealth.setPercentage(this.character.energy);
            }
          }
        }
      }
    });
    this.removeEnemies();
  }

  checkCollisionWithObject() {
    this.level.coin.forEach((coin, index) => {
      if (this.character.isColliding(coin)) {
        this.character.coin += 10;
        this.statusbarCoin.setPercentageCoin(this.character.coin);
        this.level.coin.splice(index, 1);
      }
    });
  }

  checkCollisionWithbottle() {
    this.level.bottle.forEach((bottle, index) => {
      if (this.character.bottle < 100 && this.character.isColliding(bottle)) {
        this.character.bottle += 20;
        if (this.character.bottle > 100) {
          this.character.bottle = 100;
        }
        this.statusbarBottle.setPercentagebottle(this.character.bottle);
        this.level.bottle.splice(index, 1);
      }
    });
  }

  checkThrowObjects() {
    if (this.keyboard.SPACE) {
      if (this.character.bottle > 0) {
        this.character.bottle -= 20;
        if (this.character.bottle < 0) {
          this.character.bottle = 0;
        }
        this.statusbarBottle.setPercentagebottle(this.character.bottle);
        let bottle = new throwingBottles(
          this.character.x + 50,
          this.character.y + 50,
          this.character.otherDirection
        );

        this.throwabeleObjects.push(bottle);
      }
    }
  }

  checkCollisionWithThrwObject() {
    let endboss = this.level.enemies.find((enemy) => enemy instanceof Endboss);
    this.throwabeleObjects.forEach((bottle, bottleIndex) => {
      this.level.enemies.forEach((enemy, index) => {
        if (bottle.isColliding(enemy)) {
          if (
            (enemy instanceof Chicken || enemy instanceof ChickenSmall) &&
            !enemy.enemyIsDead
          ) {
            enemy.enemyIsDeadsDead = true;
            this.enemiesToRemove.push(index);
            this.handleBottleCollision(bottle, bottleIndex);
          } else if (enemy instanceof Endboss) {
            endboss.hit();
            this.handleBottleCollision(bottle, bottleIndex);
            this.statusbarEndboss.setPercentage(endboss.energy);
          }
        }
      });
      if (!bottle.isAboveGround()) {
        this.handleBottleCollision(bottle, bottleIndex);
      }
    });
    this.removeEnemies();
  }

  handleBottleCollision(bottle, bottleIndex) {
    bottle.isBroken = true;
    bottle.playAnimation(bottle.Images_salsa_bottle_splash);
    setTimeout(() => {
      this.throwabeleObjects.splice(bottleIndex, 1);
    }, 100);
  }

  checkSpliceChicken() {
    this.level.enemies.forEach((enemy, index) => {
      if (enemy.deadChicken) {
        let timePassed = new Date().getTime() - this.lastDeadChicken;
        timePassed = timePassed / 1000;

        if (timePassed >= 2) {
          this.enemiesToRemove.push(index);
        }
      }
    });

    this.removeEnemies();
  }

  removeEnemies() {
    this.enemiesToRemove
      .sort((a, b) => b - a)
      .forEach((index) => {
        this.chickenDead(index);
      });
    this.enemiesToRemove = [];
  }

  removeEnemyFromLevel(enemy) {
    const index = this.level.enemies.indexOf(enemy);
    if (index > -1) {
      this.level.enemies.splice(index, 1);
    }
  }

  chickenDead(index) {
    this.level.enemies.splice(index, 1);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObject);
    this.addObjectsToMap(this.level.clouds);
    this.addToMap(this.character);
    this.addToMap(this.statusbarEndboss);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.bottle);
    this.addObjectsToMap(this.level.coin);
    this.addObjectsToMap(this.throwabeleObjects);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusbarHealth);
    this.addToMap(this.statusbarBottle);
    this.addToMap(this.statusbarCoin);
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
