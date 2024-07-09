class DrawabelObject {

    x = 50;
    y = 270;

    // height = 150;
    // width = 100;
    img;
    imageCache = {};
    currentImage = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    // a(ctx) {

    //     if (this instanceof Character || this instanceof Chicken || this instanceof Endboss ||
    //          this instanceof ChickenSmall || this instanceof Coin || this instanceof Bottle) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '5';
    //         ctx.strokeStyle = 'green';
    //         ctx.rect(this.x, this.y, this.width, this.height);
    //         ctx.stroke();
    //     }
    // }
    drawFrameOffset(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss ||
             this instanceof ChickenSmall || this instanceof Coin || this instanceof Bottle) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.right - this.offset.left,
                this.height - this.offset.top - this .offset.bottom
                );
            ctx.stroke();
        }
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


}