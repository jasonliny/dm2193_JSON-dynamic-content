let outBox;
let programmingLanguages = [
  {
    "name" : "Zig",
    "image": "images/Zig.png",
    "creators" : ["Andrew Kelley"],
    "firstAppearance" : "February 8, 2016",
    "color" : "#ff880050"
  },
  {
    "name" : "Rust",
    "image": "images/Rust.png",
    "creators" : ["Graydon Hoare"],
    "firstAppearance" : "July 7, 2010",
    "color" : "#b9410e50"
  },
  {
    "name" : "Vala",
    "image": "images/Vala.png",
    "creators" : ["Jürg Billeter", "Raffaele Sandrini"],
    "firstAppearance" : "2006",
    "color" : "#8800dd50"
  },
  {
    "name" : "JavaScript",
    "image": "images/JavaScript.png",
    "creators": ["Brendan Eich"],
    "firstAppearance" : "December 5, 1995",
    "color" : "#ffdd0050"
  },
  {
    "name" : "Java",
    "image": "images/Java.png",
    "creators": ["James Gosling"],
    "firstAppearance" : "1990",
    "color" : "#6666bb50"
  },
  {
    "name" : "C++",
    "image": "images/C++.png",
    "creators" : ["Bjarne Stroustrup"],
    "firstAppearance" : "1985",
    "color" : "#0000ff50"
  },
  {
    "name" : "C",
    "image": "images/C.png",
    "creators" : ["Dennis Ritchie"],
    "firstAppearance" : "1972",
    "color" : "#44448850"
  }
];

window.addEventListener("DOMContentLoaded", function() {
  outBox = document.getElementById("content");
  for (let i = 0; i < programmingLanguages.length; i++) {
    createContentElem(programmingLanguages[i]);
  }
});


function createContentElem(jsonData) {
  let contentBox = document.createElement("DIV");
  contentBox.style.backgroundColor = jsonData["color"];
  contentBox.classList.add("contentBox");

  let contentHeading = document.createElement("H2");
  contentHeading.innerText = jsonData["name"];
  contentBox.appendChild(contentHeading);

  let contentImg = document.createElement("IMG");
  contentImg.src = jsonData["image"];
  contentBox.appendChild(contentImg);

  let contentCreators = document.createElement("P");
  contentCreators.innerText = "Original Creator";
  if (jsonData["creators"].length > 1) {
    contentCreators.innerText += "s";
  }
  contentCreators.innerText += ": ";
  for (let i = 0; i < jsonData["creators"].length - 1; i++) {
    contentCreators.innerText += jsonData["creators"][i] + ", ";
  }
  contentCreators.innerText += jsonData["creators"][jsonData["creators"].length-1];
  contentBox.appendChild(contentCreators);

  let contentDate = document.createElement("P");
  contentDate.innerText = "First Known Appearance: " + jsonData["firstAppearance"];
  contentBox.appendChild(contentDate);

  outBox.appendChild(contentBox);
}
