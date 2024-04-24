let btnJava = document.querySelector("#btnJava");
let btnCSS = document.querySelector("#btnCSS");
let btnHTML = document.querySelector("#btnHTML");
let btnPython = document.querySelector("#btnPython");
let btnJS = document.querySelector("#btnJS");
let links = document.querySelector("#gitHubLink");

function addJavaGitHubLinks() {
    links.innerHTML = "<a href='https://github.com/eewmercer/dorm_room_arranger' target='_blank'>Dorm Room Arranger App</a>";
}

function addCSSGitHubLinks() {
    links.innerHTML = "<a href='https://github.com/eewmercer/emmaline-personal-website' target='_blank'>Personal Website</a>" 
    + "<br />" + "<br />" + "<a href='https://github.com/eewmercer/blockchain-wafflehouse' target='_blank'>Attendance App Using Blockhain</a>";
}

function addHTMLGitHubLinks() {
    links.innerHTML = "<a href='https://github.com/eewmercer/emmaline-personal-website' target='_blank'>Personal Website</a>";
}

function addPythonGitHubLinks() {
    links.innerHTML = "<a href='https://github.com/eewmercer/CS-120---Final-Project/tree/main' target='_blank'>Choose Your Own Adventure Game</a>";

}

function addJSGitHubLinks() {
    links.innerHTML = "<a href='https://github.com/eewmercer/emmaline-personal-website' target='_blank'>Personal Website</a>" 
    + "<br />" + "<br />" + "<a href='https://github.com/eewmercer/blockchain-wafflehouse' target='_blank'>Attendance App Using Blockhain</a>";
}

btnJava.addEventListener("click", addJavaGitHubLinks);
btnCSS.addEventListener("click", addCSSGitHubLinks);
btnHTML.addEventListener("click", addHTMLGitHubLinks);
btnPython.addEventListener("click", addPythonGitHubLinks);
btnJS.addEventListener("click", addJSGitHubLinks);