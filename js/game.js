let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    
    console.log('my character is', world.character)

    }

    // window.addEventListener("keydown", (event) => {
    //     if (event.key === "ArrowRight");
    //         keyboard.RIGHT = true
    //     console.log(event);
    // })

    window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39 || e.keyCode == 68) { 
        keyboard.RIGHT = true;
        keyboard.D = true;
    }

    if (event.keyCode == 38 || event.keyCode == 87) {
        keyboard.UP = true;
        keyboard.W = true;
    } 

    if (event.keyCode == 37 || event.keyCode == 65) {
         keyboard.LEFT = true;
        keyboard.A = true;
    } 

    if (event.keyCode == 40 || event.keyCode == 83) {
         keyboard.DOWN = true;
        keyboard.S = true;
    } 

        if (event.keyCode == 32) {
        keyboard.SPACE = true;
    } 

        if (event.keyCode == 13) {
        keyboard.ENTER = true;
    } 



    })


    window.addEventListener("keyup", (e) => {
        if (e.keyCode == 39 || e.keyCode == 68) { 
            keyboard.RIGHT = false;
            keyboard.D = false;
        }
    
        if (event.keyCode == 38 || event.keyCode == 87) {
            keyboard.UP = false;
            keyboard.W = false;
        } 
    
        if (event.keyCode == 37 || event.keyCode == 65) {
             keyboard.LEFT = false;
            keyboard.A = false;
        } 
    
        if (event.keyCode == 40 || event.keyCode == 83) {
             keyboard.DOWN = false;
            keyboard.S = false;
        } 
    
            if (event.keyCode == 32) {
            keyboard.SPACE = false;
        } 
    
            if (event.keyCode == 13) {
            keyboard.ENTER = false;
        } 
    

        })