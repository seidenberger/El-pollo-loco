class Level {
  enemies;
  // bigEnemie;
  clouds;
  backgroundObject;
  bottle;
  coin;
  // statusbarEndboss;

  level_end_x = 3700;

  constructor(enemies, bigEnemie, clouds, backgroundObject, bottle, coin) {
    this.enemies = enemies;
    this.bigEnemie = bigEnemie;
    this.clouds = clouds;
    this.backgroundObject = backgroundObject;
    this.bottle = bottle;
    this.coin = coin;
    // this.statusbarEndboss =  statusbarEndboss;
  }
}
