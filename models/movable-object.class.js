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
            if(this.isAboveGround()) {
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

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    
    }

    playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
    }

}