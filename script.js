//DOM Manipulations
const myheading = document.getElementById("main-heading")
console.log(myheading);

const paragraph = document.querySelector(".first-paragraph")

//Using getElementByClassName
const par2 = document.getElementsByClassName("second-paragraph")
console.log(paragraph);
console.log(par2);

//Changing the heading color
myheading.style.color = "Blue";

//Changing the text of heading
myheading.innerHTML = "Hello!, my name is EMPRESS!";

//Changing paragraph content
paragraph.textContent = "This is also changed in Js."