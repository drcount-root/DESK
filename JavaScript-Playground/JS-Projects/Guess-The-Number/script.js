const body_Tag = Array.from(document.getElementsByTagName("body"))[0];

// Creating flex-box for Again button and the hint "Between 1 and 20"
const flex_box1 = document.createElement("div");
flex_box1.setAttribute("class", "top-flex");
flex_box1.innerHTML =
  "<button>Again!</button><span>(Between 1 to 20)</span>";
body_Tag.appendChild(flex_box1);

// Guess The Number! Heading
const h1_Tag = document.createElement("h1");
h1_Tag.setAttribute("class", "main-heading-class");
h1_Tag.innerText = "Guess The Number!";
body_Tag.appendChild(h1_Tag);
