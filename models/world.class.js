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
  lastThrow = 0;
  timePassed = 1;

  /**
   * Creates an instance of the Game.
   * Initializes the game with canvas, keyboard, and sets up various checks and world settings.
   * @param {HTMLCanvasElement} canvas - The canvas element where the game is rendered.
   * @param {Object} keyboard - The keyboard input handler for user controls.
   */
  constructor(canvas, keyboard) {
    this.enemiesToRemove = [];
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.running = true;
    this.draw();
    this.setWorld();
    this.checkCollisions();
    this.checkSlowCollisions();
    this.checkCollisionWithObject();
    this.checkCollisionWithbottle();
    this.checkCollisionWithThrwObject();
  }

  /**
   * Sets the world context for various game objects.
   * This method assigns the world (game instance) to character and statusbars.
   */
  setWorld() {
    this.character.world = this;
    this.statusbarHealth.world = this;
    this.statusbarBottle.world = this;
    this.statusbarCoin.world = this;
    this.statusbarBottle.world = this;
  }

  /**
   * Checks if the character has reached the endboss location.
   * Triggers an action when the character's x position is 3200.
   */
  alertEndboss() {
    if (this.character.x === 3200) {
    }
  }

  /**
   * Updates the status bar position for the endboss.
   * Finds the endboss in the current level and updates the status bar's horizontal position based on the endboss's x position.
   */
  updatStatusEndboss() {
    let endboss = this.level.enemies.find((enemy) => enemy instanceof Endboss);
    if (this.statusbarEndboss && endboss) {
      let x = endboss.x;
      this.statusbarEndboss.horizontalPosition(x);
    }
  }

  /**
   * Continuously checks for collisions and game events.
   * This method calls various collision checks, status updates, and alerts every frame (60 times per second).
   */
  checkCollisions() {
    setInterval(() => {
      this.checkCollisionsEnemy();
      this.checkCollisionWithObject();
      this.checkCollisionWithbottle();
      this.checkSpliceChicken();
      this.updatStatusEndboss();
      this.alertEndboss();
      this.checkGameStatus();
    }, 1000 / 60);
  }

  /**
   * Checks the game status based on the endboss and character's state.
   * If the endboss is defeated or the character is dead, triggers the appropriate game events.
   */
  checkGameStatus() {
    let endBoss = this.level.enemies.find((enemy) => enemy instanceof Endboss);
    if (endBoss.deadAnimationEndEndboss) {
      youWinGame();
    } else if (this.character.deadAnimationEndCharacter) {
      gameOver();
    }
  }

  /**
   * Continuously checks for slower collision events.
   * This method calls collision checks for thrown objects at a slower interval (10 times per second).
   */
  checkSlowCollisions() {
    setInterval(() => {
      this.checkCollisionsEnemy();
      this.checkThrowObjects();
      this.checkCollisionWithThrwObject();
    }, 1000 / 10);
  }

  /**
   * Checks for collisions between the character and enemies.
   * Iterates through all enemies in the level, checking for collisions with the character.
   * If a collision occurs, the appropriate collision handler is triggered.
   */
  checkCollisionsEnemy() {
    this.level.enemies.forEach((enemy, index) => {
      if (this.character.isColliding(enemy)) {
        this.handleCollision(enemy, index);
      }
    });
    this.removeEnemies();
  }

  /**
   * Checks for collisions between the character and enemies.
   * Iterates through all enemies in the level, checking for collisions with the character.
   * If a collision occurs, the appropriate collision handler is triggered.
   */
  handleCollision(enemy, index) {
    if (this.isCharacterJumpingAndAboveGround()) {
      this.handleDeadChicken(enemy, index);
    } else {
      this.handleCharacterHit(enemy);
    }
  }

  /**
   * Checks if the character is currently jumping and above the ground.
   * The character is considered jumping if its vertical speed is negative and it's above the ground.
   * @returns {boolean} True if the character is jumping and above the ground, false otherwise.
   */
  isCharacterJumpingAndAboveGround() {
    return this.character.speedY < 0 && this.character.isAboveGround();
  }

  /**
   * Handles the logic when a chicken or small chicken is dead.
   * If the chicken is not dead yet, it triggers the killing process. If it is already dead, it schedules the chicken for removal.
   * @param {Object} enemy - The enemy object (should be an instance of Chicken or ChickenSmall).
   * @param {number} index - The index of the enemy in the enemies array.
   */
  handleDeadChicken(enemy, index) {
    if (enemy instanceof Chicken || enemy instanceof ChickenSmall) {
      if (!this.deadChicken) {
        this.killChicken(enemy);
      } else {
        this.enemiesToRemove.push(index);
      }
    }
  }

  /**
   * Kills the given chicken enemy.
   * Sets the enemy's state to dead, stops its movement, plays the death animation, and records the time of death.
   * @param {Object} enemy - The enemy object (should be an instance of Chicken or ChickenSmall).
   */
  killChicken(enemy) {
    enemy.deadChicken = true;
    this.enemySpeedZero(enemy);
    enemy.playAnimation(enemy.Images_chicken_dead);
    this.lastDeadChicken = new Date().getTime();
  }

  /**
   * Handles the logic when the character is hit by an enemy.
   * If the enemy is dangerous and not already dead, the character is hit and the health bar is updated.
   * @param {Object} enemy - The enemy object that may hit the character (should be an instance of a dangerous enemy).
   */
  handleCharacterHit(enemy) {
    if (this.isEnemyDangerous(enemy)) {
      if (!enemy.deadChicken) {
        this.character.hit();
        this.statusbarHealth.setPercentage(this.character.energy);
      }
    }
  }

  /**
   * Handles the character being hit by an enemy and adjusts health accordingly.
   */
  handleCharacterHit(enemy) {
    if (!enemy.deadChicken) {
      if (
        (enemy instanceof Chicken || enemy instanceof ChickenSmall) &&
        !this.isHitCooldown()
      ) {
        if (enemy instanceof ChickenSmall) {
          this.character.hit(2);
        } else if (enemy instanceof Chicken) {
          this.character.hit(3);
        }
        this.lastHit = new Date().getTime();
      } else if (enemy instanceof Endboss) {
        this.character.hit();
      }
      this.statusbarHealth.setPercentage(this.character.energy);
    }
  }

  /**
   * Checks for collisions between the character and coins.
   * If a collision is detected, the coin is collected, the coin count is updated, and the coin is removed from the level.
   */
  checkCollisionWithObject() {
    this.level.coin.forEach((coin, index) => {
      if (this.character.isColliding(coin)) {
        this.countHighCoin();
        this.statusbarCoin.setPercentageCoin(this.character.coin);
        this.level.coin.splice(index, 1);
      }
    });
  }

  /**
   * Checks for collisions between the character and bottles.
   * If the character's bottle count is less than 100 and a collision with a bottle occurs,
   * the bottle count is increased, the bottle count status bar is updated, and the bottle is removed from the level.
   * If the bottle count exceeds 100, it is capped at 100.
   */
  checkCollisionWithbottle() {
    this.level.bottle.forEach((bottle, index) => {
      if (this.character.bottle < 100 && this.character.isColliding(bottle)) {
        this.countUpBottles();
        if (this.character.bottle > 100) {
          this.maxBottles();
        }
        this.statusbarBottle.setPercentagebottle(this.character.bottle);
        this.level.bottle.splice(index, 1);
      }
    });
  }

  /**
   * Handles the throwing of bottles by the character when the spacebar is pressed.
   * If the character has enough bottles and is not on cooldown, a new bottle is created and thrown,
   * reducing the bottle count and updating the status bar.
   */
  checkThrowObjects() {
    if (this.keyboard.SPACE) {
      if (!this.isThrowCooldown()) {
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
          this.throwTime();
          this.throwabeleObjects.push(bottle);
        }
      }
    }
  }

  /**
   * Checks if the hit cooldown period has passed since the last hit.
   */
  isHitCooldown() {
    return this.Cooldown(this.lastHit);
  }

  /**
   * Checks if the throw cooldown period has passed since the last throw.
   */
  isThrowCooldown() {
    return this.Cooldown(this.lastThrow);
  }

  /**
   * Updates the last throw time with the current timestamp.
   */
  throwTime() {
    this.lastThrow = new Date().getTime();
  }

  /**
   * Determines if the cooldown period has passed since the last action time.
   * @param {number} lastActionTime - The timestamp of the last action.
   * @returns {boolean} True if still in cooldown period, false otherwise.
   */
  Cooldown(lastActionTime) {
    let currentTime = new Date().getTime();
    let timePassed = (currentTime - lastActionTime) / 500;
    return timePassed < 0.5;
  }

  /**
   * Checks for collisions between thrown bottles and enemies.
   * Iterates over all throwable objects (bottles) and checks if they collide with any enemies.
   * If a collision occurs, the appropriate handler is called.
   * If the bottle is no longer above the ground, it is processed for removal.
   */
  checkCollisionWithThrwObject() {
    this.throwabeleObjects.forEach((bottle, bottleIndex) => {
      this.level.enemies.forEach((enemy, index) => {
        if (bottle.isColliding(enemy)) {
          this.enemyIsDad(enemy, index, bottle, bottleIndex);
        }
      });
      if (!bottle.isAboveGround()) {
        this.handleBottleCollision(bottle, bottleIndex);
      }
    });
    this.removeEnemies();
  }

  /**
   * Handles the collision of a thrown bottle with the ground or other objects.
   * Marks the bottle as broken, plays the bottle's splash animation, and removes it from the throwable objects list after a short delay.
   * @param {Object} bottle - The thrown bottle object that collided.
   * @param {number} bottleIndex - The index of the bottle in the throwable objects array.
   */
  handleBottleCollision(bottle, bottleIndex) {
    bottle.isBroken = true;
    bottle.playAnimation(bottle.Images_salsa_bottle_splash);
    setTimeout(() => {
      this.throwabeleObjects.splice(bottleIndex, 1);
    }, 100);
  }

  /**
   * Checks if any chickens are dead and removes them from the level after a certain time has passed.
   * If a chicken is marked as dead and 2 seconds have passed since its death, it is scheduled for removal from the enemies array.
   */
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

  /**
   * Removes enemies that are marked for removal from the level.
   * Sorts the enemies to be removed in descending order by their index to avoid modifying the array while iterating.
   * Calls the `chickenDead` method to handle the removal logic for each enemy, then clears the list of enemies to remove.
   */
  removeEnemies() {
    this.enemiesToRemove
      .sort((a, b) => b - a)
      .forEach((index) => {
        this.chickenDead(index);
      });
    this.enemiesToRemove = [];
  }

  /**
   * Removes a specific enemy from the level.
   * Searches for the given enemy in the level's enemies array and removes it if found.
   * @param {Object} enemy - The enemy object to be removed from the level.
   */
  removeEnemyFromLevel(enemy) {
    const index = this.level.enemies.indexOf(enemy);
    if (index > -1) {
      this.level.enemies.splice(index, 1);
    }
  }

  /**
   * Removes a chicken from the level's enemies array.
   * This method is called when a chicken is marked as dead and needs to be removed from the game.
   * @method
   * @param {number} index - The index of the chicken in the level's enemies array to be removed.
   */
  chickenDead(index) {
    this.level.enemies.splice(index, 1);
  }

  /**
   * Clears the canvas and redraws all game elements on each frame.
   * This method handles the drawing of the background, clouds, character, enemies, items (bottles, coins),
   * status bars, and throwable objects while also managing the camera's position.
   * It uses the `requestAnimationFrame` method to repeatedly call itself and update the game screen.
   */
  draw() {
    if (!this.running) return;
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

  /**
   * Adds a list of objects to the map by iterating over each object and calling `addToMap`.
   * This method is used to add multiple game elements (such as background objects, enemies, or items) to the map in one operation.
   * @param {Array} objects - An array of objects to be added to the map.
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * Adds a single object to the map, handling its drawing and potential flipping (if it’s facing the opposite direction).
   * This method calls the object's `draw` and `drawFrameOffset` methods to render it, and if the object faces the opposite direction, it flips the image before and after drawing.
   * @param {Object} mo - The object to be added to the map (e.g., character, enemy, item).
   */
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

  /**
   * Flips an object’s image horizontally by applying a transformation to the canvas context.
   * This method saves the current canvas state, flips the context, and adjusts the object's position accordingly.
   * @param {Object} mo - The object whose image is to be flipped.
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * Reverses the horizontal flip transformation applied to an object by restoring the canvas context and adjusting the object's position.
   * This method undoes the flip applied by `flipImage`, restoring the original orientation of the object.
   * @param {Object} mo - The object whose horizontal flip is to be undone.
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  /**
   * Handles the death of a chicken enemy by either killing it immediately or scheduling it for removal.
   * If the chicken is not already marked as dead, it will be killed by calling `killChicken`.
   * If the chicken is already dead, its index will be added to the `enemiesToRemove` array for later removal.
   * @param {Object} enemy - The enemy object, which is checked if it's a chicken or a small chicken.
   * @param {number} index - The index of the enemy in the enemies array.
   */
  deadChicken(enemy, index) {
    if (enemy instanceof Chicken || enemy instanceof ChickenSmall) {
      if (!this.deadChicken) {
        killChicken(enemy);
      } else {
        this.enemiesToRemove.push(index);
      }
    }
  }

  /**
   * Handles the impact of a thrown bottle on an enemy.
   * If the enemy is a chicken or small chicken and is not already dead, it marks the chicken as dead, removes it from the level, and handles the bottle collision.
   * If the enemy is an Endboss, it causes the Endboss to take damage, updates its health status, and handles the bottle collision.
   * @param {Object} enemy - The enemy object that is hit by the bottle.
   * @param {number} index - The index of the enemy in the level's enemies array.
   * @param {Object} bottle - The thrown bottle object that causes the collision.
   * @param {number} bottleIndex - The index of the thrown bottle in the array of throwable objects.
   */
  enemyIsDad(enemy, index, bottle, bottleIndex) {
    let endboss = this.level.enemies.find((enemy) => enemy instanceof Endboss);
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

  /**
   * Sets the speed of an enemy to zero, effectively stopping its movement.
   * This method is used to halt the movement of an enemy, for example, when it is dead or otherwise inactive.
   * @param {Object} enemy - The enemy whose speed is to be set to zero.
   */
  enemySpeedZero(enemy) {
    enemy.speed = 0;
  }

  /**
   * Increases the character's coin count by 10.
   * This method is used to update the character’s coin total whenever the character collects a coin.
   */
  countHighCoin() {
    this.character.coin += 10;
  }

  /**
   * Increases the character's bottle count by 20.
   * This method is used to update the character’s bottle total whenever the character collects a bottle.
   */
  countUpBottles() {
    this.character.bottle += 20;
  }

  /**
   * Sets the character's bottle count to the maximum value of 100.
   * This method ensures that the character cannot exceed a bottle count of 100.
   */
  maxBottles() {
    this.character.bottle = 100;
  }

  /**
   * Stops the game and clears the canvas.
   * This method halts the game's main loop by setting `running` to `false`
   * and clears the canvas to remove all drawn objects.
   */
  stopPlay() {
    this.running = false;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
