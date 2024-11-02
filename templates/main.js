let overlayFooter = document.getElementById("overlayFooter");
let destopFooter = document.getElementById("destopFooter");

function footerShow() {
  let overlayFooter = document.getElementById("overlayFooter");
  let destopFooter = "";

  overlayFooter.innerHTML += /*html*/ `
        <footer id="footer">
        <span class="d_flex">impressum</span>
        <span class="d_flex">datenschutz></span>
        </footer> 
    `;
}

// overlayFooter
// destopFooter
