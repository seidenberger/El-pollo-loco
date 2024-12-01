class EndScreen extends MovableObject {
  height = 480;
  width = 720;

  Images_Win = [
    "img/9_intro_outro_screens/win/win_1.png",
    "img/9_intro_outro_screens/win/win_2.png",
    "img/9_intro_outro_screens/win/won_1.png",
    "img/9_intro_outro_screens/game_over/you lost.png",
  ];

  Images_Game_Over = [
    "img/9_intro_outro_screens/game_over/game over!.png",
    "img/9_intro_outro_screens/game_over/game over.png",
    "img/9_intro_outro_screens/game_over/oh no you lost!.png",
    "img/9_intro_outro_screens/game_over/you lost.png",
  ];

  constructor() {
    super();
    // this.context = ctx;
    this.loadedImages = {};
    this.loadImages(this.Images_Win);
    this.loadImages(this.Images_Game_Over);
  }

  //   // Bilder vorladen
  //   loadImages(imageArray) {
  //     imageArray.forEach((src) => {
  //       const img = new Image();
  //       img.src = src;
  //       this.loadedImages[src] = img;
  //     });
  //   }

  //   // Endscreen anzeigen
  //   showEndScreen(win) {
  //     const images = win ? this.Images_Win : this.Images_Game_Over;
  //     const randomImageSrc = images[Math.floor(Math.random() * images.length)];
  //     const image = this.loadedImages[randomImageSrc];

  //     // Canvas löschen
  //     this.context.clearRect(
  //       0,
  //       0,
  //       this.context.canvas.width,
  //       this.context.canvas.height
  //     );

  //     // Bild zeichnen
  //     image.onload = () => {
  //       this.context.drawImage(
  //         image,
  //         0,
  //         0,
  //         this.context.canvas.width,
  //         this.context.canvas.height
  //       );
  //     };

  //     // Falls das Bild bereits geladen ist, sofort zeichnen
  //     if (image.complete) {
  //       this.context.drawImage(
  //         image,
  //         0,
  //         0,
  //         this.context.canvas.width,
  //         this.context.canvas.height
  //       );
  //     }
  //   }
}
