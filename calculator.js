const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//Define function to calculate based on button clicked.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //If output has '%', replace with '/100' before evaluating.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //If DEL button is clicked, remove the last character from the output.
    output = output.toString().slice(0, -1);
  } else {
    //If output is empty and button is specialChars then return
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
  //Button click listener calls calculate() with dataset value as argument.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
 function Solve(val) {
         var v = document.getElementById('res');
         v.value += val;
      }
      function Result() {
         var num1 = document.getElementById('res').value;
         var num2 = eval(num1);
         document.getElementById('res').value = num2;
      }
      function Clear() {
         var inp = document.getElementById('res');
         inp.value = '';
      }
      function Back() {
         var ev = document.getElementById('res');
         ev.value = ev.value.slice(0,-1);
      }