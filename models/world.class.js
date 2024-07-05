class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    statusbarHealth = new StatusbarHealth();
    statusbarBottle = new StatusbarBottle();
    statusbarCoin = new StatusbarCoin();
    // extendedArray = [];

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        // 
        this.checkCollisionWithObject();
        this.checkCollisionWithbottle();


    }

    /**
     * zum verknüpfen unteranderem mit dem keybord
     */
    setWorld() {
        this.character.world = this;
        this.statusbarHealth.world = this;
        this.statusbarBottle.world = this;
        this.statusbarCoin.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy) ) {
                    // console.log('Collision with Caracter', enemy)
                    this.character.hit();
                    this.statusbarHealth.setPercentage(this.character.energy);                
                }

            });
        }, 1200);
    }

    checkCollisionWithObject() {
        setInterval(() => {
            this.level.coin.forEach((coin, index) => {
                // debugger
                if (this.character.isColliding(coin)) {
                    console.log('Collision with Coin', this.level.coin)
                    // 
                    // console.log('Collision with Coin', index)
                    // splice()
                    this.level.coin.splice(index, 1);

                }
            });
        }, 200);
    }

    checkCollisionWithbottle() {
        setInterval(() => {
            this.level.bottle.forEach((bottle, index) => {
                // debugger
                if (this.character.isColliding(bottle)) {
                    console.log('Collision with bottle', this.level.bottle)
                    
                    console.log('Collision with bottle', index)
                    // splice()
                    this.level.bottle.splice(index, 1);

                }
            });
        }, 200);
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
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusbarHealth);
        this.addToMap(this.statusbarBottle);
        this.addToMap(this.statusbarCoin);
        // // drew() wird immer wieder aufgerufen
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
        if(mo.otherDirection) {
            this.flipImage(mo);

        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        mo.drawFrameOffset(this.ctx)



        if(mo.otherDirection) {
            this.flipImageBack(mo)

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