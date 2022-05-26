const body_Tag = Array.from(document.getElementsByTagName("body"))[0];

// Creating flex-box for Again button and the hint "Between 1 and 20"
const flex_box1 = document.createElement("div");
flex_box1.setAttribute("class", "top-flex");
flex_box1.innerHTML = "<button>Again!</button><span>(Between 1 to 20)</span>";
body_Tag.appendChild(flex_box1);

// Guess The Number! Heading
const h1_Tag = document.createElement("h1");
h1_Tag.setAttribute("class", "main-heading-class");
h1_Tag.innerText = "Guess The Number!";
body_Tag.appendChild(h1_Tag);

// hr and the ? mark box / secret box

const secretNumPara = document.createElement("p");
secretNumPara.setAttribute("class", "secret");
secretNumPara.innerText = "?";
body_Tag.appendChild(secretNumPara);

const hr = document.createElement("hr");
body_Tag.appendChild(hr);
hr.setAttribute("class", "hr-class");

// The parent div to contain left-div & right-div

const parentDiv = document.createElement("div");
parentDiv.setAttribute("id", "parentDiv");
body_Tag.appendChild(parentDiv);

// left-div
const leftDiv = document.createElement("div");
leftDiv.setAttribute("class", "ChildDiv");
leftDiv.setAttribute("id", "LeftChildDiv");
// leftDiv.innerText = "The input section";
parentDiv.appendChild(leftDiv);

// right-div
const rightDiv = document.createElement("div");
rightDiv.setAttribute("class", "ChildDiv");
rightDiv.setAttribute("id", "RightChildDiv");
// rightDiv.innerText = "The input section";
parentDiv.appendChild(rightDiv);

// left
const input_box = document.createElement("input");
input_box.type = "number";
input_box.setAttribute("id", "input-box");
leftDiv.appendChild(input_box);

const check_btn = document.createElement("button");
check_btn.innerText = "Click Me!";
check_btn.setAttribute("id", "check_btn");
leftDiv.appendChild(check_btn);

// right
const para = document.createElement("p");
para.setAttribute("class", "guessing-para");
para.innerText = "Start guessing . . .";
rightDiv.appendChild(para);

const score = document.createElement("div");
score.setAttribute("class", "score");
score.innerHTML = "<span>SCORE : </span><span>0</span>";
rightDiv.appendChild(score);

const highscore = document.createElement("div");
highscore.setAttribute("class", "highscore");
highscore.innerHTML = "<span>HIGHSCORE : </span><span>0</span>";
rightDiv.appendChild(highscore);

// GAME-LOGIC
// 26C1
//
