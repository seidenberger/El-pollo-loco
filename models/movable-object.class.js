class MovableObject {
    x = 50;
    y = 270;
    img;
    // height = 150;
    // width = 100;
    currentImage = 0;
    imageCache = {};
    speed = 0.05;
    otherDiretion = false;
    
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
}