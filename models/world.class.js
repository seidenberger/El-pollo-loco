class World {
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObject = [
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0)
    ];
    canvas;
    ctx;
    keyboard;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    /**
     * zum verknüpfen unteranderem mit dem keybord
     */
    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObject);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);

        this.addObjectsToMap(this.enemies);

        // this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        // this.enemies.forEach(enemy => {
        //     this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        // });
        // this.cloud.forEach(cloud => {
        //     this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
        // });
        // this.background_object.forEach(BackgroundObject => {
        //     this.ctx.drawImage(BackgroundObject.img, BackgroundObject.x, BackgroundObject.y, BackgroundObject.width, BackgroundObject.height);
        // });

        // draw() wird immer wieder aufgerufen 
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
    }
}