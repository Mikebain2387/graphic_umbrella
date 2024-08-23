
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
// #1
//? image node list
let testImage = document.querySelectorAll(".webLogos img");
console.log(testImage);

//? nav list node list
let navBarColor = document.querySelectorAll(".navList a");
console.log(navBarColor);



function navTextColor(){
 //? for loop, loops through my nav list items and returns them inside const element
 for (let i = 0; i < navBarColor.length; i++) {
  const element = navBarColor[i];
  console.log(element[i])
  

   navBarColor[i].style.color = "dodgerblue";
  
  
 }
}
//? testImage[3] calls my mobiel image which was the 4th item in the image node list.  onced clicked runs function 
testImage[3].addEventListener("click", navTextColor)

// #2

//let serviceColumns = document.querySelectorAll(".serviceIcons h3");
//? changes text back from pizza to support
console.log(serviceColumns);
serviceColumns[1].innerHTML = "Support";

// #3

let hoverSpan = document.getElementsByClassName("highlight");
console.log(hoverSpan)
function hoveredChange(){
 console.log("Mr. Portfolio")
}

hoverSpan[0].addEventListener("mouseover", hoveredChange);

//#4
let businessCardButtons = document.getElementsByClassName('boxButton');
console.log(businessCardButtons);

function boxButtonColorChange(){
 for (let i = 0; i < businessCardButtons.length; i++) {
  const element = businessCardButtons[i];
businessCardButtons[i].style.background="purple"
  
 }
}

//businessCardButtons[0].addEventListener("click" , boxButtonColorChange)
boxButtonColorChange()


// #5
/*
let mooImage = document.getElementsByClassName("miniCardImage");
console.log(mooImage)



mooImage[0].addEventListener("click", () => {
 let portfolioSubHeadings = document.querySelectorAll('.boxContent h3');
 console.log(portfolioSubHeadings)
});


 for (let i = 0; i < portfolioSubHeadings.length; i++) {
  const element = portfolioSubHeadings[i];
  portfolioSubHeadings[i].style.fontSize = "60px"
 };


*/




 //! grabbing an elements text value:
let webTitle = document.querySelector(".webIcon h3").innerText;
console.log(webTitle)

//* or console.log(webTitle.innerText)



//!  input boxes
//? grabbing values
//? onChanges

//? eventlistener

let inputName = document.getElementById('name')
console.log(inputName)