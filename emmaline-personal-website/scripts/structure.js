let btnJava = document.querySelector("#btnJava");
let btnCSS = document.querySelector("#btnCSS");
let btnHTML = document.querySelector("#btnHTML");
let btnPython = document.querySelector("#btnPython");
let btnJS = document.querySelector("#btnJS");
let links = document.querySelector("#gitHubLink");

function addJavaGitHubLinks() {
    links.innerHTML = "https://github.com/eewmercer/dorm_room_arranger" + "<br />" + "<br />" + "https://github.com/eewmercer/CS-120---Final-Project/tree/main";
}

function addCSSGitHubLinks() {
    links.innerHTML = "https://github.com/eewmercer/emmaline-personal-website" + "<br />" + "<br />" + "https://github.com/eewmercer/blockchain-wafflehouse";
}

function addHTMLGitHubLinks() {
    links.innerHTML = "https://github.com/eewmercer/emmaline-personal-website";
}

function addPythonGitHubLinks() {
    links.innerHTML = "https://github.com/eewmercer/CS-120---Final-Project/tree/main";
}

function addJSGitHubLinks() {
    links.innerHTML = "https://github.com/eewmercer/blockchain-wafflehouse" + "<br />" + "<br />" + "https://github.com/eewmercer/emmaline-personal-website";
}

btnJava.addEventListener("click", addJavaGitHubLinks);
btnCSS.addEventListener("click", addCSSGitHubLinks);
btnHTML.addEventListener("click", addHTMLGitHubLinks);
btnPython.addEventListener("click", addPythonGitHubLinks);
btnJS.addEventListener("click", addJSGitHubLinks);