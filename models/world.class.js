class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    statusbar = new Statusbar();
    // statusbarBottle = new StatusbarBottle();
    // extendedArray = [];

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    /**
     * zum verknüpfen unteranderem mit dem keybord
     */
    setWorld() {
        this.character.world = this;
        this.statusbar.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy) ) {
                    // console.log('Collision with Caracter', enemy)

                    // 1 energie verlieren 
                    //caragter koliediert mit denm hunchen und verkliert energy
                    this.character.hit();
                    this.statusbar.setPercentage(this.character.energy);
                    // this.statusbarBottle.setPercentageBottle(this.character.bottle);
                    
   
                    //animation von getroffen absielen 

                    
                    
                    //animation dad abspielen 
                    
                }
            });
        }, 200);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        // this.addObjectsToMap(this.extendedArray);
        this.addObjectsToMap(this.level.backgroundObject);
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusbar);


        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    // draw() {
    //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //     this.ctx.translate(this.camera_x, 0);
    //     this.addObjectsToMap(this.level.backgroundObject);

    //     this.ctx.translate(-this.camera_x, 0);

    //     this.addObjectsToMap(this.level.clouds);
    //     this.addToMap(this.character);
    //     this.addObjectsToMap(this.level.enemies);

    //     this.addToMap(this.statusbar);


    //     let self = this;
    //     requestAnimationFrame(function() {
    //         self.draw();
    //     });
    // }

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