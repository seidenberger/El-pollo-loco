function footerShowOverlay() {
  let overlayFooter = document.getElementById("overlayFooter");
  let destopFooter = document.getElementById("destopFooter");
  overlayFooter.innerHTML = "";
  destopFooter.innerHTML = "";

  overlayFooter.innerHTML += /*html*/ `
        <footer>
        <span class="d_flex">impressum</span>
        <span class="d_flex">datenschutz></span>
        </footer> 
    `;
}

function footerShowDestop() {
  let destopFooter = document.getElementById("destopFooter");
  let overlayFooter = document.getElementById("overlayFooter");
  destopFooter.innerHTML = "";
  overlayFooter.innerHTML = "";

  destopFooter.innerHTML += /*html*/ `
  <footer>
  <span class="d_flex">impressum</span>
  <span class="d_flex">datenschutz></span>
  </footer> 
`;
}

function footerShow() {
  let destopFooter = document.getElementById("destopFooter");
  let overlayFooter = document.getElementById("overlayFooter");
  destopFooter.innerHTML = "";
  overlayFooter.innerHTML = "";
}
