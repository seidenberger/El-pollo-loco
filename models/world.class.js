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

  /**
   * Initializes the game world and its core components.
   *
   * The constructor sets up the essential properties and methods required for the game, including:
   * - Preparing the canvas and its drawing context.
   * - Setting up keyboard controls.
   * - Initializing collision detection mechanisms.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element where the game will be rendered.
   * @param {Object} keyboard - An object representing the keyboard controls for the game.
   */
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

  /**
   * Sets the current world reference for various game components.
   *
   * This method assigns the current game world (`this`) as the reference for key objects
   * like the character and various status bars. This enables these components to interact
   * with the game world and its properties.
   */
  setWorld() {
    this.character.world = this;
    this.statusbarHealth.world = this;
    this.statusbarBottle.world = this;
    this.statusbarCoin.world = this;
    this.statusbarBottle.world = this;
  }

  /**
   * Triggers the alert state for the end boss based on the character's position.
   *
   * This method checks if the character's horizontal position (`x`) has reached a specific value (3200),
   * which may signal the end boss to enter an alert or active state. The exact behavior can be defined
   * within the method's body.
   */
  alertEndboss() {
    if (this.character.x === 3200) {
    }
  }

  /**
   * Updates the position of the end boss status bar.
   *
   * This method locates the end boss within the game's enemies and adjusts the horizontal position
   * of the status bar to align with the end boss's current position on the screen.
   */
  updatStatusEndboss() {
    let endboss = this.level.enemies.find((enemy) => enemy instanceof Endboss);
    if (this.statusbarEndboss && endboss) {
      let x = endboss.x;
      this.statusbarEndboss.horizontalPosition(x);
    }
  }

  /**
   * Continuously checks for various collisions and game state updates.
   *
   * This method runs at a consistent frame rate (60 FPS) and performs the following checks:
   * - Collisions with enemies.
   * - Collisions with objects like items or obstacles.
   * - Collisions with bottles and thrown objects.
   * - Removal of defeated enemies (e.g., chickens).
   * - Updates the status bar for the end boss.
   * - Triggers the end boss alert state if conditions are met.
   */
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

  /**
   * Periodically checks for collisions at a slower rate.
   *
   * This method is designed to handle less frequent collision checks, specifically for thrown objects.
   * It runs at 10 frames per second (FPS) to optimize performance while ensuring accurate collision detection.
   */
  checkSlowCollisions() {
    setInterval(() => {
      this.checkThrowObjects();
    }, 1000 / 10);
  }

  /**
   * Checks for collisions between the character and enemies.
   *
   * This method iterates through the list of enemies in the current level and verifies if
   * the character collides with any of them. If a collision is detected, the appropriate
   * collision handling logic is executed. After processing collisions, defeated enemies
   * are removed from the game.
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
   * Handles the collision between the character and an enemy.
   *
   * Based on the character's current state and position, this method determines
   * the appropriate action when a collision occurs:
   * - If the character is jumping and above the ground, the enemy is marked as defeated.
   * - Otherwise, the character takes damage from the enemy.
   *
   * @param {Object} enemy - The enemy involved in the collision.
   * @param {number} index - The index of the enemy in the `enemies` array.
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
   *
   * This method evaluates two conditions:
   * - The character's vertical speed (`speedY`) is negative, indicating upward movement (jumping).
   * - The character's vertical position is above the ground, determined by `isAboveGround()`.
   *
   * @returns {boolean} - Returns `true` if the character is jumping and above ground, otherwise `false`.
   */
  isCharacterJumpingAndAboveGround() {
    return this.character.speedY < 0 && this.character.isAboveGround();
  }

  /**
   * Handles the logic when a chicken enemy is defeated.
   *
   * This method is invoked when the character collides with a chicken enemy
   * (either `Chicken` or `ChickenSmall`) and the conditions for defeating it are met.
   * It either marks the chicken as dead or queues it for removal.
   *
   * @param {Object} enemy - The enemy involved in the collision, expected to be a chicken type.
   * @param {number} index - The index of the enemy in the `enemies` array.
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
   * Kills the specified chicken enemy and handles related actions.
   *
   * This method is called when a chicken enemy (either `Chicken` or `ChickenSmall`) is defeated.
   * It marks the chicken as dead, stops its movement, plays its death animation, and records the time of death.
   *
   * @param {Object} enemy - The enemy that is being killed, expected to be a chicken type (e.g., `Chicken` or `ChickenSmall`).
   */
  killChicken(enemy) {
    enemy.deadChicken = true;
    this.enemySpeedZero(enemy);
    enemy.playAnimation(enemy.Images_chicken_dead);
    this.lastDeadChicken = new Date().getTime();
  }

  /**
   * Handles the logic when the character is hit by an enemy.
   *
   * This method checks if the enemy is dangerous (i.e., capable of hurting the character).
   * If the enemy is dangerous and not dead, the character's health is reduced, and the health status bar is updated.
   *
   * @param {Object} enemy - The enemy involved in the collision, which may affect the character's health.
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
   * Checks if the given enemy is considered dangerous to the character.
   *
   * An enemy is considered dangerous if it is an instance of `Chicken`, `ChickenSmall`, or `Endboss`.
   * This method helps determine whether the enemy can inflict damage to the character.
   *
   * @param {Object} enemy - The enemy to check if it is dangerous.
   * @returns {boolean} Returns `true` if the enemy is considered dangerous, `false` otherwise.
   */
  isEnemyDangerous(enemy) {
    return (
      enemy instanceof Chicken ||
      enemy instanceof ChickenSmall ||
      enemy instanceof Endboss
    );
  }

  /**
   * Handles the logic when the character is hit by a dangerous enemy.
   *
   * This method checks if the enemy is considered dangerous (i.e., if it is an instance of `Chicken`,
   * `ChickenSmall`, or `Endboss`). If the enemy is dangerous and not dead, the character's health is reduced,
   * and the health status bar is updated.
   *
   * @param {Object} enemy - The enemy involved in the collision with the character, which may cause harm.
   */
  handleCharacterHit(enemy) {
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

  /**
   * Checks if the character collides with any coin object and handles the collision.
   *
   * This method iterates through all the coin objects in the level. If the character collides with a coin,
   * the coin is collected, the coin count is incremented, and the status bar displaying the number of coins is updated.
   * After the coin is collected, it is removed from the level.
   *
   * @returns {void}
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
   * Checks if the character collides with any bottle object and handles the collision.
   *
   * This method iterates through all the bottle objects in the level. If the character collides with a bottle
   * and has less than 100 bottles, it collects the bottle. The bottle count is incremented, and the bottle
   * status bar is updated. If the bottle count exceeds 100, the `maxBottles()` method is called to ensure
   * the bottle count does not exceed the maximum. After the bottle is collected, it is removed from the level.
   *
   * @returns {void}
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
   * Checks if the player presses the SPACE key to throw a bottle.
   *
   * When the player presses the SPACE key and has at least 20 bottles, the character throws a bottle.
   * The number of bottles is decreased by 20, ensuring it doesn't go below 0. The bottle count is updated
   * in the status bar. A new `throwingBottles` object is created and added to the `throwableObjects` array
   * to keep track of all thrown bottles.
   *
   * @returns {void}
   */
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

  /**
   * Checks for collisions between thrown objects (bottles) and enemies.
   *
   * For each bottle in the `throwableObjects` array, this method checks if it collides
   * with any enemy in the `level.enemies` array. If a collision is detected, the `enemyIsDead`
   * method is called to handle the enemy's death. Additionally, if the bottle is no longer above ground,
   * the `handleBottleCollision` method is called to process the bottle collision (such as breaking the bottle).
   *
   * After checking all collisions, the method ensures that the list of enemies is updated by removing dead enemies.
   *
   * @returns {void}
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
   * Handles the collision of a thrown bottle.
   *
   * When a bottle collides with an object (such as an enemy or the ground), this method is called
   * to handle the bottle's "breakage" and animation. It sets the `isBroken` property of the bottle to `true`,
   * plays the bottle's splash animation, and then removes the bottle from the `throwableObjects` array after a short delay.
   *
   * @param {throwingBottles} bottle - The bottle object that collided.
   * @param {number} bottleIndex - The index of the bottle in the `throwableObjects` array.
   *
   * @returns {void}
   */
  handleBottleCollision(bottle, bottleIndex) {
    bottle.isBroken = true;
    bottle.playAnimation(bottle.Images_salsa_bottle_splash);
    setTimeout(() => {
      this.throwabeleObjects.splice(bottleIndex, 1);
    }, 100);
  }

  /**
   * Checks for dead chickens in the game and removes them after a certain period.
   *
   * This method iterates over all enemies in the level and checks if any chicken is marked as dead.
   * If a chicken is dead, it calculates how much time has passed since the chicken's death.
   * If the time exceeds 2 seconds, the chicken is added to the `enemiesToRemove` list, marking it for removal.
   * The method then calls `removeEnemies()` to actually remove the dead chickens from the game.
   *
   * @returns {void}
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
   * Removes enemies from the level that have been marked for removal.
   *
   * This method processes the enemies that are flagged for removal in the `enemiesToRemove` array.
   * It sorts the array in descending order to ensure that the highest indices are removed first.
   * Then, for each enemy marked for removal, it calls the `chickenDead()` method to handle the removal.
   * After processing all the marked enemies, the `enemiesToRemove` array is cleared.
   *
   * @returns {void}
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
   * Removes a specific enemy from the level's enemy list.
   *
   * This method searches for the provided enemy in the `level.enemies` array.
   * If the enemy is found, it removes the enemy from the array using the `splice()` method.
   *
   * @param {Object} enemy - The enemy object to be removed from the level.
   * @returns {void}
   */
  removeEnemyFromLevel(enemy) {
    const index = this.level.enemies.indexOf(enemy);
    if (index > -1) {
      this.level.enemies.splice(index, 1);
    }
  }

  /**
   * Removes a dead chicken from the level's enemies list.
   *
   * This method removes the chicken enemy at the specified index from the `level.enemies` array.
   * It is typically called when a chicken is dead and should be removed from the game world.
   *
   * @param {number} index - The index of the chicken to be removed from the `level.enemies` array.
   * @returns {void}
   */
  chickenDead(index) {
    this.level.enemies.splice(index, 1);
  }

  /**
   * Clears the canvas and redraws all objects in the game world.
   *
   * This method handles the drawing of the entire game world. It clears the canvas, applies the camera translation,
   * and then redraws various game objects including the background, clouds, the main character, enemies, bottles, coins,
   * and status bars. The drawing is done on the 2D context of the canvas.
   *
   * After the objects are drawn, it requests the next animation frame to continuously update the game display.
   *
   * @returns {void}
   */
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

  /**
   * Adds multiple objects to the map by calling `addToMap` for each object.
   *
   * This method iterates over an array of objects and adds each object to the map using the `addToMap` method.
   * It is used to simplify the process of adding multiple objects to the canvas or game world.
   *
   * @param {Array} objects - An array of objects that need to be added to the map.
   * Each object in the array is expected to have the necessary properties and methods required for rendering.
   *
   * @returns {void}
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * Adds an object to the map by drawing it on the canvas.
   *
   * This method checks if the object needs to be flipped (for example, if it's facing the opposite direction),
   * and then draws the object on the canvas using its `draw` and `drawFrameOffset` methods.
   * If the object is flipped, the image is flipped back to its original orientation after drawing.
   *
   * @param {Object} mo - The object to be added to the map. The object must have the following properties and methods:
   *   - `otherDirection` (boolean): Indicates if the object should be flipped.
   *   - `draw(ctx)` (function): Method to draw the object on the canvas.
   *   - `drawFrameOffset(ctx)` (function): Method to adjust the object's frame offset for drawing.
   *   - `flipImage(mo)` (function): Method to flip the object image horizontally (if applicable).
   *   - `flipImageBack(mo)` (function): Method to flip the object image back to the original orientation.
   *
   * @returns {void}
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
   * Flips the image of an object horizontally.
   *
   * This method saves the current canvas context state, then flips the object's image horizontally
   * by translating and scaling the canvas context. The object's `x` position is also adjusted to account
   * for the flip.
   *
   * @param {Object} mo - The object whose image is to be flipped. The object must have the following properties:
   *   - `x` (number): The x-coordinate of the object.
   *   - `width` (number): The width of the object.
   *
   * @returns {void}
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * Restores the flipped image of an object to its original orientation.
   *
   * This method undoes the horizontal flip applied by the `flipImage` method. It adjusts the object's
   * `x` position to restore it to the original orientation and then restores the canvas context state
   * to its previous configuration before the flip was applied.
   *
   * @param {Object} mo - The object whose image orientation is to be restored. The object must have the following properties:
   *   - `x` (number): The x-coordinate of the object.
   *
   * @returns {void}
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  /**
   * Handles the death of a chicken (or small chicken) enemy.
   *
   * This method is invoked when a chicken (or small chicken) enemy is considered dead. It checks if the
   * chicken has already been marked as dead and either kills the chicken or adds it to the list of enemies
   * to be removed later.
   *
   * @param {Object} enemy - The enemy object that is being checked for death. It should be an instance
   *                          of either `Chicken` or `ChickenSmall`.
   * @param {number} index - The index of the enemy in the level's list of enemies. Used for removing
   *                          the enemy from the level once it is dead.
   *
   * @returns {void}
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
   * Handles the interaction when a throwing bottle collides with an enemy.
   *
   * This method processes the collision of a throwing bottle with an enemy. If the enemy is a
   * `Chicken` or `ChickenSmall`, it marks the enemy as dead and adds it to the list of enemies to be
   * removed. If the enemy is the `Endboss`, it reduces the boss's health and updates the status bar.
   * After handling the collision, it processes the bottle's own collision effects.
   *
   * @param {Object} enemy - The enemy object that was hit by the throwing bottle. It can be an instance
   *                          of `Chicken`, `ChickenSmall`, or `Endboss`.
   * @param {number} index - The index of the enemy in the level's list of enemies. This is used for
   *                          removing the enemy from the level when it is dead.
   * @param {Object} bottle - The throwing bottle object that collided with the enemy. This object
   *                           is used for handling the collision and updating the bottle's state.
   * @param {number} bottleIndex - The index of the throwing bottle in the list of throwables. This is
   *                                used for removing the bottle from the list once it has collided.
   *
   * @returns {void}
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
   * Sets the speed of the enemy to zero.
   *
   * This method halts the movement of an enemy by setting its `speed` property to zero. It is typically
   * used when the enemy is either dead or should no longer move.
   *
   * @param {Object} enemy - The enemy object whose speed will be set to zero. This object should have a
   *                         `speed` property that will be modified.
   *
   * @returns {void}
   */
  enemySpeedZero(enemy) {
    enemy.speed = 0;
  }

  /**
   * Increases the character's coin count by 10.
   *
   * This method adds 10 coins to the character's coin count. It is typically called when the character
   * collides with a coin object in the game.
   *
   * @returns {void}
   */
  countHighCoin() {
    this.character.coin += 10;
  }

  /**
   * Increases the character's bottle count by 20.
   *
   * This method adds 20 bottles to the character's bottle count. It is typically called when the character
   * collides with a bottle object in the game.
   *
   * @returns {void}
   */
  countUpBottles() {
    this.character.bottle += 20;
  }

  /**
   * Sets the character's bottle count to the maximum of 100.
   *
   * This method ensures that the character's bottle count does not exceed the maximum limit of 100.
   * It is typically called when the character collects a bottle but already has the maximum amount.
   *
   * @returns {void}
   */
  maxBottles() {
    this.character.bottle = 100;
  }
}
