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
  document.getElementById("buttonDiv").classList.add("hidden");
  document.getElementById("playButton").classList.remove("hidden");
  document.getElementById("audioButten").classList.add("hidden_imp");
}

function relodeAndHome() {
  // console.log
  let relodHome = document.getElementById("relodHome");
  relodHome.innerHTML = "";

  relodHome.innerHTML += `
    <div  class="d_flex button_div">
      <div id="home" onclick="home()"><img class="img" src="img/10_steering/buttons_symbol/home.png" alt="home"></div>
      <div id="relod" onclick="relod()"><img class="img" src="img/10_steering/buttons_symbol/reload.png" alt="reload"></div>
    </div>
  `;
}

function relodeAndHomeNone() {
  let relodHome = document.getElementById("relodHome");
  relodHome.innerHTML = "";
}

function showImpressum() {
  let overlayFooter = document.getElementById("overlayFooter");
  overlayFooter.innerHTML = "";
  overlayFooter.innerHTML += `
<div class='impressum'><h1>Impressum</h1><p>Angaben gemäß § 5 DDG</p><p>Theo Seidenberger <br> 
Sudetenstrasse 6<br> 
82362 Weilheim <br> 
</p><p> <strong>Vertreten durch: </strong><br>
Theo Seidenberger<br>
</p><p><strong>Kontakt:</strong> <br>
E-Mail: <a href='mailto:theo.seidenberger@web.de'>theo.seidenberger@web.de</a></br></p><br> 
Impressum vom <a href="https://www.impressum-generator.de">Impressum Generator</a> der <a href="https://www.kanzlei-hasselbach.de/standorte/bonn/" rel="nofollow">Kanzlei Hasselbach, Bonn</a> </div>
 
`;
}

function showDataPrivacy() {
  let overlayFooter = document.getElementById("overlayFooter");
  overlayFooter.innerHTML = "";
  overlayFooter.innerHTML += `


`;
}
