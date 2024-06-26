class MovableObject {
    x = 50;
    y = 270;
    img;
    // height = 150;
    // width = 100;
    currentImage = 0;
    imageCache = {};
    speed = 0.05;
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    

    
    applayGravitty() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround(){
        return this.y < 190;
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * 
     * @param {array} array -['img/image1.png', 'img/image1.png', ...] 
     */
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {   
        
        if(this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'green';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }

    moveRight() {
        this.x += this.speed;

    }

    moveLeft() {
        this.x -= this.speed;

    }


    playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
    }

}