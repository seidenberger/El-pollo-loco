class Level {
  enemies;
  clouds;
  backgroundObject;
  bottle;
  coin;
  level_end_x = 3700;
  constructor(enemies, clouds, backgroundObject, bottle, coin) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObject = backgroundObject;
    this.bottle = bottle;
    this.coin = coin;
  }
}
