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

  overlayFooter.innerHTML += `
        <footer>
        <span>
        <div onclick="impressum()" class="d_flex button">Impressum</div>
        </span>
        <span>
        <div onclick="dataPrivacy()" class="d_flex button">Data Privacy</div>
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
  back.innerHTML += `
  <div id="home" onclick="home()"><img class="img" src="img/10_steering/buttons_symbol/home.png" alt="home"></div>
`;
}

function backToMain() {
  // stopGameElements();
  footerShowOverlay();
  document.getElementById("canvas").classList.add("hidden");
  document.getElementById("containerCanvas").classList.add("hidden");
  document.getElementById("startDisplay").classList.remove("hidden");
  document.getElementById("youWin").classList.add("hidden");
  document.getElementById("gameOver").classList.add("hidden");
  document.getElementById("gameButtonsMobile").classList.add("hidden");
  document.getElementById("playButton").classList.remove("hidden");
  document.getElementById("audioButten").classList.add("hidden_imp");
}

function relodeAndHome() {
  // console.log
  let relodHome = document.getElementById("relodHome");
  relodHome.innerHTML = "";

  relodHome.innerHTML += `
    <div  class="d_flex button_div">

      <div id="relod" onclick="relod()"><img class="img" src="img/10_steering/buttons_symbol/reload.png" alt="reload"></div>
    </div>
  `;
}

function relodeAndHomeNone() {
  let relodHome = document.getElementById("relodHome");
  relodHome.innerHTML = "";
}
