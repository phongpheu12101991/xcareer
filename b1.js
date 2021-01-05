function addTwoDigits(n) {
  return Number(`${n}`[0]) + Number(`${n}`[1]);
}

function largestNumber(n) {
  return 10 ** n - 1;
}

let sum = document.getElementById("sum");
let b1 = document.getElementById("b1");
let result = document.getElementById("result");
let error = document.getElementById("error");
let sum2 = document.getElementById("sum2");
let b2 = document.getElementById("b2");
let result2 = document.getElementById("result2");
let error2 = document.getElementById("error2");

sum.addEventListener("click", () => {
  if (b1.value.toString().length !== 2 || b1.value < 10) {
    result.innerText = "";
    return (error.innerText = "Only 2 digits");
  }
  error.innerText = "";
  result.innerText = addTwoDigits(b1.value);
});

sum2.addEventListener("click", () => {
  if (Number(b2.value) !== Math.floor(b2.value)) {
    result2.innerText = "";
    return (error2.innerText = "Not interger");
  }
  error2.innerText = "";
  result2.innerText = largestNumber(b2.value);
});
