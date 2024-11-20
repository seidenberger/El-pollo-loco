function footerShowOverlay() {
  let overlayFooter = document.getElementById("overlayFooter");
  overlayFooter.innerHTML = "";

  overlayFooter.innerHTML += /*html*/ `
        <footer>
        <span>
        <a href="./footer/impressum_theo_seidenberger_developerakademie_net_de.pdf"  onclick="impressum()" class="d_flex button">Impressum</a>
        </span>
        <span>
        <a href="./footer/datenschutzerklaerung_theo_seidenberger_developerakademie_net_de.pdf"  onclick="dataPrivacy()" class="d_flex button">Data Privacy</a>
        </span>

    `;
}

function footerShow() {
  let destopFooter = document.getElementById("destopFooter");
  let overlayFooter = document.getElementById("overlayFooter");
  // destopFooter.innerHTML = "";
  overlayFooter.innerHTML = "";
}

function backShow() {
  let back = document.getElementById("back");
  back.innerHTML = "";
  back.innerHTML += /*html*/ `
  <div id="btnBack" class="d_j_center" onclick="backToMain()"><h2 class="button">back</h2></div>
`;
}
