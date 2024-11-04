function footerShowOverlay() {
  // if (keepOverlayFooter) {
  let overlayFooter = document.getElementById("overlayFooter");
  // let destopFooter = document.getElementById("destopFooter");
  overlayFooter.innerHTML = "";
  // destopFooter.innerHTML = "";

  overlayFooter.innerHTML += /*html*/ `
        <footer>
        <span onclick="impressum()" class="d_flex">Impressum</span>
        <span onclick="data privacy()" class="d_flex">Data Privacy</span>
        </footer> 
    `;
  // }
}

// function footerShowDestop() {
//   // if (!keepOverlayFooter) {
//   let destopFooter = document.getElementById("destopFooter");
//   // let overlayFooter = document.getElementById("overlayFooter");
//   destopFooter.innerHTML = "";
//   // overlayFooter.innerHTML = "";

//   destopFooter.innerHTML += /*html*/ `
//     <footer>
//       <span class="d_flex">Impressum</span>
//       <span class="d_flex">Datenschutz</span>
//     </footer>
//     `;
// }

function footerShow() {
  let destopFooter = document.getElementById("destopFooter");
  let overlayFooter = document.getElementById("overlayFooter");
  destopFooter.innerHTML = "";
  overlayFooter.innerHTML = "";
}
