class Level {
    enemies;
    clouds;
    backgroundObject;
    bottle;

    level_end_x = 2300;


    constructor(enemies, clouds, backgroundObject, bottle) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObject = backgroundObject;
    this.bottle = bottle;
    }
}