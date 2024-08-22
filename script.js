
//?target by id, grabs entire element by the id name

let serviceHeading = document.getElementById("serviceAmazing");
console.log(serviceHeading);



//?  target by class name, grabbing multiple elements by class

let serviceElements = document.getElementsByClassName("serviceIcons");
//* makes an array with all the elements with the specified class name.
console.log(serviceElements);

//? grabbing element by css selector
let serviceSupport = document.querySelector(".amazingIcon h3");
console.log(serviceSupport);


//? grabbing all elements by css selection
//* makes an array with all the elements with the specified classname
let serviceColumns = document.querySelectorAll(".serviceIcons h3");
console.log(serviceColumns);


//? modifying elements section
//* if we want to add text use .innerHTML
// using 1st var ex used on this page let serviceHeading
serviceHeading.innerHTML = " 2 LEGIT 2 QUIT";


//? changing text for a specefic idex in a NODE collection
serviceColumns[1].innerHTML = "Pizza";


//? styling elements
//* https://www.w3schools.com/jsref/dom_obj_style.asp
/*
serviceSupport.style.color = "purple";
serviceSupport.style.fontSize = "50px";
serviceSupport.style.boxShadow = "10px 20px 30px purple";
*/

//*function to change  style within an array
/*
function styleCenter(){

 for (let i = 0; i < serviceColumns.length; i++) {
  const element = serviceColumns[i];
  
  serviceColumns[i].style.fontSize = "40px";
  
 }
}

styleCenter();
*/

//? event listeners
let serviceImageOne = document.querySelector(".amazingIcon img");
console.log(serviceImageOne)
/*
serviceImageOne.addEventListener("click", onImagePress )

*/
function onImagePress(){
 console.log("hey you pressed me")
}


//
let servicesText = document.querySelectorAll(".service h3");
console.log(servicesText)


function stylingText(){
for (let i = 0; i < servicesText.length; i++) {
 const element = servicesText[i];

 servicesText[i].style.color = "dodgerblue";
 servicesText[i].style.fontSize ="40px";
}
}
serviceImageOne.addEventListener("click", stylingText);


//! test

let testImage = document.querySelectorAll(".webLogos img");
console.log(testImage);
let navBarColor = document.querySelectorAll("navList a");
console.log(navBarColor);

for(n=0;n<navBarColor.length;n++){
 navBarColor.push(n)
}

function navTextColor(){
 for (let i = 0; i < testImage.length; i++) {
  const element = testImage[i];
  console.log(element)
  if (element ===testImage[3]){
   navBarColor.style.color = "dodgerblue";
  }
  
 }
}

testImage.addEventListener("click", navTextColor)
