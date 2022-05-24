const body_Tag = Array.from(document.getElementsByTagName("body"))[0];

// Guess The Number! Heading
const h1_Tag = document.createElement("h1");
h1_Tag.setAttribute("class", "main-heading-class");
h1_Tag.innerText = "Guess The Number!";
body_Tag.appendChild(h1_Tag);
