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
