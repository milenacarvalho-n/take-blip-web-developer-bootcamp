let count = 0;
let CurrentNumber = document.getElementById("currentNumber");

function incremento() {
  count++;
  if (count <= 20) {
    CurrentNumber.innerHTML = count;
  }
}

function decremento() {
  count--;
  if (count < 0) {
    CurrentNumber.innerHTML = count;
    CurrentNumber.style.color = "red";
  }
}
