var screen = document.querySelector("#screen");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var zero = document.querySelector("#zero");
var clear = document.querySelector("#c");
var mul = document.querySelector("#mul");
var div = document.querySelector("#div");
var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var equal = document.querySelector("#equal");
var numKeys = [one, two, three, four, five, six, seven, eight, nine, zero];
let operations = [plus, minus, div, mul];
operationsValue = [
  plus.textContent,
  minus.textContent,
  div.textContent,
  mul.textContent,
];
document.addEventListener("load", function () {
  screen.textContent = "";
});
clear.addEventListener("click", function () {
  screen.textContent = "";
});
// /////////////////////
numKeys.forEach(key => {
  key.addEventListener("click", function () {
    // console.log(key.textContent);
    screen.textContent += key.textContent;
  });
});

operations.forEach(key => {
  key.addEventListener("click", function () {
    if (
      !operationsValue.includes(
        screen.textContent[screen.textContent.length - 1]
      )
    ) {
      screen.textContent += key.textContent;
    } else {
      let screenArray = [...screen.textContent];
      screenArray[screenArray.length - 1] = key.textContent;
      screen.textContent = screenArray.join("");
    }
  });
});
//////////////////
equal.addEventListener("click", function () {
  if (
    !operationsValue.includes(screen.textContent[screen.textContent.length - 1])
  ) {
    let sumString = screen.textContent;
    screen.textContent = eval(sumString);
  }
});
