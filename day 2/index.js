let decimalBtn = document.getElementById("calc-decimal");
let clearBtn = document.getElementById("calc-clear");
let backspaceBtn = document.getElementById("calc-backspace");
let displayValElement = document.getElementById("calc-display-val");
let calcNumBtns = document.getElementsByClassName("calc-btn-num");
let calcOperatorBtn = document.getElementsByClassName("calc-btn-operator");

let displayVal = "0";
let pendingVal;
let evalStringArray = [];
let equalToClick = false;

// display numbers on screen
const updateDisplayVal = (clickObject) => {
  let btnText = clickObject.target.innerText;

  if (displayVal === "0" || equalToClick) {
    displayVal = "";
  }

  displayVal += btnText;
  displayValElement.innerText = displayVal;
};

for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener("click", updateDisplayVal, false);
}

//operators
const performOperation = (clickObject) => {
  let operator = clickObject.target.innerText;

  switch (operator) {
    case "+":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("+");
      break;
    case "-":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("-");
      break;
    case "X":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("*");
      break;
    case '÷':
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("/");
      break;
    case "=":
      evalStringArray.push(displayVal);
      let evaluation = eval(evalStringArray.join(" "));
      displayVal = evaluation + "";
      displayValElement.innerText = displayVal;
      evalStringArray = [];
      equalToClick = true
    default:
      break;
  }
};

for (let i = 0; i < calcOperatorBtn.length; i++) {
  calcOperatorBtn[i].addEventListener("click", performOperation, false);
}

//clear button
clearBtn.onclick = () => {
    equalToClick = false;
  displayVal = "0";
  evalStringArray = [];
  pendingVal = undefined;
  displayValElement.innerText = displayVal;
};

// backspace
backspaceBtn.onclick = () => {
  let lengthOfDisplayVal = displayVal.length;

  displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

  if (displayVal === "") {
    displayVal = "0";
  }

  displayValElement.innerText = displayVal;
};

// decimal
decimalBtn.onclick = () => {
  if (!displayVal.includes(".")) {
    displayVal += ".";
    displayValElement.innerText = displayVal;
  }
};
