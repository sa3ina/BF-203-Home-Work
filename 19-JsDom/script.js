let body = document.querySelector("body");
let container = document.createElement("div");
let divMain = document.createElement("div");
let divThree = document.createElement("div");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div1Header = document.createElement("h4");
let div2Header = document.createElement("h4");
let div3Header = document.createElement("h4");
let div1Parag = document.createElement("p");
let div2Parag = document.createElement("p");
let div3Parag = document.createElement("p");
let div1btn = document.createElement("a");
let div2btn = document.createElement("a");
let div3btn = document.createElement("a");
let text1 = document.createElement("p");
let text2 = document.createElement("p");
let text3 = document.createElement("p");

body.append(container);
container.append(divMain);
container.append(divThree);
divThree.append(div1);
divThree.append(div2);
divThree.append(div3);
div1.append(div1Header);
div2.append(div2Header);
div3.append(div3Header);
div1.append(div1Parag);
div2.append(div2Parag);
div3.append(div3Parag);
div1.append(div1btn);
div2.append(div2btn);
div3.append(div3btn);
div1.append(text1);
div2.append(text2);
div3.append(text3);

container.style.width = "960px";
container.style.height = "96vh";
// container.style.border = "1px solid black";
container.style.margin = "0 auto";

divMain.style.height = "360px";
divMain.style.width = "960px";
divMain.style.backgroundColor = "black";

div1.style.width = "290px";
div1.style.height = "180px";
div1.style.backgroundColor = "black";

div2.style.width = "290px";
div2.style.height = "180px";
div2.style.backgroundColor = "black";

div3.style.width = "290px";
div3.style.height = "180px";
div3.style.backgroundColor = "black";

divThree.style.display = "flex";
divThree.style.margin = "28px 1px";
divThree.style.justifyContent = "space-between";

div1Header.innerText = "Learn how to rock";
div2Header.innerText = "Learn how to rock";
div3Header.innerText = "Learn how to rock";

div1Parag.innerText =
  "Embrace a passionate mindset.Be genuinely interested in what you're doing";
div2Parag.innerText =
  "Embrace a passionate mindset.Be genuinely interested in what you're doing";
div3Parag.innerText =
  "Embrace a passionate mindset.Be genuinely interested in what you're doing";

div1Header.style.marginTop = "190px";
div1Header.style.textAlign = "left";
div1Parag.style.textAlign = "left";

div2Header.style.marginTop = "190px";
div2Header.style.textAlign = "left";
div2Parag.style.textAlign = "left";

div3Header.style.marginTop = "190px";
div3Header.style.textAlign = "left";
div3Parag.style.textAlign = "left";

div1Header.style.fontFamily = "Palatino, URW Palladio L, serif";
div1Parag.style.fontFamily = "Palatino, URW Palladio L, serif";
div1Header.style.fontStyle = "italic";
div1Parag.style.fontStyle = "italic";

div2Header.style.fontFamily = "Palatino, URW Palladio L, serif";
div2Parag.style.fontFamily = "Palatino, URW Palladio L, serif";
div2Header.style.fontStyle = "italic";
div2Parag.style.fontStyle = "italic";

div3Header.style.fontFamily = "Palatino, URW Palladio L, serif";
div3Parag.style.fontFamily = "Palatino, URW Palladio L, serif";
div3Header.style.fontStyle = "italic";
div3Parag.style.fontStyle = "italic";

div1btn.innerText = "Read More ⇒";
div2btn.innerText = "Read More ⇒";
div3btn.innerText = "Read More ⇒";

div1btn.href = "https://www.learntorock.co.uk/";
div1btn.style.color = "orange";
div1btn.style.display = "flex";
div1btn.style.justifyContent = "right";
div1btn.style.textDecoration = "none";

div2btn.href = "https://www.learntorock.co.uk/";
div2btn.style.color = "orange";
div2btn.style.display = "flex";
div2btn.style.justifyContent = "right";
div2btn.style.textDecoration = "none";

div3btn.href = "https://www.learntorock.co.uk/";
div3btn.style.color = "orange";
div3btn.style.display = "flex";
div3btn.style.justifyContent = "right";
div3btn.style.textDecoration = "none";

text1.innerText = "290 x 180px";
text1.style.position = "absolute";
div1.style.position = "relative";
text1.style.left = "35%";
text1.style.top = "35%";
text1.style.color = "white";
text1.style.fontFamily = "arial";

text2.innerText = "290 x 180px";
text2.style.position = "absolute";
div2.style.position = "relative";
text2.style.left = "35%";
text2.style.top = "35%";
text2.style.color = "white";
text2.style.fontFamily = "arial";

text3.innerText = "290 x 180px";
text3.style.position = "absolute";
div3.style.position = "relative";
text3.style.left = "35%";
text3.style.top = "35%";
text3.style.color = "white";
text3.style.fontFamily = "arial";

divMain.innerText = "960 x 360px";
divMain.style.color = "white";
divMain.style.display = "flex";
divMain.style.justifyContent = "center";
divMain.style.alignItems = "center";
divMain.style.fontSize = "28px";
divMain.style.fontFamily = "arial";
