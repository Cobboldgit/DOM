// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length; i++) {
//   text += x.elements[i].value + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

// //Changing the Value of an Attribute

// document.getElementById("myImage").src = "a.png";

// let p = document.createElement('p')

// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     document.getElementById('a').innerHTML = 'Input is empty'
//     return false;
//   }
// }

function myFunc() {
  let x = document.getElementById("numb").value
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }

  document.getElementById('demo').innerHTML = text
}
