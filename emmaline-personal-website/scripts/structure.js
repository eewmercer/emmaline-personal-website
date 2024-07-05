let btnJava = document.querySelector("#btnJava");
let btnCSS = document.querySelector("#btnCSS");
let btnHTML = document.querySelector("#btnHTML");
let btnPython = document.querySelector("#btnPython");
let btnJS = document.querySelector("#btnJS");
let links = document.querySelector("#gitHubLink");

let home = document.querySelector("#home");
let about = document.querySelector("#about");
// let projects = document.querySelector("#projects");

home.addEventListener("click", () => {
    window.location.href = "./index.html";
    console.log('hi');
});

about.addEventListener("click", () => {
    window.location.href = "./about.html";
    console.log('hi');
});

// projects.addEventListener("click", () => {
//     window.location.href = "./projects.html";
//     console.log('hi');
// });

btnJava.addEventListener("click", () => {
    links.innerHTML = "<a href='https://github.com/eewmercer/dorm_room_arranger' target='_blank'>Dorm Room Arranger App</a>";
});

btnCSS.addEventListener("click", () => {
    links.innerHTML = "<a href='https://github.com/eewmercer/emmaline-personal-website' target='_blank'>Personal Website</a>" 
    + "<br />" + "<br />" + "<a href='https://github.com/eewmercer/blockchain-wafflehouse' target='_blank'>Attendance App Using Blockhain</a>";
});

btnHTML.addEventListener("click", () => {
    links.innerHTML = "<a href='https://github.com/eewmercer/emmaline-personal-website' target='_blank'>Personal Website</a>"
    + "<br />" + "<br />" + "<a href='https://github.com/eewmercer/blockchain-wafflehouse' target='_blank'>Attendance App Using Blockhain</a>";
});

btnPython.addEventListener("click", () => {
    links.innerHTML = "<a href='https://github.com/eewmercer/CS-120---Final-Project/tree/main' target='_blank'>Choose Your Own Adventure Game</a>";
});

btnJS.addEventListener("click", () => {
    links.innerHTML = "<a href='https://github.com/eewmercer/emmaline-personal-website' target='_blank'>Personal Website</a>" 
    + "<br />" + "<br />" + "<a href='https://github.com/eewmercer/blockchain-wafflehouse' target='_blank'>Attendance App Using Blockhain</a>";
});

