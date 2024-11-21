/**
 * Dynamically updates the inner HTML of the "overlayFooter" element
 * to display a footer with links to Impressum and Data Privacy documents.
 *
 * The footer includes two clickable buttons that trigger respective
 * actions when clicked.
 */
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

/**
 * Clears the content of the "overlayFooter" element by setting its innerHTML to an empty string.
 *
 * This function is useful for resetting or hiding the footer content dynamically.
 */
function footerShow() {
  let overlayFooter = document.getElementById("overlayFooter");
  overlayFooter.innerHTML = "";
}

/**
 * Dynamically updates the "back" element to display a button for navigating back to the main screen.
 *
 * The function clears the existing content of the "back" element and inserts a new clickable button
 * with the text "back". Clicking the button triggers the `backToMain` function.
 */
function backShow() {
  let back = document.getElementById("back");
  back.innerHTML = "";
  back.innerHTML += /*html*/ `
  <div id="btnBack" class="d_j_center" onclick="backToMain()"><h2 class="button">back</h2></div>
`;
}
